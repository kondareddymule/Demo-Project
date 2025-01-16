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


const initialProducts = [
    {
        "Id": "P001",
        "Name": "Smartphone",
        "Title": "Latest Model Smartphone",
        "Description": "A high-end smartphone with 128GB storage.",
        "Price": 699,
        "Status": "Active",
        "Vendor Name": "Tech Corp",
        "Product type": "Electronics",
        "Address": "123 Tech Street, Bengaluru",
        "Available Quantity": 50,
        "Sale Price": 649,
        "Buying Price": 600.00,
        "Created Date Time": "1/13/2025, 11:13:48 AM",
        "Modified Date Time": "1/13/2025, 11:13:48 PM",
        "Delivery Date": "2025-01-16T18:15",
        "Image": "https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_1280.jpg"
    },
    {
        "Id": "P002",
        "Name": "Laptop",
        "Title": "Professional Laptop",
        "Description": "A powerful laptop suitable for work and gaming.",
        "Price": 1099,
        "Status": "Draft",
        "Vendor Name": "Compute Tech",
        "Product type": "Electronics",
        "Address": "456 Compute Avenue, Bengaluru",
        "Available Quantity": 30,
        "Sale Price": 1049,
        "Buying Price": 1000,
        "Created Date Time": "1/13/2025, 11:13:48 AM",
        "Modified Date Time": "1/13/2025, 11:13:48 PM",
        "Delivery Date": "2025-01-16T18:15",
        "Image": "https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_1280.jpg"
    },
    {
        "Id": "P003",
        "Name": "Headphones",
        "Title": "Wireless Headphones",
        "Description": "Comfortable and high-quality wireless headphones.",
        "Price": 199,
        "Status": "Delivered",
        "Vendor Name": "Sound Magic",
        "Product type": "Electronics",
        "Address": "789 Sound Road, Bengaluru",
        "Available Quantity": 100,
        "Sale Price": 179,
        "Buying Price": 150,
        "Created Date Time": "1/13/2025, 11:13:48 AM",
        "Modified Date Time": "1/13/2025, 11:13:48 PM",
        "Delivery Date": "2025-01-16T18:15",
        "Image": "https://cdn.pixabay.com/photo/2020/09/23/20/27/headphones-5596987_1280.jpg"
    },
    {
        "Id": "P004",
        "Name": "Smartphone",
        "Title": "Latest Model Smartphone",
        "Description": "A high-end smartphone with 128GB storage.",
        "Price": 699,
        "Status": "Active",
        "Vendor Name": "Tech Corp",
        "Product type": "Electronics",
        "Address": "123 Tech Street, Bengaluru",
        "Available Quantity": 50,
        "Sale Price": 649,
        "Buying Price": 600,
        "Created Date Time": "1/13/2025, 11:13:48 AM",
        "Modified Date Time": "1/13/2025, 11:13:48 PM",
        "Delivery Date": "2025-01-16T18:15",
        "Image": "https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_1280.jpg"
    },
    {
        "Id": "P005",
        "Name": "Laptop",
        "Title": "Professional Laptop",
        "Description": "A powerful laptop suitable for work and gaming.",
        "Price": 1099,
        "Status": "Draft",
        "Vendor Name": "Compute Tech",
        "Product type": "Electronics",
        "Address": "456 Compute Avenue, Bengaluru",
        "Available Quantity": 30,
        "Sale Price": 1049,
        "Buying Price": 1000,
        "Created Date Time": "1/13/2025, 11:13:48 AM",
        "Modified Date Time": "1/13/2025, 11:13:48 PM",
        "Delivery Date": "2025-01-16T18:15",
        "Image": "https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_1280.jpg"
    },
    {
        "Id": "P006",
        "Name": "Headphones",
        "Title": "Wireless Headphones",
        "Description": "Comfortable and high-quality wireless headphones.",
        "Price": 199,
        "Status": "Delivered",
        "Vendor Name": "Sound Magic",
        "Product type": "Electronics",
        "Address": "789 Sound Road, Bengaluru",
        "Available Quantity": 100,
        "Sale Price": 179,
        "Buying Price": 150,
        "Created Date Time": "1/13/2025, 11:13:48 AM",
        "Modified Date Time": "1/13/2025, 11:13:48 PM",
        "Delivery Date": "2025-01-16T18:15",
        "Image": "https://cdn.pixabay.com/photo/2020/09/23/20/27/headphones-5596987_1280.jpg"
    }
];

if (!localStorage.getItem('Products')) {
    localStorage.setItem('Products', JSON.stringify(initialProducts));
}



const products = JSON.parse(localStorage.getItem('Products')) || [];

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip-container');
document.body.appendChild(tooltip);

function renderProducts(products) {
    const tableBody = document.querySelector('#productTable tbody');
    tableBody.innerHTML = ''; // Clear previous content

    const tableContainer = document.querySelector('.tabledata');

    const existingNoProductsMessage = document.querySelector('.no-products-message');
    if (existingNoProductsMessage) {
        existingNoProductsMessage.remove();
    }

    if (products.length === 0) {
        const noProductsMessage = document.createElement('div');
        noProductsMessage.classList.add('no-products-message');
        noProductsMessage.innerText = 'No products to show';
        tableContainer.appendChild(noProductsMessage);
        selectAllCheckbox.checked = false;
    } else {
        products.forEach(product => {
            const row = document.createElement('tr');

            let statusClass = '';
            switch (product.Status) {
                case 'Active':
                    statusClass = 'active-status';
                    break;
                case 'Draft':
                    statusClass = 'draft-status';
                    break;
                case 'Delivered':
                    statusClass = 'delivered-status';
                    break;
                case 'Cancelled':
                    statusClass = 'cancelled-status';
                    break;
                case 'Shipped':
                    statusClass = 'shipped-status';
                    break;
            }

            row.innerHTML = `
                <td><input type="checkbox" class="item-checkbox" onclick="toggleActionBar()"></td>
                <td class="tooltip" data-full-text="${product.Id}">${product.Id}</td>
                <td class="tooltip" data-full-text="${product.Name}">${product.Name}</td>
                <td class="tooltip" data-full-text="${product.Title}">${product.Title}</td>
                <td class="tooltip" data-full-text="${product.Description}">${product.Description}</td>
                <td class="tooltip" data-full-text="${product.Price}">${product.Price}</td>
                <td class="tooltip ${statusClass}" data-full-text="${product.Status}">${product.Status}</td>
                <td class="tooltip" data-full-text="${product['Vendor Name']}">${product['Vendor Name']}</td>
                <td class="tooltip" data-full-text="${product['Product type']}">${product['Product type']}</td>
                <td class="tooltip" data-full-text="${product.Address}">${product.Address}</td>
                <td class="action-col">
                    <button class="view-btn" data-id="${product.Id}" onclick="openViewModal('${product.Id}')"><i class="fa fa-eye" style="color: blue"></i></button>
                    <button class="edit-btn" data-id="${product.Id}" onclick="openEditModal('${product.Id}')"><i class="fa fa-pencil-alt" style="color: orange"></i></button>
                    <button class="delete-btn" data-id="${product.Id}" onclick="deleteProduct('${product.Id}')"><i class="fa fa-trash" style="color: red"></i></button>
                </td>
`;

            tableBody.appendChild(row);
            toggleActionBar()
        });

        const tooltipCells = document.querySelectorAll('.tooltip');
        tooltipCells.forEach(cell => {
            cell.addEventListener('mouseover', function() {
                const fullText = this.getAttribute('data-full-text');
                tooltip.innerText = fullText;
                tooltip.style.display = 'block';
                const rect = this.getBoundingClientRect();
                tooltip.style.left = `${rect.left}px`;
                tooltip.style.top = `${rect.top - tooltip.offsetHeight - 5}px`; // Tooltip above the cell
            });

            cell.addEventListener('mouseout', function() {
                tooltip.style.display = 'none';
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const selectAllCheckbox = document.getElementById('select-all');
    selectAllCheckbox.checked = false;
    toggleActionBar();
});

function deleteItem(productId) {
    const updatedProducts = products.filter(product => product.Id !== productId);
    localStorage.setItem('Products', JSON.stringify(updatedProducts));
    renderProducts(updatedProducts);
}

// Select All Checkbox Functionality
function selectAll() {
    const checkboxes = document.querySelectorAll('.item-checkbox');
    const isChecked = document.getElementById('select-all').checked;
    checkboxes.forEach(checkbox => checkbox.checked = isChecked);
    toggleActionBar();
}

// Toggle the Action Bar and Disable/Enable Individual Buttons
function toggleActionBar() {
    const selectedCheckboxes = document.querySelectorAll('.item-checkbox:checked');
    const allCheckboxes = document.querySelectorAll('.item-checkbox');
    const selectAllCheckbox = document.getElementById('select-all');
    const actionBar = document.getElementById('action-bar');
    const deleteButton = document.getElementById('delete-selected');

    const allChecked = [...allCheckboxes].every(checkbox => checkbox.checked);
    selectAllCheckbox.checked = allChecked;

    const actionButtons = document.querySelectorAll('.action-col button');

    if (selectedCheckboxes.length > 0) {
        actionBar.classList.add('active');
        actionButtons.forEach(button => {
            button.disabled = true;
        });
        deleteButton.style.display = 'inline-block';
    } else {
        actionBar.classList.remove('active');
        actionButtons.forEach(button => {
            button.disabled = false;
        });
        deleteButton.style.display = 'none';
    }
}

// Run this function
document.addEventListener('DOMContentLoaded', function() {
    const selectAllCheckbox = document.getElementById('select-all');
    selectAllCheckbox.checked = false;
    toggleActionBar();
});


//Delete Selected Items
function deleteSelectedItems() {
    const selectedItems = getSelectedItems();
    if (selectedItems.length === 0) {
        alert("No items selected for deletion.");
        return;
    }

    document.getElementById('deleteConfirmationModal').style.display = 'block';
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

    confirmDeleteBtn.onclick = function() {
        if (document.getElementById('confirmDelete').checked) {
            const products = JSON.parse(localStorage.getItem('Products')) || [];
            const updatedProducts = products.filter(product => !selectedItems.includes(product.Id));
            localStorage.setItem('Products', JSON.stringify(updatedProducts));
            renderProducts(updatedProducts);
            toggleActionBar();
            document.getElementById('deleteConfirmationModal').style.display = 'none';
        } else {
            alert("Please confirm the deletion by checking the checkbox.");
        }
    };

    document.getElementById('cancelDeleteBtn').onclick = function() {
        document.getElementById('deleteConfirmationModal').style.display = 'none';
    };
}


// Get selected items names
function getSelectedItems() {
    const selectedCheckboxes = document.querySelectorAll('.item-checkbox:checked');
    const selectedItems = [];
    selectedCheckboxes.forEach(checkbox => {
        const row = checkbox.closest('tr');
        const name = row.cells[1].textContent;
        selectedItems.push(name);
    });
    return selectedItems;
}

toggleActionBar();


// Function to filter products by status
function filterProductsByStatus(products, status) {
    if (status === 'All') {
        return products;
    }
    return products.filter(product => product.Status === status);
}

// Function to filter
function filterProductsById(products, id) {
    return products.filter(product => product.Id.toLowerCase().includes(id.toLowerCase()));
}

// Function to combine both filters
function filterProducts(products, status, id) {
    let filteredByStatus = filterProductsByStatus(products, status);
    let filteredById = filterProductsById(filteredByStatus, id);
    return filteredById;
}

// Event listener for the status filter dropdown
document.getElementById('filterByActions').addEventListener('change', function() {
    const selectedStatus = this.value;
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const filteredProducts = filterProducts(products, selectedStatus, searchTerm);
    renderProducts(filteredProducts);
    toggleActionBar();
});

// Event listener for the status filter when it loses focus (blur)
document.getElementById('filterByActions').addEventListener('blur', function() {
    const selectedStatus = this.value;
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const filteredProducts = filterProducts(products, selectedStatus, searchTerm);
    renderProducts(filteredProducts);
    toggleActionBar();
});

// Event listener for the search input field
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    const selectedStatus = document.getElementById('filterByActions').value;
    const filteredProducts = filterProducts(products, selectedStatus, searchTerm);
    renderProducts(filteredProducts);
    toggleActionBar();
});


// function filterProductsByStatus(products, status) {
//     if (status === 'All') {
//         return products;
//     }
//     return products.filter(product => product.Status === status);
// }

// function filterProductsById(products, id) {
//     return products.filter(product => product.Id.toLowerCase().includes(id));
// }

// document.getElementById('filterByActions').addEventListener('change', function() {
//     const selectedStatus = this.value;
//     const filteredProducts = filterProductsByStatus(products, selectedStatus);
//     renderProducts(filteredProducts);
// });

// document.getElementById('filterByActions').addEventListener('blur', function() {
//     const selectedStatus = document.getElementById('filterByActions').value;
//     const filteredProducts = filterProductsByStatus(products, selectedStatus);
//     renderProducts(filteredProducts);
// });

// document.getElementById('searchInput').addEventListener('input', function() {
//     const searchTerm = this.value.trim().toLowerCase();
//     const filteredProducts = filterProductsById(products, searchTerm);
//     renderProducts(filteredProducts);
// });

// document.getElementById('searchInput').addEventListener('blur', function() {
//     this.value = '';
//     renderProducts(products);
// });

renderProducts(products);




// Add Products Form

const modal = document.getElementById("addProductModal");

const btn = document.getElementById("addProductBtn");

const span = document.getElementById('closeAdd');

const cancelBtn = document.getElementById("cancelAdd");

btn.onclick = function() {
    document.getElementById("productId").value = new Date().getTime(); 
    document.getElementById("createdDateTime").value = new Date().toLocaleString(); 
    document.getElementById("modifiedDateTime").value = new Date().toLocaleString();
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
    clearForm();
}

cancelBtn.onclick = function() {
    modal.style.display = "none";
    clearForm();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        clearForm();
    }
}

// Function to clear the form
function clearForm() {
    document.getElementById("addProductForm").reset();
    document.getElementById("productId").value = "";
    document.getElementById("createdDateTime").value = "";
    document.getElementById("modifiedDateTime").value = "";
}

// Handle form submission
document.getElementById("addProductForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const productPrice = parseFloat(document.getElementById("productPrice").value);
    const salePrice = parseFloat(document.getElementById("salePrice").value);
    const buyingPrice = parseFloat(document.getElementById("buyingPrice").value);

    // Validate price fields
    if (isNaN(productPrice) || productPrice < 0) {
        alert('Please enter a valid positive price for Product Price.');
        return;
    }

    if (isNaN(salePrice) || salePrice < 0) {
        alert('Please enter a valid positive price for Sale Price.');
        return;
    }

    if (isNaN(buyingPrice) || buyingPrice < 0) {
        alert('Please enter a valid positive price for Buying Price.');
        return;
    }

    const products = JSON.parse(localStorage.getItem('Products')) || [];
    
    // Check if the product already exists
    const productId = document.getElementById("productId").value;
    const existingProduct = products.find(product => product.Id === productId);
    if (existingProduct) {
        alert('Product with this ID already exists!');
        return;
    }

    // Handle the file input
    const productImage = document.getElementById("productImage").files[0];
    let productImageUrl = "";
    if (productImage) {
        const reader = new FileReader();
        reader.onload = function(e) {
            productImageUrl = e.target.result;
            const newProduct = {
                Id: productId,
                Name: document.getElementById("productName").value,
                Title: document.getElementById("productTitle").value,
                Description: document.getElementById("productDescription").value,
                Price: productPrice.toFixed(2),
                Status: document.getElementById("productStatus").value,
                "Vendor Name": document.getElementById("vendorName").value,
                "Product type": document.getElementById("productType").value,
                Address: document.getElementById("address").value,
                "Sale Price": salePrice.toFixed(2),
                "Buying Price": buyingPrice.toFixed(2),
                "Available Quantity": document.getElementById("availableQuantity").value,
                "Created Date Time": document.getElementById("createdDateTime").value,
                "Modified Date Time": new Date().toLocaleString(),
                "Delivery Date": document.getElementById("deliveredDate").value,
                Image: productImageUrl
            };
            products.push(newProduct);
            localStorage.setItem('Products', JSON.stringify(products));
            renderProducts(products);
            modal.style.display = "none";
            clearForm();
        };
        reader.readAsDataURL(productImage);
    } else {
        const newProduct = {
            Id: productId,
            Name: document.getElementById("productName").value,
            Title: document.getElementById("productTitle").value,
            Description: document.getElementById("productDescription").value,
            Price: productPrice,
            Status: document.getElementById("productStatus").value,
            "Vendor Name": document.getElementById("vendorName").value,
            "Product type": document.getElementById("productType").value,
            Address: document.getElementById("address").value,
            "Sale Price": salePrice,
            "Buying Price": buyingPrice,
            "Available Quantity": document.getElementById("availableQuantity").value,
            "Created Date Time": document.getElementById("createdDateTime").value,
            "Modified Date Time": new Date().toLocaleString(),
            "Delivery Date": document.getElementById("deliveredDate").value,
            Image: "https://cdn.pixabay.com/photo/2022/10/18/17/00/night-7530755_960_720.jpg"
        };
        products.push(newProduct);
        localStorage.setItem('Products', JSON.stringify(products));
        renderProducts(products);
        modal.style.display = "none";
        clearForm();
    }
});




// In Edit Mode with Prefilled data

document.addEventListener("DOMContentLoaded", function() {
    function openEditModal(productId) {
        let product1 = JSON.parse(localStorage.getItem('Products'));
        let product = product1.find(product => product.Id === productId);

        if (product) {
            // Check if the product status is "Delivered"
            if (product.Status === "Delivered") {
                alert("This product has been delivered and cannot be edited.");
                document.getElementById("editProductModal").style.display = "none"; // Close the modal
                return;
            }
            

            // Populate the form fields if the status is not "Delivered"
            document.getElementById("editProductId").value = product.Id;
            document.getElementById("editProductName").value = product.Name;
            document.getElementById("editProductTitle").value = product.Title;
            document.getElementById("editProductDescription").value = product.Description;
            document.getElementById("editProductPrice").value = product.Price;
            document.getElementById("editProductStatus").value = product.Status;
            document.getElementById("editVendorName").value = product['Vendor Name'];
            document.getElementById("editProductType").value = product['Product type'];
            document.getElementById("editAddress").value = product.Address;
            document.getElementById("editSalePrice").value = product['Sale Price'];
            document.getElementById("editBuyingPrice").value = product['Buying Price'];
            document.getElementById("editAvailableQuantity").value = product['Available Quantity'];
            document.getElementById("editCreatedDateTime").value = product['Created Date Time'];
            document.getElementById("editModifiedDateTime").value = product['Modified Date Time'];
            document.getElementById("editDeliveredDate").value = product['Delivery Date'];
            document.getElementById("editProductModal").style.display = "block";
        }
    }

    // Function to close edit modal
    document.getElementById("closeEdit").onclick = function() {
        document.getElementById("editProductModal").style.display = "none";
        clearEditForm();
    }

    // Function to close modal using the span close button
    document.getElementById("close").onclick = function() {
        document.getElementById("editProductModal").style.display = "none";
        clearEditForm();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        const editModal = document.getElementById("editProductModal");
        if (event.target == editModal) {
            editModal.style.display = "none";
            clearEditForm();
        }
    }

    // Function to clear the edit form
    function clearEditForm() {
        document.getElementById("editProductForm").reset();
    }

    // Handle edit form submission
    document.getElementById("editProductForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const productId = document.getElementById("editProductId").value;
        const productIndex = products.findIndex(product => product.Id === productId);

        // Validate decimal values for price fields
        const priceValue = document.getElementById("editProductPrice").value;
        const salePriceValue = document.getElementById("editSalePrice").value;
        const buyingPriceValue = document.getElementById("editBuyingPrice").value;

        const price = parseFloat(priceValue);
        const salePrice = parseFloat(salePriceValue);
        const buyingPrice = parseFloat(buyingPriceValue);

        if (!isFinite(price) || !isFinite(salePrice) || !isFinite(buyingPrice)) {
            alert('Please enter valid decimal values for price fields.');
            return;
        }

        // Handle the file input for the product image
        const productImage = document.getElementById("editProductImage").files[0];
        let productImageUrl = products[productIndex].Image; // Default to existing image
        if (productImage) {
            const reader = new FileReader();
            reader.onload = function(e) {
                productImageUrl = e.target.result;
                saveProduct(productImageUrl); // Save the product after the image is loaded
            };
            reader.readAsDataURL(productImage);
        } else {
            saveProduct(productImageUrl); // Save the product immediately if no new image is selected
        }

        function saveProduct(imageUrl) {
            if (productIndex !== -1) {
                const updatedProduct = {
                    Id: productId,
                    Name: document.getElementById("editProductName").value,
                    Title: document.getElementById("editProductTitle").value,
                    Description: document.getElementById("editProductDescription").value,
                    Price: price.toFixed(2), // Ensure decimal format
                    Status: document.getElementById("editProductStatus").value,
                    "Vendor Name": document.getElementById("editVendorName").value,
                    "Product type": document.getElementById("editProductType").value,
                    Address: document.getElementById("editAddress").value,
                    "Sale Price": salePrice.toFixed(2), // Ensure decimal format
                    "Buying Price": buyingPrice.toFixed(2), // Ensure decimal format
                    "Available Quantity": document.getElementById("editAvailableQuantity").value,
                    "Created Date Time": document.getElementById("editCreatedDateTime").value,
                    "Modified Date Time": new Date().toLocaleString(), // Update to current date and time upon submission
                    "Delivery Date": document.getElementById("editDeliveredDate").value,
                    Image: imageUrl // Updated image or existing image
                };

                products[productIndex] = updatedProduct;
                localStorage.setItem('Products', JSON.stringify(products));
                renderProducts(products);

                document.getElementById("editProductModal").style.display = "none";
                clearEditForm();
            }
        }
    });

    // Make the openEditModal function available globally
    window.openEditModal = openEditModal;
});






// Function to open the view modal
document.addEventListener("DOMContentLoaded", function() {
    // Function to open the view modal
    function openViewModal(productId) {
        let product1 = JSON.parse(localStorage.getItem('Products'));
        let product = product1.find(product => product.Id === productId);


        if (product) {
            document.getElementById("viewProductId").value = product.Id;
            document.getElementById("viewProductName").value = product.Name;
            document.getElementById("viewProductTitle").value = product.Title;
            document.getElementById("viewProductDescription").value = product.Description;
            document.getElementById("viewProductPrice").value = product.Price;
            document.getElementById("viewProductStatus").value = product.Status;
            document.getElementById("viewVendorName").value = product['Vendor Name'];
            document.getElementById("viewProductType").value = product['Product type'];
            document.getElementById("viewAddress").value = product.Address;
            document.getElementById("viewSalePrice").value = product['Sale Price'];
            document.getElementById("viewBuyingPrice").value = product['Buying Price'];
            document.getElementById("viewAvailableQuantity").value = product['Available Quantity'];
            document.getElementById("viewCreatedDateTime").value = product['Created Date Time'];
            document.getElementById("viewModifiedDateTime").value = new Date().toLocaleString();
        
            // Format the delivery date and time
            const deliveredDate = new Date(product['Delivery Date']);
            const formattedDeliveredDate = deliveredDate.toLocaleString('en-US', {
                month: 'numeric',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            });

            document.getElementById("viewDeliveredDate").value = formattedDeliveredDate.toUpperCase();
            document.getElementById("viewProductModal").style.display = "block";
        
            const viewImage = document.getElementById('viewImage');
            viewImage.innerHTML = '';
            const picture = document.createElement('img');
            picture.src = product.Image;
            picture.alt = product.Name;
            picture.id = "viewpic";
            picture.style.height = "50px";
            picture.style.width = "80%";
            viewImage.appendChild(picture);
        }        
        
    }

    // Function to close view modal
    document.getElementById("closeView").onclick = function() {
        document.getElementById("viewProductModal").style.display = "none";
        clearViewForm();
    }

    document.getElementById("cancelView").onclick = function() {
        document.getElementById("viewProductModal").style.display = "none";
        clearViewForm();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        const viewModal = document.getElementById("viewProductModal");
        if (event.target == viewModal) {
            viewModal.style.display = "none";
            clearViewForm();
        }
    }

    // Function to clear the view form
    function clearViewForm() {
        document.getElementById("viewProductForm").reset();
    }

    // Make the openViewModal function available globally
    window.openViewModal = openViewModal;
});

// window.addEventListener('storage', function(event) { 
//     if (event.key === 'Products') { 
//         location.reload();  
//     } 
// });



const deleteConfirmationModal = document.getElementById('deleteConfirmationModal');
const cancelDeleteBtns = document.querySelectorAll('#cancelDeleteBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const confirmDeleteCheckbox = document.getElementById('confirmDelete');

let productToDelete = null;

function deleteProduct(productId) {
    productToDelete = products.find(p => p.Id === productId);
    deleteConfirmationModal.style.display = 'block';
}

cancelDeleteBtns.forEach(btn => btn.addEventListener('click', function() {
    deleteConfirmationModal.style.display = 'none';
    productToDelete = null;
}));

confirmDeleteBtn.addEventListener('click', function() {
    if (confirmDeleteCheckbox.checked) {
        storedProducts = products.filter(p => p !== productToDelete);
        localStorage.setItem('Products', JSON.stringify(storedProducts));
        renderProducts(storedProducts);
        deleteConfirmationModal.style.display = 'none';
        productToDelete = null;
    } else {
        alert('Please confirm deletion.');
    }
});

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target === deleteConfirmationModal) {
        deleteConfirmationModal.style.display = 'none';
        productToDelete = null;
    }
};

  
  