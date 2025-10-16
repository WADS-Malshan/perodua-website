"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { IconCircleArrowRight, IconUsers } from '@tabler/icons-react';

gsap.registerPlugin(Draggable);

export default function ChooseBestCar() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainerRef.current || !wrapRef.current) return;

    const container = scrollContainerRef.current;
    const wrap = wrapRef.current;

    // Calculate the maximum scroll distance
    const getMaxScroll = () => {
      return wrap.scrollWidth - container.offsetWidth - 100; // Subtract the initial gap
    };

    // Create draggable instance
    const draggable = Draggable.create(wrap, {
      type: "x",
      bounds: {
        minX: -getMaxScroll(),
        maxX: 100 // Allow to go back to initial position with gap
      },
      inertia: true,
      edgeResistance: 0.65,
      onDragEnd: function () {
        // Smooth snap back if dragged beyond bounds
        const maxScroll = getMaxScroll();
        const currentX = gsap.getProperty(wrap, "x") as number;

        if (currentX > 100) { // Updated to account for initial gap
          gsap.to(wrap, { x: 100, duration: 0.5, ease: "power2.out" });
        } else if (Math.abs(currentX) > maxScroll) {
          gsap.to(wrap, { x: -maxScroll, duration: 0.5, ease: "power2.out" });
        }
      }
    });

    // Handle window resize
    const handleResize = () => {
      const maxScroll = getMaxScroll();
      const currentX = gsap.getProperty(wrap, "x") as number;

      draggable[0].applyBounds({
        minX: -maxScroll,
        maxX: 100 // Updated to account for initial gap
      });

      // Adjust position if now out of bounds
      if (Math.abs(currentX) > maxScroll) {
        gsap.to(wrap, { x: -maxScroll, duration: 0.3 });
      } else if (currentX > 100) {
        gsap.to(wrap, { x: 100, duration: 0.3 });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      draggable[0].kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="choose-best-car">
      <div className="choose-best-car-wrap">
        <div className="big-title">
          <Image src="/img/choose-best-car/choose-text.png" alt="image" width={1440} height={281} className="image" />
        </div>
        <div className="content">
          <div className="title">
            <span className="text">Choose The Best Car <br /> That Suits Your Needs</span>
          </div>
          <div className="main-vehicle-types">
            <div className="main-vehicle-types-wrap">
              <div className="main-vehicle-types-item">
                <Image src="/img/vehicle-types/axia.png" alt="image" width={183} height={93} className="image" />
              </div>
              <div className="main-vehicle-types-item">
                <Image src="/img/vehicle-types/axia.png" alt="image" width={183} height={93} className="image" />
              </div>
              <div className="main-vehicle-types-item">
                <Image src="/img/vehicle-types/axia.png" alt="image" width={183} height={93} className="image" />
              </div>
              <div className="main-vehicle-types-item">
                <Image src="/img/vehicle-types/axia.png" alt="image" width={183} height={93} className="image" />
              </div>
            </div>
          </div>
          <div className="main-vehicles" ref={scrollContainerRef}>
            <div className="main-vehicles-wrap" ref={wrapRef}>
              <div className="main-vehicles-item">
                <div className="main-vehicles-item-wrap">
                  <div className="background">
                    <Image src="/img/vehicle-types/background.png" alt="image" width={474} height={512} className="image" />
                  </div>
                  <div className="type">
                    <span className="text">Hatchback</span>
                  </div>
                  <div className="price">
                    <span className="text">RS. 1,00,000*</span>
                  </div>
                  <div className="vehicle">
                    <div className="vehicle-wrap">
                      <div className="logo">
                        <Image src="/img/vehicle-types/axia-logo.png" alt="image" width={274} height={58} className="image" />
                      </div>
                      <div className="vehicle-image">
                        <Image src="/img/vehicle-types/axia.png" alt="image" width={183} height={93} className="image" />
                      </div>
                    </div>
                  </div>
                  <div className="book-and-more">
                    <div className="book-and-more-wrap">
                      <div className="book">
                        <a href="#" className="btn secondary">Book Now</a>
                      </div>
                      <div className="more">
                        <a href="#" className="btn secondary">More info</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-vehicles-item">
                <div className="main-vehicles-item-wrap">
                  <div className="background">
                    <Image src="/img/vehicle-types/background.png" alt="image" width={474} height={512} className="image" />
                  </div>
                  <div className="type">
                    <span className="text">Hatchback</span>
                  </div>
                  <div className="price">
                    <span className="text">RS. 1,00,000*</span>
                  </div>
                  <div className="vehicle">
                    <div className="vehicle-wrap">
                      <div className="logo">
                        <Image src="/img/vehicle-types/axia-logo.png" alt="image" width={274} height={58} className="image" />
                      </div>
                      <div className="vehicle-image">
                        <Image src="/img/vehicle-types/axia.png" alt="image" width={183} height={93} className="image" />
                      </div>
                    </div>
                  </div>
                  <div className="book-and-more">
                    <div className="book-and-more-wrap">
                      <div className="book">
                        <a href="#" className="btn secondary">Book Now</a>
                      </div>
                      <div className="more">
                        <a href="#" className="btn secondary">More info</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-vehicles-item">
                <div className="main-vehicles-item-wrap">
                  <div className="background">
                    <Image src="/img/vehicle-types/background.png" alt="image" width={474} height={512} className="image" />
                  </div>
                  <div className="type">
                    <span className="text">Sedan</span>
                  </div>
                  <div className="price">
                    <span className="text">RS. 1,50,000*</span>
                  </div>
                  <div className="vehicle">
                    <div className="vehicle-wrap">
                      <div className="logo">
                        <Image src="/img/vehicle-types/axia-logo.png" alt="image" width={274} height={58} className="image" />
                      </div>
                      <div className="vehicle-image">
                        <Image src="/img/vehicle-types/axia.png" alt="image" width={183} height={93} className="image" />
                      </div>
                    </div>
                  </div>
                  <div className="book-and-more">
                    <div className="book-and-more-wrap">
                      <div className="book">
                        <a href="#" className="btn secondary">Book Now</a>
                      </div>
                      <div className="more">
                        <a href="#" className="btn secondary">More info</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-vehicles-item">
                <div className="main-vehicles-item-wrap">
                  <div className="background">
                    <Image src="/img/vehicle-types/background.png" alt="image" width={474} height={512} className="image" />
                  </div>
                  <div className="type">
                    <span className="text">Sedan</span>
                  </div>
                  <div className="price">
                    <span className="text">RS. 1,50,000*</span>
                  </div>
                  <div className="vehicle">
                    <div className="vehicle-wrap">
                      <div className="logo">
                        <Image src="/img/vehicle-types/axia-logo.png" alt="image" width={274} height={58} className="image" />
                      </div>
                      <div className="vehicle-image">
                        <Image src="/img/vehicle-types/axia.png" alt="image" width={183} height={93} className="image" />
                      </div>
                    </div>
                  </div>
                  <div className="book-and-more">
                    <div className="book-and-more-wrap">
                      <div className="book">
                        <a href="#" className="btn secondary">Book Now</a>
                      </div>
                      <div className="more">
                        <a href="#" className="btn secondary">
                          <div className="text">
                            More information
                          </div>
                          <div className="icon">
                            <IconCircleArrowRight />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-vehicles-item">
                <div className="main-vehicles-item-wrap">
                  <div className="background">
                    <Image src="/img/vehicle-types/background.png" alt="image" width={474} height={512} className="image" />
                  </div>
                  <div className="type">
                    <span className="text">Sedan</span>
                  </div>
                  <div className="price">
                    <span className="text">RS. 1,50,000*</span>
                  </div>
                  <div className="vehicle">
                    <div className="vehicle-wrap">
                      <div className="logo">
                        <Image src="/img/vehicle-types/axia-logo.png" alt="image" width={274} height={58} className="image" />
                      </div>
                      <div className="vehicle-image">
                        <Image src="/img/vehicle-types/axia.png" alt="image" width={183} height={93} className="image" />
                      </div>
                    </div>
                  </div>
                  <div className="book-and-more">
                    <div className="book-and-more-wrap">
                      <div className="book">
                        <a href="#" className="btn secondary">Book Now</a>
                      </div>
                      <div className="more">
                        <a href="#" className="btn secondary">More info</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="who-we-are">
            <div className="who-we-are-wrap">
              <div className="heading">
                <div className="title">
                  <h2 className="text">Who <br /> We Are</h2>
                </div>
                <div className="icon">
                  <IconUsers />
                </div>
              </div>
              <div className="info">
                <div className="desc">
                  <span className="text body-text">
                    Established in 1993, Perodua has grown in terms of production as well as car registration, and now becoming the national car company that is leading the industry into the Electric Vehicle (EV) era.
                  </span>
                </div>
                <div className="desc">
                  <span className="text body-text">
                    By doing so, we lead over 70,000 local workers within the automotive ecosystem into the next stage of the industry’s future.
                  </span>
                </div>
                <div className="desc">
                  <span className="text body-text">
                    We do more than just making cars, we also develop new technologies and at the same time, train Malaysians to be self-reliance in this industry.
                  </span>
                </div>
                <div className="button">
                  <a href="#" className="btn secondary">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}