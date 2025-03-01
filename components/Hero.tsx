import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Cricket"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Premium Cricket Equipment
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Elevate your game with professional-grade cricket gear. Trusted by players
          across South India, we offer personalized service and fast shipping.
        </p>
        <div className="mt-10 flex space-x-4">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Shop Now
          </Link>
          <Link
            to="/custom-kits"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
          >
            Custom Kits
          </Link>
        </div>
      </div>
    </div>
  );
};