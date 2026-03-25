export default function AboutUs() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold tracking-tighter mb-12 text-center">Về Baoluannef (About Us)</h1>
      
      <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-6">
        <p className="text-lg font-medium text-black">
          Welcome to Baoluannef – where everyday style meets premium quality.
        </p>
        
        <p>
          We noticed a problem in the Vietnamese fashion scene: you either have to pay expensive prices for premium fabrics, or settle for cheap, fast-fashion that ruins after one wash. We created Baoluannef to bridge that gap.
        </p>
        
        <p>
          Designed for the modern minimalist and streetwear enthusiast, our pieces are crafted to make you feel confident effortlessly. We focus on clean cuts, trendy silhouettes, and high-quality materials—all at a price that makes sense.
        </p>
        
        <p className="text-black font-bold italic">
          Elevate your everyday style. Join the Baoluannef community today.
        </p>
      </div>

      <div className="mt-16 aspect-video bg-gray-100 overflow-hidden rounded-2xl">
        <img
          src="https://picsum.photos/seed/about/1200/800"
          alt="About Us"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
