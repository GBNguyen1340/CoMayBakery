import { getProduct, getRelatedProducts } from "@/app/services/product.service";
import ProductImages from "@/components/ProductImages";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return (
      <div className="container relative px-4 py-16 mx-auto mt-12 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div>Không tìm thấy loại bánh mà bạn đã chọn</div>
          <Link
            href="/menu"
            className="inline-flex items-center text-wisp-pink-600 hover:text-wisp-pink-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Quay lại Menu
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = await getRelatedProducts(product._id);

  return (
    <div className="container relative px-4 py-16 mx-auto mt-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 pt-16 md:grid-cols-2">
        <div className="relative w-full h-[500px]">
          <ProductImages images={[product.mainImage, ...product.images]} productName={product.name}></ProductImages>
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <hr className="mb-16 "></hr>
          {product.noted && (
            <div className="p-4 rounded-lg">
              <div className="text-gray-600">
                {Array.isArray(product.noted) && <PortableText value={product.noted} />}
              </div>
            </div>
          )}
          <hr></hr>
          {product.sizeOptions && (
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Kích thước (đường kính của bánh):</h2>
              <div className="w-[70%] space-y-1">
                {product.sizeOptions.map((option) => (
                  <div key={option.size} className="flex justify-between">
                    <span>Size bánh {option.size}: </span>
                    <div className="flex-grow mx-2 border-b border-gray-500 border-dotted"></div>
                    <span className="font-bold text-wisp-pink-600">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(option.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div>
            <button className="block w-full px-6 py-3 mt-8 text-white rounded-lg bg-wisp-pink-600 hover:bg-wisp-pink-700">
              Đặt bánh ngay
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="px-4 py-4 text-3xl font-semibold">Mô tả</h2>
        <hr className="mb-8"></hr>
        <div>
          {Array.isArray(product.description) && <PortableText value={product.description} />}
        </div>
      </div>

      {relatedProducts && relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="px-4 py-4 text-3xl font-semibold">Các mẫu bánh tương tự</h2>
          <hr className="mb-8"></hr>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <Link
                href={`/menu/${relatedProduct.slug}`}
                key={relatedProduct._id}
                className="group"
              >
                <div className="relative mb-3 aspect-square">
                  <Image
                    src={relatedProduct.mainImage?.url || "/placeholder.jpg"}
                    alt={relatedProduct.mainImage?.alt || relatedProduct.name}
                    fill
                    className="object-cover transition-transform duration-300 rounded-lg group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-wisp-pink-600">
                  {relatedProduct.name}
                </h3>
                <p className="mt-1 text-wisp-pink-600">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(relatedProduct.price)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
