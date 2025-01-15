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


let products = JSON.parse(localStorage.getItem('Products')) || [];


function count(status) {
    return products.filter(product => product.Status === status).length;
}


const active = count('Active');
const cancelled = count('Cancelled');
const draft = count('Draft');
const delivered = count('Delivered');
const shipped = count('Shipped');

document.getElementById('active').textContent = active;
document.getElementById('cancel').textContent = cancelled;
document.getElementById('draft').textContent = draft;
document.getElementById('delivered').textContent = delivered;
document.getElementById('shipped').textContent = shipped;

const addedproducts = products.sort((a, b) => new Date(b['Created Date Time']) - new Date(a['Created Date Time']));

const deliveryproducts = products.filter(product => product.Status === "Delivered");

function displayproducts(products, id) {
    const container = document.getElementById(id);
    container.innerHTML = '';
    products.forEach(product => {
        const Item = document.createElement('li');
        Item.classList.add('Item');
        Item.innerHTML = `
            <img src='${product.Image}' alt='${product.Name}' class="image"/>
            <span class='name'>${product.Name}</span>
        `;
        container.appendChild(Item);
    });
}


displayproducts(addedproducts, 'recently-added-list');

displayproducts(deliveryproducts, 'delivered-products-list');