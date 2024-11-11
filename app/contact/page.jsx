import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      {/* Header Section with Background */}
      <div
        className="relative py-24 mb-3 bg-center bg-cover lg:py-36"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/call-to-action-bg.jpg')`,
        }}
      >
        <div className="container mx-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex mb-8">
              <Link href="/" className="text-gray-500 hover:text-wisp-pink-600">
                Trang chủ
              </Link>
              <span className="mx-3 text-gray-500">/</span>
              <Link href="/contact" className="text-wisp-pink-600 hover:text-wisp-pink-700">
                Liên hệ
              </Link>
            </nav>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900">Bánh Cỏ May luôn muốn nghe tâm sự từ bạn</h1>
          </div>
        </div>
      </div>
      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column - Contact Information */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl font-bold text-wisp-pink-800">Tiệm bánh Cỏ May</h1>

            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold">Địa chỉ</h2>
                <p className="mt-1">123 Đường ABC, Quận XYZ, TP.HCM</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Liên hệ</h2>
                <div className="mt-1 space-y-2">
                  <p>
                    <span className="font-medium">Điện thoại:</span>{" "}
                    <Link
                      href="tel:+84123456789"
                      className="text-wisp-pink-600 hover:text-wisp-pink-700"
                    >
                      0123.456.789
                    </Link>
                  </p>
                  <p>
                    <span className="font-medium">Zalo:</span>{" "}
                    <Link
                      href="https://zalo.me/0123456789"
                      target="_blank"
                      className="text-wisp-pink-600 hover:text-wisp-pink-700"
                    >
                      0123.456.789
                    </Link>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Mạng xã hội</h2>
                <div className="flex gap-4 mt-2">
                  <Link
                    href="https://facebook.com/tiembanhcomay"
                    target="_blank"
                    className="text-wisp-pink-600 hover:text-wisp-pink-700"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="https://instagram.com/tiembanhcomay"
                    target="_blank"
                    className="text-wisp-pink-600 hover:text-wisp-pink-700"
                  >
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/contact.jpg" // Make sure to add your image to the public/images folder
              alt="Tiệm bánh cỏ may"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
