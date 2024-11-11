import BestSellerCarousel from "@/components/BestSellerCarousel";
import ServicesSession from "@/components/ServicesSession";
import ProductList from "@/components/ProductList";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <ServicesSession></ServicesSession>
      <BestSellerCarousel></BestSellerCarousel>
      <div className="bg-cake-pattern">
        <div className="container px-4 py-24 mx-auto sm:px-6 lg:px-8">
          <h1 className="mb-16 text-5xl font-semibold text-center text-wisp-pink-700">Các mẫu bánh tại tiệm</h1>
          <ProductList></ProductList>
        </div>
      </div>
    </>
  );
}
