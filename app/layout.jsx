import Navbar from "@/components/Navbar";
import "./globals.css";
import Head from "next/head";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";


export const metadata = {
  title: "Tiệm bánh cỏ ",
  description: "Thổi hồn cho bữa tiệc sinh nhật với bánh rau câu tươi mát",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={`${metadata.description}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={` antialiased`}>
        <header className="shadow-sm">
          <Navbar></Navbar>
        </header>
        {children}
        {/* Fixed Contact Icons */}
        <div className="fixed z-50 flex flex-col space-y-4 bottom-6 right-6">
          {/* Phone Icon */}
          <a href="tel:+1234567890" className="relative group" aria-label="Call us">
            <div className="absolute inset-0 bg-green-500 rounded-full opacity-75 animate-ping"></div>
            <div className="relative flex items-center justify-center w-12 h-12 text-white transition-colors duration-300 bg-green-500 rounded-full shadow-lg hover:bg-green-600">
              <IoPhonePortraitOutline size={24} />
            </div>
          </a>

          {/* Facebook Icon */}
          <a
            href="https://facebook.com/your-page"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            aria-label="Visit our Facebook page"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-75 animate-ping"></div>
            <div className="relative flex items-center justify-center w-12 h-12 text-white transition-colors duration-300 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700">
              <FaFacebookMessenger size={24} />
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}
