export function initializeCart() {
    const cartBtn = document.querySelector('.cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = document.querySelector('.close-cart');
    const overlay = document.getElementById('overlay');
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotalAmount = document.getElementById('cart-total-amount');

    let cart = [];

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    function updateCartTotal() {
        const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        cartTotalAmount.textContent = `₹${total.toLocaleString()}`;
    }

    function renderCartItems() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.product.name}</h4>
                    <div class="cart-item-price">₹${item.product.price.toLocaleString()}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.product.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.product.id}">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.product.id}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });

        updateCartCount();
        updateCartTotal();
    }

    function toggleCart() {
        cartSidebar.classList.toggle('active');
        overlay.style.display = cartSidebar.classList.contains('active') ? 'block' : 'none';
    }

    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    overlay.addEventListener('click', toggleCart);

    document.addEventListener('add-to-cart', (e) => {
        const product = e.detail.product;
        const existingItem = cart.find(item => item.product.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ product, quantity: 1 });
        }

        renderCartItems();
        if (!cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    });

    cartItems.addEventListener('click', (e) => {
        const target = e.target;
        const id = parseInt(target.dataset.id);

        if (target.classList.contains('minus')) {
            const item = cart.find(item => item.product.id === id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                renderCartItems();
            }
        } else if (target.classList.contains('plus')) {
            const item = cart.find(item => item.product.id === id);
            if (item) {
                item.quantity += 1;
                renderCartItems();
            }
        } else if (target.classList.contains('remove-item') || target.closest('.remove-item')) {
            const itemId = parseInt(target.dataset.id || target.closest('.remove-item').dataset.id);
            cart = cart.filter(item => item.product.id !== itemId);
            renderCartItems();
        }
    });
}