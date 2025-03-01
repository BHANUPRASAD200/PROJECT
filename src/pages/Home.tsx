import React from 'react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';

const featuredProducts = [
  {
    id: '1',
    name: 'RV Pro Cricket Bat',
    description: 'Professional-grade English willow cricket bat',
    price: 15999,
    images: ['https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    category: 'Bats',
    inStock: true,
    features: ['English Willow', 'Pro Grade', 'Light Pick-up'],
    specifications: {
      weight: '2.8 lbs',
      size: 'Short Handle',
    },
  },
  // Add more featured products here
];

export const Home = () => {
  return (
    <div>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose RV?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Hand-selected materials and rigorous quality control ensure the best
                performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Our team of cricket experts is always ready to help you choose the
                perfect equipment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Fast Shipping</h3>
              <p className="text-gray-600">
                Quick delivery across South India with secure packaging and tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};