export default function ReturnsExchanges() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold tracking-tighter mb-12 text-center">Chính Sách Đổi Trả (Returns & Exchanges)</h1>
      
      <div className="space-y-12">
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <span className="mr-3">🔄</span> 7-Day Easy Returns
          </h2>
          <p className="text-gray-600 mb-6">
            We want you to love your Baoluannef outfit. If it doesn't fit perfectly, you can return or exchange it within 7 days of receiving your order.
          </p>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 mr-3 flex-shrink-0" />
              Items must be unworn, unwashed, and have original tags attached.
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 mr-3 flex-shrink-0" />
              Exchanges are subject to stock availability.
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">How to start an exchange?</h3>
          <p className="text-gray-600 mb-6">
            Simply message our Instagram/TikTok or email us at support@baoluannef.com with your Order Number.
          </p>
          <a
            href="mailto:support@baoluannef.com"
            className="inline-block bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
