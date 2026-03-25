import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold tracking-tighter mb-4">BAOLUANNEF</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Elevate your everyday style. Premium minimalist streetwear designed for the modern enthusiast.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-gray-500 hover:text-black">Shop All</Link></li>
              <li><Link to="/shop?category=Tops" className="text-sm text-gray-500 hover:text-black">Tops</Link></li>
              <li><Link to="/shop?category=Bottoms" className="text-sm text-gray-500 hover:text-black">Bottoms</Link></li>
              <li><Link to="/shop?category=Accessories" className="text-sm text-gray-500 hover:text-black">Accessories</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/track" className="text-sm text-gray-500 hover:text-black">Track Order</Link></li>
              <li><Link to="/shipping" className="text-sm text-gray-500 hover:text-black">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-sm text-gray-500 hover:text-black">Returns & Exchanges</Link></li>
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-black">About Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-4">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Join the club. Get 10% OFF your first order.</p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-gray-50 border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Baoluannef. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-gray-400 hover:text-black">Instagram</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black">TikTok</a>
            <a href="#" className="text-xs text-gray-400 hover:text-black">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
