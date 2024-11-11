import { services } from "@/app/lib/data";
import Image from "next/image";
import ServiceCard from "./ServiceCard";

const ServicesSession = () => {
  return (
    <div
      className="relative w-full py-24 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/bg1.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container relative px-4 mx-auto">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left Column - Brand Info */}
          <div>
            <div className="p-8 rounded-lg shadow-lg bg-white/90 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/logo.svg" // replace with your logo path
                  alt="Cake Shop Logo"
                  width={150}
                  height={50}
                  className="mb-4"
                />
                <h2 className="text-3xl font-bold text-wisp-pink-800">Tiệm bánh Cỏ May</h2>
              </div>
              <p className="pb-2 text-xl font-semibold">
                Bánh cho ngày bình thường, ngày đặc biệt, và ngày rảnh rỗi
              </p>
              <p className="text-gray-600">
                Chúng tôi tự hào mang đến những chiếc bánh rau câu thơm ngon, đẹp mắt với công thức
                độc đáo được chế biến từ nguyên liệu tự nhiên. Mỗi chiếc bánh là một tác phẩm nghệ
                thuật, được tạo ra với tình yêu và sự tận tâm.
              </p>
            </div>
          </div>

          {/* Right Column - Services Grid */}
          <div>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSession;
