// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Logo, Address, and Telephone */}
          <div className="flex flex-col items-start">
            <Image
              src="/logo.png" // replace with your logo path
              alt="Cake Shop Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="mb-2">123 Cake Street, Sweet City</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: contact@cakestore.com</p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-semibold">Navigation</h3>
            <Link href="/about" className="mb-2 hover:underline">
              Trang chủ
            </Link>
            <Link href="/cakes" className="mb-2 hover:underline">
              Bánh của tiệm
            </Link>
            <Link href="/contact" className="mb-2 hover:underline">
              Câu chuyện của Bánh Cỏ May
            </Link>
            <Link href="/faq" className="mb-2 hover:underline">
              Liên hệ
            </Link>
          </div>

          {/* Column 3: Social Media Icons */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl text-white hover:text-blue-500" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl text-white hover:text-pink-500" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl text-white hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-4 mt-8 text-sm text-center text-gray-400 border-t border-gray-700">
          &copy; {new Date().getFullYear()} Tiệm bánh Cỏ May. All rights reserved.
        </div>
        <div className="pt-4 mt-8 text-sm text-center text-gray-400">
          <Link href="/about" className="px-2 mb-2 border-r-2 border-gray-400 hover:underline">
            Chính sách giao hàng
          </Link>
          <Link href="/cakes" className="px-2 mb-2 border-r-2 border-gray-400 hover:underline">
            Phương thức thanh toán
          </Link>
          <Link href="/contact" className="px-2 mb-2 border-r-2 border-gray-400 hover:underline">
            Điều khoản & điều kiện thanh toán
          </Link>
          <Link href="/faq" className="px-2 mb-2 hover:underline">
            Bảo vệ thông tin cá nhân người tiêu dùng
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
