import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';
import { Truck, RotateCcw, CreditCard } from 'lucide-react';

export default function Home() {
  const bestSellers = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 text-center text-[10px] font-bold uppercase tracking-[0.2em]">
        🔥 FREE SHIPPING on all orders over 300k!
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/hero/1920/1080"
            alt="Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6"
          >
            Elevate Your Style.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/shop"
              className="inline-block bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              Shop New Arrivals
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter">🔥 Best Sellers</h2>
            <p className="text-gray-500 text-sm mt-2">Our most loved pieces this month.</p>
          </div>
          <Link to="/shop" className="text-sm font-bold underline underline-offset-4 hover:text-gray-600">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Truck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-2">Giao Hàng Toàn Quốc</h3>
              <p className="text-sm text-gray-500">Nationwide Shipping across Vietnam.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <RotateCcw size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-2">Đổi Trả 7 Ngày</h3>
              <p className="text-sm text-gray-500">7-Day Easy Returns if it doesn't fit.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CreditCard size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-2">Thanh Toán COD & Chuyển Khoản</h3>
              <p className="text-sm text-gray-500">Secure Payments via COD or Bank Transfer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section (Instafeed Mock) */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tighter">@baoluannef</h2>
          <p className="text-gray-500 text-sm mt-2">Tag us to be featured.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={`https://picsum.photos/seed/ig${i}/600/600`}
                alt="IG"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
