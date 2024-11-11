"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function ProductImages({images, productName}) {
  const settings = {
    customPaging: function (i) {
      return (
        <div className="relative w-full h-full">
          <Image
            src={images[i].url}
            alt={images[i].alt || `${productName} - Thumbnail ${i + 1}`}
            fill
            className="object-cover"
          />
        </div>
      );
    },
    fade: true,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-[500px]">
          <Image
            src={image.url}
            alt={image.alt || `${productName} - Image ${index + 1}`}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
      ))}
    </Slider>
  );
}
