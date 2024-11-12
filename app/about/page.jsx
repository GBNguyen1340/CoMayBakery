import Image from "next/image";

export default function About() {
  return (
    <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-cake-pattern">
      <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left Column - Image */}
        <div className="relative w-full h-[500px] md:h-[730px]">
          <Image
            src="/8.png" // Add your image to public/images folder
            alt="Tiệm bánh cỏ may"
            fill
            className="object-cover rounded-t-full shadow-xl"
            priority
          />
        </div>

        {/* Right Column - Story */}
        <div className="flex flex-col px-8 space-y-6">
          <h1 className="text-4xl font-bold text-wisp-pink-700">
            Câu chuyện về bánh cỏ may
          </h1>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Tiệm bánh cỏ may được sinh ra từ tình yêu với những chiếc bánh thơm ngon 
              và mong muốn mang đến niềm vui cho mọi người. Chúng tôi bắt đầu hành trình 
              của mình từ một căn bếp nhỏ, nơi những công thức bánh đầu tiên được 
              thai nghén và hoàn thiện.
            </p>

            <p>
              Mỗi chiếc bánh của chúng tôi đều được làm thủ công với sự tỉ mỉ và 
              tâm huyết, sử dụng những nguyên liệu tươi ngon nhất. Chúng tôi tin rằng, 
              bánh ngọt không chỉ đơn thuần là món ăn, mà còn là cách để kết nối 
              tình cảm và chia sẻ niềm vui.
            </p>

            <p>
              Cỏ may - loài hoa dại nhỏ bé nhưng kiên cường, chính là biểu tượng 
              cho tiệm bánh của chúng tôi. Như những hạt cỏ may nhẹ nhàng bay trong gió, 
              chúng tôi mong muốn lan tỏa hương vị ngọt ngào và hạnh phúc đến với 
              mọi người.
            </p>

            <p>
              Đến với Tiệm bánh cỏ may, bạn không chỉ thưởng thức những chiếc bánh 
              thơm ngon, mà còn cảm nhận được tình yêu và sự chân thành mà chúng tôi 
              gửi gắm trong từng sản phẩm.
            </p>
            <Image
            src="/sign2.png" // Add your image to public/images folder
            alt="Tiệm bánh cỏ may"
            width={500}
            height={200}
            className="mt-4"
          />
          </div>
        </div>
      </div>
    </div>
  );
} 