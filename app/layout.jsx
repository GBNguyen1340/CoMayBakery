import "./globals.css";
import Head from "next/head";
import NavBar from "/components/NavBar";
import Footer from "@/components/Footer";

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
      <body>
        <header className="shadow-sm">
          <NavBar></NavBar>
        </header>
        <main className="min-h-screen mt-24">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
