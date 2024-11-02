export default function Home() {

  return (
    <main className="min-h-screen">    
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Bánh rau câu sinh nhật – lựa chọn ngọt ngào, ít ngọt hơn nhưng đậm đà hơn.
              </h1>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  Add to Cart
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition duration-300">
                  Detail
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-96 md:h-[500px]">
              <div className="absolute inset-0">
                {/* Replace with your image */}
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                  Hero Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
