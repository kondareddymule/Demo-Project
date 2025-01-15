function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden");
}

window.addEventListener('DOMContentLoaded', (event) => {
  const menus = document.querySelectorAll('.menu');
  
  const currentUrl = window.location.href;

  menus.forEach(menu => {
      const link = menu.querySelector('.links');
      if (link.href === currentUrl) {
          menu.classList.add('active'); 
          link.classList.add('active');
      }
  });
});


const products = JSON.parse(localStorage.getItem('Products'));

/// Get references to the DOM elements
const productsContainer = document.getElementById('products');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-btn');
const modalContent = document.querySelector('.modal-content');
const closeModalButton = document.createElement('button');

// Function to populate the gallery with products
function renderGallery(products) {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');

        const productImage = document.createElement('img');
        productImage.src = product.Image;
        productImage.alt = product.Name;
        productImage.classList.add('gallery-img');
        
        // Add click event to open modal
        productImage.addEventListener('click', () => {
            openModal(product);
        });

        productDiv.appendChild(productImage);
        productsContainer.appendChild(productDiv);
    });
}

// Function to open modal and display product details
// Function to open modal and display product details
function openModal(product) {

    // Create a div to wrap image and details
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('modal-wrapper');  // You can add a custom class for styling

    // Set the modal image
    const modalImage = document.createElement('img');
    modalImage.src = product.Image;
    modalImage.classList.add('modal-image');
    
    // Set the modal details
    const modalDetails = document.createElement('div');
    modalDetails.id = 'modal-details';
    
    modalDetails.innerHTML = `
        <h2>${product.Name}</h2>
        <p><span>Id:</span> ${product.Id}</p>
        <p><span>Title:</span> ${product.Title}</p>
        <p><span>Description:</span> ${product.Description}</p>
        <p><span>Price:</span> $${product.Price}</p>
        <p><span>Status:</span> ${product.Status}</p>
        <p><span>Vendor Name:</span> ${product['Vendor Name']}</p>
        <p><span>Product Type:</span> ${product['Product type']}</p>
        <p><span>Address:</span> ${product.Address}</p>
        <p><span>Available Quantity:</span> ${product['Available Quantity']}</p>
        <p><span>Sale Price:</span> $${product['Sale Price']}</p>
        <p><span>Buying Price:</span> ${product['Buying Price']}</p>
        <p><span>Created Date:</span> ${new Date(product['Created Date Time']).toLocaleString()}</p>
        <p><span>Modified Date:</span> ${new Date(product['Modified Date Time']).toLocaleString()}</p>
        <p><span>Delivery Date:</span> ${product['Delivery Date'] ? new Date(product['Delivery Date']).toLocaleString() : 'N/A'}</p>
    `;

    // Add "Product Details" header and the close span to the top of the modal content
    const productDetailsHeader = document.createElement('p');
    productDetailsHeader.textContent = 'Product Details';
    productDetailsHeader.style.fontSize = '20px';
    productDetailsHeader.style.fontWeight = 'bold';
    
    const closeModalSpan = document.createElement('span');
    closeModalSpan.classList.add('close-btn');
    closeModalSpan.textContent = '×';
    closeModalSpan.style.position = 'absolute';
    closeModalSpan.style.top = '10px';
    closeModalSpan.style.right = '10px';
    closeModalSpan.style.fontSize = '30px';
    closeModalSpan.style.cursor = 'pointer';
    
    closeModalSpan.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Append the header and close button at the top of the modal content
    modalContent.innerHTML = '';  // Clear previous modal content
    modalContent.appendChild(productDetailsHeader);
    modalContent.appendChild(closeModalSpan);

    // Now append the wrapper div which contains both image and details
    wrapperDiv.appendChild(modalImage);
    wrapperDiv.appendChild(modalDetails);
    
    // Append the wrapperDiv to the modal content
    modalContent.appendChild(wrapperDiv);
    
    // Create and add the bottom close button
    closeModalButton.textContent = 'Close';
    closeModalButton.style.padding = '10px 20px';
    closeModalButton.style.backgroundColor = '#f44336';
    closeModalButton.style.color = 'white';
    closeModalButton.style.border = 'none';
    closeModalButton.style.fontSize = '18px';
    closeModalButton.style.cursor = 'pointer';
    
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Append the close button at the bottom of the modal content
    modalContent.appendChild(closeModalButton);

    // Display the modal
    modal.style.display = 'flex';
}


// Close the modal when the close span is clicked (already handled above)
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Initially render the gallery
renderGallery(products);
