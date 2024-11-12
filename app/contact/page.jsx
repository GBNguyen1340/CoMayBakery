import Image from "next/image";
import Link from "next/link";
import { getContactInfo } from "../services/product.service";

export default async function Contact() {
  const contactInfo = await getContactInfo();
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
            <h1 className="text-4xl font-bold text-gray-900">
              Bánh Cỏ May luôn muốn nghe tâm sự từ bạn
            </h1>
          </div>
        </div>
      </div>
      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-row justify-around">
          {/* Left Column - Contact Information */}
          <div className="flex flex-col justify-start pt-8 space-y-6">
            <h1 className="text-3xl font-bold text-wisp-pink-800">Tiệm bánh Cỏ May</h1>

            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold">Địa chỉ</h2>
                <p className="mt-1">{contactInfo.address}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Liên hệ</h2>
                <div className="mt-1 space-y-2">
                  <p>
                    <span className="font-medium">Điện thoại:</span>{" "}
                    <Link
                      href={`tel:${contactInfo.phoneNumber}`}
                      className="text-wisp-pink-600 hover:text-wisp-pink-700"
                    >
                      {contactInfo.phoneNumber}
                    </Link>
                  </p>
                  <p>
                    <span className="font-medium">Zalo:</span>{" "}
                    <Link
                      href={`https://zalo.me/${contactInfo.hotline}`}
                      target="_blank"
                      className="text-wisp-pink-600 hover:text-wisp-pink-700"
                    >
                      {contactInfo.hotline}
                    </Link>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold">Mạng xã hội</h2>
                <div className="flex gap-4 mt-2">
                  {contactInfo.socialLinks.map((link) => (
                    <Link
                      href={link.url}
                      target="_blank"
                      className="text-wisp-pink-600 hover:text-wisp-pink-700"
                      key={link._Id}
                    >
                      {link.platform}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <Image
              src="/floralLine.png" // Make sure to add your image to the public/images folder
              alt="Tiệm bánh cỏ may"
              width={300}
              height={500}
              className="absolute -z-10 -left-40 top-20"
            />
            <Image
              src="/contact.png" // Make sure to add your image to the public/images folder
              alt="Tiệm bánh cỏ may"
              width={400}
              height={400}
              priority
              className="object-cover rounded-t-full shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
