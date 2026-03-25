import { useState } from 'react';
import { Search, Package, Truck, CheckCircle } from 'lucide-react';

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [tracking, setTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId) setTracking(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold tracking-tighter mb-4 text-center">Track Your Order</h1>
      <p className="text-gray-500 text-center mb-12">Enter your order number to check the status.</p>

      <form onSubmit={handleTrack} className="max-w-md mx-auto mb-16">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Order Number (e.g. #BLN12345)"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="flex-1 bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
          />
          <button className="bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Track
          </button>
        </div>
      </form>

      {tracking && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Status</p>
              <p className="text-lg font-bold">In Transit</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Estimated Delivery</p>
              <p className="text-lg font-bold">March 28, 2026</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200" />
            
            <div className="space-y-12">
              <div className="relative flex items-center space-x-6">
                <div className="z-10 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="font-bold">Order Confirmed</p>
                  <p className="text-sm text-gray-500">March 25, 2026 - 08:30 AM</p>
                </div>
              </div>

              <div className="relative flex items-center space-x-6">
                <div className="z-10 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center">
                  <Package size={24} />
                </div>
                <div>
                  <p className="font-bold">Packed & Ready</p>
                  <p className="text-sm text-gray-500">March 25, 2026 - 11:45 AM</p>
                </div>
              </div>

              <div className="relative flex items-center space-x-6">
                <div className="z-10 w-16 h-16 bg-white border-2 border-black text-black rounded-full flex items-center justify-center">
                  <Truck size={24} />
                </div>
                <div>
                  <p className="font-bold">Shipped</p>
                  <p className="text-sm text-gray-500">March 25, 2026 - 02:15 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
