import Link from "next/link";

export default function ProductLayout({ children }) {
  return (
    <div>
      {/* Header Section with Background */}
      <div
        className="relative py-24 mb-3 bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('/1.jpg')`,
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
              <Link href="/menu" className="text-wisp-pink-600 hover:text-wisp-pink-700">
                Menu
              </Link>
            </nav>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900">Menu bánh tại Bánh Cỏ May</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative flex justify-center px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  );
}
