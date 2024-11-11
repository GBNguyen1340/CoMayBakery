import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero_wave">
      <div className="relative pt-16 hero">
        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl font-bold text-wisp-pink-900 md:text-5xl">
                Bánh rau câu sinh nhật – lựa chọn ngọt ngào, ít ngọt hơn nhưng đậm đà hơn.
              </h1>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="flex space-x-4">
                <button className="px-6 py-3 text-white transition duration-300 rounded-lg bg-wisp-pink-600 hover:bg-wisp-pink-700">
                  Đặt bánh
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-96 md:h-[500px]">
              <div className="absolute inset-0">
                {/* Replace with your image */}
                <div className="flex items-center justify-center w-full h-full text-gray-400 bg-gray-200 rounded-lg">
                  <Image
                    src="https://iili.io/2xxCqPf.jpg"
                    alt=""
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <Image
                  src="/shape-02.png"
                  alt=""
                  width={800}
                  height={800}
                  className="absolute object-cover -top-64 -z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
