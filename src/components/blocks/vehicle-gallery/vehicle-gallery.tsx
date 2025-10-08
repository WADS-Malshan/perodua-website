"use client";

import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules"; 
import 'swiper/css/effect-fade'; 
import Image from "next/image";
import { VehicleGalleryList } from "@/data/vehicle-gallery-list";

export default function VehicleGallery() {
  return (
    <section className="vehicle-gallery">
      <div className="vehicle-gallery-wrap">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          speed={3000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          {/* Fetch images from data file */}
          {VehicleGalleryList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="vehicle-gallery-item">
                <div className="vehicle-gallery-item-wrap">
                  <Image
                    src={item.image}
                    width={1440}
                    height={600}
                    alt="Vehicle Gallery"
                    className="image"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}