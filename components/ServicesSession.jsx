import { services } from "@/app/lib/data";
import Image from "next/image";
import ServiceCard from "./ServiceCard";

const ServicesSession = () => {
  return (
    // <section className="py-16 bg-gray-50" style={{ backgroundImage: "url('/bg2.jpeg')" }}>
    //   <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    //     <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
    //       {/* Left Column - Brand Info */}
    //       <div className="space-y-6">
    //         <h2 className="text-3xl font-bold text-wisp-pink-900 md:text-4xl">Bánh cho ngày bình thường, ngày đặc biệt, và ngày rảnh rỗi</h2>
    //         <div className="w-20 h-1 bg-wisp-pink-600"></div>
    //         <p className="text-lg text-gray-600">
    //           Chúng tôi tự hào mang đến những chiếc bánh rau câu độc đáo, kết hợp giữa nghệ thuật và
    //           hương vị truyền thống. Mỗi chiếc bánh là một tác phẩm nghệ thuật, được làm thủ công
    //           với tình yêu và sự tận tâm.
    //         </p>
    //         <p className="text-lg text-gray-600">
    //           chúng tôi cam kết mang đến những sản phẩm chất lượng cao
    //           nhất cho mọi dịp đặc biệt của bạn.
    //         </p>
    //       </div>

    //       {/* Right Column - Services Grid */}
    //       <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
    //         {services.map((service, index) => (
    //           <div
    //             key={index}
    //             className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
    //           >
    //             <div className="flex flex-col space-y-4">
    //               <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg text-wisp-pink-600">
    //                 {service.icon}
    //               </div>
    //               <h3 className="text-xl font-semibold text-wisp-pink-900">{service.title}</h3>
    //               <p className="text-gray-600">{service.description}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div
      className="relative w-full py-16 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/bg1.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container relative px-4 mx-auto">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left Column - Brand Info */}
          <div>
            <div className="p-8 rounded-lg bg-white/90 backdrop-blur-sm">
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
