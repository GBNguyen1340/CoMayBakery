"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { IoPhonePortraitOutline } from "react-icons/io5";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm navbar">
      <div className="menu_wave"></div>
      <div className="p-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={80}
                height={80}
                className="w-20 h-20"
              ></Image>
              <h1 className="pl-5 text-3xl font-bold text-wisp-pink-700 font-lora">
                Tiệm bánh Cỏ May
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="justify-between hidden space-x-8 md:flex">
            <div className="flex items-center justify-start ml-10">
              <Link
                href="/"
                className="px-3 py-2 text-lg font-medium text-gray-800 hover:text-wisp-pink-600"
              >
                Trang chủ
              </Link>
              <Link
                href="/menu"
                className="px-3 py-2 text-lg font-medium text-gray-800 hover:text-wisp-pink-600"
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-lg font-medium text-gray-800 hover:text-wisp-pink-600"
              >
                Câu chuyện về bánh Cỏ May
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-lg font-medium text-gray-800 hover:text-wisp-pink-600"
              >
                Liên hệ
              </Link>
            </div>
            <div className="flex items-center gap-2 text-wisp-pink-400">
              <IoPhonePortraitOutline width={30} height={30}></IoPhonePortraitOutline>
              <span className="text-sm font-semibold text-wisp-pink-400">0933-252-658</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 text-gray-800 transition-colors duration-200 rounded-md hover:text-gray-600 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <div className="absolute transition-opacity duration-300 ease-in-out">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
              md:hidden 
              transform 
              transition-all 
              duration-300 
              ease-in-out 
              origin-top 
              ${isMenuOpen ? "opacity-100 max-h-64 scale-y-100" : "opacity-0 max-h-0 scale-y-0"}
            `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-800 transition-colors duration-200 rounded-md hover:text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="/menu"
              className="block px-3 py-2 text-base font-medium text-gray-800 transition-colors duration-200 rounded-md hover:text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-800 transition-colors duration-200 rounded-md hover:text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Câu chuyện về bánh Cỏ May
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-800 transition-colors duration-200 rounded-md hover:text-gray-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </Link>
            <div className="flex items-center gap-2 text-wisp-pink-400">
              <IoPhonePortraitOutline width={30} height={30}></IoPhonePortraitOutline>
              <span className="text-sm font-semibold text-wisp-pink-400">0933-252-658</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
