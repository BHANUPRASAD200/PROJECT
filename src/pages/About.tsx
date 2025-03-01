import React from 'react';
import { Award, Shield, Truck, Users } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About RV Cricket
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Your trusted partner in cricket equipment since 1970
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative p-6 bg-white rounded-lg border border-gray-200">
              <div className="prose prose-lg text-gray-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p>
                  Founded in 1970, RV Cricket has been serving cricket enthusiasts across South India
                  with premium quality equipment. What started as a small shop in Chennai has now grown
                  into one of the most trusted names in cricket equipment retail.
                </p>
              </div>
            </div>

            <div className="relative p-6 bg-white rounded-lg border border-gray-200">
              <div className="prose prose-lg text-gray-500">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p>
                  We strive to provide cricketers of all levels with the highest quality equipment,
                  personalized service, and expert guidance. Our commitment to excellence has made us
                  the preferred choice for professional players and cricket academies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose RV Cricket?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Premium Quality</h3>
              <p className="mt-2 text-base text-gray-500">
                Hand-selected materials and rigorous quality control
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Expert Support</h3>
              <p className="mt-2 text-base text-gray-500">
                Professional guidance from cricket experts
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Truck className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Fast Shipping</h3>
              <p className="mt-2 text-base text-gray-500">
                Quick delivery across South India
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Warranty</h3>
              <p className="mt-2 text-base text-gray-500">
                Comprehensive warranty on all products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};