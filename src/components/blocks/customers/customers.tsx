"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Customers() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;

    const list = listRef.current;
    const listWidth = list.offsetWidth / 2; // Half because we duplicated items

    // Create the infinite scroll animation
    const animation = gsap.to(list, {
      x: -listWidth,
      duration: 50,
      ease: "none",
      repeat: -1,
    });

    // Optional: Pause on hover
    list.addEventListener("mouseenter", () => animation.pause());
    list.addEventListener("mouseleave", () => animation.resume());

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="customers">
      <div className="customers-wrap">
        <div className="customers-list" ref={listRef}>
          {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((num, i) => (
            <div className="customers-list-item" key={i}>
              <div className="image-wrap">
                <Image
                  src={`/img/customers/${num}.png`}
                  alt="customer logo"
                  width={600}
                  height={600}
                  className="image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}