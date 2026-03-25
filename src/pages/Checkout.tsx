import { useState } from 'react';
import { CreditCard, Banknote, Landmark, CheckCircle2 } from 'lucide-react';

export default function Checkout() {
  const [method, setMethod] = useState<'COD' | 'BANK'>('COD');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={64} className="text-green-500" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter mb-4">Order Confirmed!</h1>
        <p className="text-gray-500 mb-8">Thank you for shopping at Baoluannef. Your order #BLN{Math.floor(Math.random() * 10000)} is being processed.</p>
        
        {method === 'BANK' && (
          <div className="bg-gray-50 p-6 rounded-xl text-left mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Bank Transfer Instructions:</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Vui lòng chuyển khoản với nội dung: <span className="font-bold text-black">[Mã Đơn Hàng] + [Tên Số Điện Thoại]</span>.
              <br /><br />
              <span className="font-bold">Ngân hàng:</span> Vietcombank
              <br />
              <span className="font-bold">Số tài khoản:</span> 123456789
              <br />
              <span className="font-bold">Tên:</span> NGUYEN VAN A
              <br /><br />
              Đơn hàng sẽ được gửi đi ngay sau khi nhận được thanh toán!
            </p>
          </div>
        )}

        <button
          onClick={() => window.location.href = '/'}
          className="bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tighter mb-12">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-bold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="col-span-1 bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black" />
              <input type="text" placeholder="Last Name" className="col-span-1 bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black" />
              <input type="email" placeholder="Email" className="col-span-2 bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black" />
              <input type="text" placeholder="Phone Number" className="col-span-2 bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black" />
              <input type="text" placeholder="Address" className="col-span-2 bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black" />
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">Payment Method</h2>
            <div className="space-y-3">
              <button
                onClick={() => setMethod('COD')}
                className={`w-full flex items-center justify-between p-4 border transition-all ${
                  method === 'COD' ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Banknote size={20} />
                  <span className="text-sm font-medium">Cash on Delivery (COD)</span>
                </div>
                {method === 'COD' && <CheckCircle2 size={16} />}
              </button>

              <button
                onClick={() => setMethod('BANK')}
                className={`w-full flex items-center justify-between p-4 border transition-all ${
                  method === 'BANK' ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Landmark size={20} />
                  <span className="text-sm font-medium">Bank Transfer</span>
                </div>
                {method === 'BANK' && <CheckCircle2 size={16} />}
              </button>
            </div>
            
            <div className="mt-4 p-4 bg-gray-50 rounded text-xs text-gray-500">
              {method === 'COD' ? (
                "Thanh toán khi nhận hàng (COD). Vui lòng kiểm tra kỹ thông tin giao hàng."
              ) : (
                "Vui lòng chuyển khoản theo hướng dẫn sau khi đặt hàng."
              )}
            </div>
          </section>

          <button
            onClick={() => setSubmitted(true)}
            className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            Complete Order
          </button>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 p-8 rounded-2xl h-fit">
          <h2 className="text-lg font-bold mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">250,000 VND</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Shipping</span>
              <span className="font-medium">30,000 VND</span>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
            <span className="text-base font-bold">Total</span>
            <span className="text-xl font-bold">280,000 VND</span>
          </div>
        </div>
      </div>
    </div>
  );
}
