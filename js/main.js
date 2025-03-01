import { initializeNavbar } from './navbar.js';
import { initializeCart } from './cart.js';
import { loadProducts } from './products.js';
import { initializeWishlist } from './wishlist.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeNavbar();
    initializeCart();
    loadProducts();
    initializeWishlist();
});