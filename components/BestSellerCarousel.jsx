"use client";
import { cakes } from "@/app/lib/data";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSellerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-wisp-pink-400">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-gray-100">
          Được nhiều khách hàng yêu thích
        </h2>

        <Slider {...settings}>
          {cakes.map((cake, index) => (
            <div key={index} className="p-4">
              <div className="p-4 overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg ">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={cake.imageUrl}
                    alt={cake.title}
                    className="object-cover w-full transition-transform duration-300 transform h-60 hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{cake.title}</h3>
                  <p className="mt-2 text-gray-600">Giá từ {cake.price}</p>
                  <button className="px-4 py-2 mt-4 text-white rounded-lg bg-wisp-pink-600 hover:bg-wisp-pink-700">
                    Đặt bánh
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BestSellerCarousel;
