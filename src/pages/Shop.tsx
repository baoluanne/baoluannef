import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">
          {category ? `${category}` : 'Shop All'}
        </h1>
        <p className="text-gray-500 text-sm">
          Showing {filteredProducts.length} results
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
