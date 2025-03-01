const products = [
    // Batting Category
    {
        id: 1,
        name: 'RV Pro English Willow Bat',
        description: 'Premium Grade 1 English willow cricket bat with perfect balance',
        price: 24999,
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Batting'
    },
    {
        id: 2,
        name: 'RV Elite Kashmir Willow Bat',
        description: 'Professional Kashmir willow bat with excellent pickup',
        price: 8999,
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Batting'
    },
    {
        id: 3,
        name: 'RV Junior Cricket Bat',
        description: 'Size 6 Kashmir willow bat perfect for young players',
        price: 4999,
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Batting'
    },

    // Gloves Category
    {
        id: 4,
        name: 'RV Pro Series Batting Gloves',
        description: 'Premium leather gloves with maximum protection',
        price: 2999,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Gloves'
    },
    {
        id: 5,
        name: 'RV Elite Batting Gloves',
        description: 'Professional grade batting gloves with enhanced grip',
        price: 1999,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Gloves'
    },
    {
        id: 6,
        name: 'RV Youth Batting Gloves',
        description: 'Comfortable junior batting gloves with good protection',
        price: 1499,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Gloves'
    },

    // Leg Guards Category
    {
        id: 7,
        name: 'RV Pro Batting Pads',
        description: 'Lightweight pro batting pads with superior protection',
        price: 3999,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Leg Guards'
    },
    {
        id: 8,
        name: 'RV Elite Batting Pads',
        description: 'High-quality batting pads with excellent mobility',
        price: 2999,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Leg Guards'
    },
    {
        id: 9,
        name: 'RV Junior Batting Pads',
        description: 'Youth size batting pads with good protection',
        price: 1999,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Leg Guards'
    },

    // Protection Category
    {
        id: 10,
        name: 'RV Pro Abdominal Guard',
        description: 'Premium protection with maximum comfort',
        price: 999,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Protection'
    },
    {
        id: 11,
        name: 'RV Thigh Guard Set',
        description: 'Professional thigh protection pads',
        price: 1299,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Protection'
    },
    {
        id: 12,
        name: 'RV Chest Guard',
        description: 'High-impact chest protection for batsmen',
        price: 1499,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Protection'
    },

    // Grips Category
    {
        id: 13,
        name: 'RV Premium Bat Grip',
        description: 'Superior quality rubber grip with maximum control',
        price: 299,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Grips'
    },
    {
        id: 14,
        name: 'RV Chevron Grip',
        description: 'Textured grip for enhanced control',
        price: 249,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Grips'
    },
    {
        id: 15,
        name: 'RV Anti-Slip Grip',
        description: 'Special non-slip grip for wet conditions',
        price: 349,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Grips'
    },

    // Bags Category
    {
        id: 16,
        name: 'RV Pro Cricket Kit Bag',
        description: 'Large professional cricket bag with wheels',
        price: 4999,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Bags'
    },
    {
        id: 17,
        name: 'RV Duffle Cricket Bag',
        description: 'Medium-sized bag perfect for club cricketers',
        price: 2999,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Bags'
    },
    {
        id: 18,
        name: 'RV Junior Cricket Bag',
        description: 'Compact bag ideal for young players',
        price: 1999,
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Bags'
    },

    // Balls Category
    {
        id: 19,
        name: 'RV Test Match Red Ball',
        description: 'Premium leather red cricket ball for matches',
        price: 999,
        image: 'https://images.unsplash.com/photo-1589801258579-18e091f4ca26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Balls'
    },
    {
        id: 20,
        name: 'RV ODI White Ball',
        description: 'Professional white cricket ball for limited overs',
        price: 999,
        image: 'https://images.unsplash.com/photo-1589801258579-18e091f4ca26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Balls'
    },
    {
        id: 21,
        name: 'RV Practice Ball Set',
        description: 'Set of 6 practice balls (3 red, 3 white)',
        price: 2499,
        image: 'https://images.unsplash.com/photo-1589801258579-18e091f4ca26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Balls'
    }
];

export function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    const categories = [...new Set(products.map(product => product.category))];
    
    productsGrid.innerHTML = '';
    
    categories.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'text-2xl font-bold mb-6 mt-12';
        categoryTitle.textContent = category;
        
        const categoryGrid = document.createElement('div');
        categoryGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
        
        const categoryProducts = products.filter(product => product.category === category);
        categoryProducts.forEach(product => {
            const productCard = createProductCard(product);
            categoryGrid.appendChild(productCard);
        });
        
        categorySection.appendChild(categoryTitle);
        categorySection.appendChild(categoryGrid);
        productsGrid.appendChild(categorySection);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <button class="wishlist-btn" data-id="${product.id}">
                <i class="far fa-heart"></i>
            </button>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">₹${product.price.toLocaleString()}</div>
            <button class="add-to-cart" data-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `;

    const addToCartBtn = card.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => {
        const event = new CustomEvent('add-to-cart', {
            detail: { product }
        });
        document.dispatchEvent(event);
    });

    return card;
}

export function getProductById(id) {
    return products.find(product => product.id === id);
}