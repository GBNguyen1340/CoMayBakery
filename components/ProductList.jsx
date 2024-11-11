import { getProducts } from "@/app/services/product.service";
import Image from "next/image";
import Link from "next/link";

export default async function ProductList() {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="p-4 overflow-hidden text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
        >
          <Link href={`/menu/${product.slug}`}>
            <div className="relative w-full overflow-hidden rounded-lg h-80">
              <Image
                src={product.mainImage?.url || "/placeholder.jpg"}
                alt={product.mainImage?.alt || product.name}
                fill
                className="object-cover transition-transform duration-300 transform h-60 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>

          <div className="p-4">
            <Link href={`/menu/${product.slug}`} className="block mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            </Link>
            <p className="block mt-2 text-gray-600">
              Giá từ{" "}
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.price)}
            </p>
            <Link
              href={`/menu/${product.slug}`}
              className="inline-block px-4 py-2 mt-4 text-white rounded-lg bg-wisp-pink-600 hover:bg-wisp-pink-700"
            >
              Đặt bánh
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
