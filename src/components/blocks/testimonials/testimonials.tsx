"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import { TestimonialsList } from "@/data/testimonials-list";
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-wrap content-width">
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,      // 👈 rotation angle
            stretch: 0,
            depth: 100,      // 👈 how deep the 3D effect looks
            modifier: 4,
            slideShadows: true,
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            560: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
        >

          {TestimonialsList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonials-item">
                <div className="testimonials-item-wrap">
                  <Image
                    src={item.image}
                    width={1000}
                    height={800}
                    alt="Testimonials"
                    className="image"
                    priority={index === 0}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="slider-controls">
            <div className="button custom-prev">
              <div className="icon">
                <IconChevronLeft />
              </div>
            </div>
            <div className="button custom-next">
              <div className="icon">
                <IconChevronRight />
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
