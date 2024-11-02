import Navbar from "@/components/navbar";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Tiệm bánh cỏ ",
  description: "Thổi hồn cho bữa tiệc sinh nhật với bánh rau câu tươi mát",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <header className="shadow-sm">
          <Navbar></Navbar>
        </header>
        {children}
      </body>
    </html>
  );
}
