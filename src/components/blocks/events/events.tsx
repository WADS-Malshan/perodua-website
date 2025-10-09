"use client";

import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import 'swiper/css/effect-fade';
import Image from "next/image";
import { EventsList } from "@/data/events-list";

export default function Events() {
  return (
    <section className="events">
      <div className="events-wrap">
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
          {EventsList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="events-item">
                <div className="events-item-wrap">
                  <Image
                    src={item.image}
                    width={1440}
                    height={680}
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
  );
}