"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { DealsList } from "@/data/deals-list";

export default function Deals() {
  return (
    <section className="deals-list content-width">
      <div className="heading">
        <div className="title">
          <span className="text">Perodua Deals</span>
        </div>
        <div className="desc">
          <span className="text body-text">Discover Our Exciting Promotions & Rebates And Drive Away In Style.</span>
        </div>
      </div>
      <div className="deals-list-wrap">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          <div className="deals-slider-controls">
            <div className="button custom-prev">
              <Image
                src="/img/deals/previous.png"
                alt="arrow"
                width={30}
                height={30}
              />
            </div>
            <div className="button custom-next">
              <Image
                src="/img/deals/next.png"
                alt="arrow"
                width={30}
                height={30}
              />
            </div>
          </div>
          {DealsList.map((deals) => (
            <SwiperSlide key={deals.id}>
              <div className="deals-list-item">
                <div className="deals-list-item-wrap">
                  <div className="deal-image">
                    <Image
                      src={deals.imageLink}
                      alt="deal"
                      width={1200}
                      height={800}
                      className="image"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}