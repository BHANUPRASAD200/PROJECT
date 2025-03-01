import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SortProps {
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const ProductSort: React.FC<SortProps> = ({ sortBy, onSortChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-600">Sort by:</span>
      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};