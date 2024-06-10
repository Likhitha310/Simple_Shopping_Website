// script.js
const productsContainer = document.getElementById('products');

// Sample data
const products = [
    { name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' }
];

// Render products
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
    `;
    productsContainer.appendChild(productElement);
});
