import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// 👇 Import all images dynamically
const images = Object.values(
  import.meta.glob("/src/assets/images/*.{jpg,jpeg,png,webp}", {
    eager: true,
    as: "url",
  })
);

export default function HeroSlider() {
  return (
   <section className="relative w-full h-[60vh] md:h-[90vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={image}
                className="absolute inset-0 w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Optional Content */}
              <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4">
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
