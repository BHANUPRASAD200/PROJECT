import React, { useState } from 'react';
import { Package } from 'lucide-react';

interface Kit {
  id: string;
  name: string;
  description: string;
  price: number;
  items: string[];
}

const KITS: Kit[] = [
  {
    id: 'beginner',
    name: 'Beginner Kit',
    description: 'Perfect for those starting their cricket journey',
    price: 15000,
    items: [
      'Kashmir Willow Bat',
      'Basic Batting Pads',
      'Club Level Gloves',
      'Basic Helmet',
      'Abdominal Guard',
    ],
  },
  {
    id: 'intermediate',
    name: 'Intermediate Kit',
    description: 'Ideal for club level players',
    price: 25000,
    items: [
      'Kashmir Willow Bat (Grade 1)',
      'Professional Batting Pads',
      'Professional Gloves',
      'Premium Helmet',
      'Abdominal Guard',
      'Thigh Guard Set',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Kit',
    description: 'Tournament grade equipment for serious players',
    price: 45000,
    items: [
      'English Willow Bat (Grade 2)',
      'Pro Level Batting Pads',
      'Pro Level Gloves',
      'Premium Helmet with Titanium Grill',
      'Pro Abdominal Guard',
      'Complete Protection Set',
      'Premium Kit Bag',
    ],
  },
];

export const CustomKits = () => {
  const [selectedKit, setSelectedKit] = useState<string>('');

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Custom Cricket Kits
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Choose from our pre-configured kits or customize your own
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {KITS.map((kit) => (
            <div
              key={kit.id}
              className={`relative rounded-lg border p-8 shadow-sm ${
                selectedKit === kit.id
                  ? 'border-blue-600 ring-2 ring-blue-600'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{kit.name}</h3>
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <p className="mt-4 text-sm text-gray-500">{kit.description}</p>
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900">Includes:</h4>
                <ul className="mt-2 space-y-2">
                  {kit.items.map((item, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{kit.price.toLocaleString()}
                  </span>
                  <button
                    onClick={() => setSelectedKit(kit.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      selectedKit === kit.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {selectedKit === kit.id ? 'Selected' : 'Select Kit'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            disabled={!selectedKit}
          >
            Customize Selected Kit
          </button>
        </div>
      </div>
    </div>
  );
};