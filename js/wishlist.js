export function initializeWishlist() {
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    const wishlistCount = document.querySelector('.wishlist-count');
    let wishlist = [];

    function updateWishlistCount() {
        wishlistCount.textContent = wishlist.length;
    }

    function toggleWishlist(productId) {
        const index = wishlist.indexOf(productId);
        const btn = document.querySelector(`.wishlist-btn[data-id="${productId}"]`);
        const icon = btn.querySelector('i');

        if (index === -1) {
            wishlist.push(productId);
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = '#dc3545';
        } else {
            wishlist.splice(index, 1);
            icon.classList.remove('fas');
            icon.classList.add('far');
            icon.style.color = '';
        }

        updateWishlistCount();
    }

    document.addEventListener('click', (e) => {
        const wishlistBtn = e.target.closest('.wishlist-btn');
        if (wishlistBtn) {
            const productId = parseInt(wishlistBtn.dataset.id);
            toggleWishlist(productId);
        }
    });

    updateWishlistCount();
}