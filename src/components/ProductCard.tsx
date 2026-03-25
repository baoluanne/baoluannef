import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <button className="w-full bg-white text-black py-2 text-xs font-bold uppercase tracking-widest shadow-sm">
              Quick Add
            </button>
          </div>
        </div>
        <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.price.toLocaleString('vi-VN')} VND</p>
      </Link>
    </motion.div>
  );
}
