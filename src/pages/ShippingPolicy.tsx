export default function ShippingPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold tracking-tighter mb-12 text-center">Chính Sách Giao Hàng (Shipping Policy)</h1>
      
      <div className="space-y-12">
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <span className="mr-3">🚚</span> Fast & Reliable Shipping Across Vietnam
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span>Standard Shipping</span>
              <span className="font-bold text-black">30,000 VND</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 pb-2">
              <span>Delivery Time</span>
              <span className="font-bold text-black">2 - 4 business days</span>
            </li>
            <li className="flex justify-between text-orange-600 font-bold">
              <span>FREE SHIPPING</span>
              <span>On all orders over 300,000 VND!</span>
            </li>
          </ul>
        </div>

        <div className="prose prose-sm text-gray-600 leading-relaxed">
          <p>
            All orders are processed within 24 hours. Once shipped, you will receive a tracking number so you can follow your package right to your door.
          </p>
          <p>
            We partner with Vietnam's leading logistics providers to ensure your package arrives safely and on time.
          </p>
        </div>
      </div>
    </div>
  );
}
