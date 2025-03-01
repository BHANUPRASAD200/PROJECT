import { useState, useEffect } from 'react';
import { Product } from '../types';

const PRODUCTS_DATA: Product[] = [
  {
    id: '506',
    name: 'FPS3 SIZE SH G3-EW BAT - 2LBS 9.7OZ',
    description: 'Professional Grade English Willow Cricket Bat',
    price: 21400,
    images: ['https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    category: 'Premium Bats',
    inStock: true,
    features: ['English Willow', 'Grade 3', 'Light Pick-up'],
    specifications: {
      weight: '2.9 lbs',
      size: 'Short Handle',
    },
    createdAt: '2024-03-15',
  },
  {
    id: '505',
    name: 'FPS3 SIZE SH G3-EW BAT - 2LBS 9.8OZ',
    description: 'Professional Grade English Willow Cricket Bat',
    price: 21400,
    images: ['https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    category: 'Premium Bats',
    inStock: false,
    features: ['English Willow', 'Grade 3', 'Light Pick-up'],
    specifications: {
      weight: '2.8 lbs',
      size: 'Short Handle',
    },
    createdAt: '2024-03-14',
  },
  // Add more products here following the same pattern
];

export const useProducts = () => {
  const [products] = useState<Product[]>(PRODUCTS_DATA);
  const [categories] = useState<string[]>([
    'Premium Bats',
    'Kashmir Willow Bats',
    'Junior Bats',
    'Batting Pads',
    'Batting Gloves',
    'Protection',
  ]);

  return {
    products,
    categories,
  };
};