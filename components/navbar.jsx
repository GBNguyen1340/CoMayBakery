import Image from "next/image";
import Link from "next/link";
import { Menu, Space, X, Smartphone } from "lucide-react";

import "@/app/globals.css";

export default function Navbar() {
  return (
    <nav className="container z-50 flex justify-between px-4 py-4 mx-auto">
      <div className="flex flex-row items-center gap-20">
      <div className="flex flex-row items-center gap-3">
        <Image src="/logo.png" alt="Logo" width={60} height={60} className="w-16 h-16"></Image>
        <h1 className="text-xl font-bold text-wisp-pink-700 font-lexend-deca">Tiệm bánh Cỏ May</h1>
      </div>
      <div>
        <Link href="/" className="px-3 py-2 text-xl font-medium text-gray-800 hover:text-wisp-pink-400">
          Trang chủ
        </Link>
        <Link
          href="/about"
          className="px-3 py-2 text-xl font-medium text-gray-800 hover:text-wisp-pink-400"
        >
          Câu chuyện Bánh Cỏ May
        </Link>
        <Link
          href="/menu"
          className="px-3 py-2 text-xl font-medium text-gray-800 hover:text-wisp-pink-400"
        >
          Bánh của tiệm
        </Link>
        <Link
          href="/contact"
          className="px-3 py-2 text-xl font-medium text-gray-800 hover:text-wisp-pink-400"
        >
          Liên hệ
        </Link>
      </div>
      </div>
      <div className="flex items-center gap-2 text-wisp-pink-400">
        <Smartphone width={30} height={30}></Smartphone><span className="text-xl text-wisp-pink-400">0933-252-658</span>
      </div>
    </nav>
  );
}
