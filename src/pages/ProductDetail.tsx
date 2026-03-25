import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <Link to="/shop" className="text-black underline mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const sizes = ['M', 'L', 'XL'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-8">
        <Link to="/" className="hover:text-black">Home</Link>
        <ChevronRight size={12} />
        <Link to="/shop" className="hover:text-black">Shop</Link>
        <ChevronRight size={12} />
        <span className="text-black font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter mb-2">{product.name} - Áo Thun Local Brand Baoluannef Form Rộng</h1>
            <p className="text-2xl font-medium text-gray-900">{product.price.toLocaleString('vi-VN')} VND</p>
            <div className="mt-4 inline-flex items-center px-2 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider rounded">
              🔥 [120+] Sold This Month!
            </div>
          </div>

          <div className="mb-8">
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {product.description}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest">✨ Highlights:</h3>
              <ul className="space-y-2">
                {product.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mr-3" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-bold uppercase tracking-widest">Select Size:</h3>
              <button className="text-xs text-gray-400 underline hover:text-black">Size Guide</button>
            </div>
            <div className="flex space-x-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center border text-sm font-medium transition-all ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 text-gray-600 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-12">
            <button className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
            <Link
              to="/checkout"
              className="block w-full border border-black text-center py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
            >
              Buy It Now
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <Truck size={20} className="text-gray-400" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 leading-tight">Fast Shipping</span>
            </div>
            <div className="flex items-center space-x-3">
              <RotateCcw size={20} className="text-gray-400" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 leading-tight">7-Day Returns</span>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheck size={20} className="text-gray-400" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 leading-tight">Secure Checkout</span>
            </div>
          </div>

          {/* Size Guide Table */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">📏 Size Guide:</h3>
            <div className="space-y-2">
              <p className="text-xs text-gray-600"><span className="font-bold">Size M:</span> Under 1m65, 45-55kg</p>
              <p className="text-xs text-gray-600"><span className="font-bold">Size L:</span> 1m65 - 1m75, 55-65kg</p>
              <p className="text-xs text-gray-600"><span className="font-bold">Size XL:</span> Over 1m75, 65-80kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
