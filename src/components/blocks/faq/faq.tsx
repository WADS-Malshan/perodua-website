"use client";

import { useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { FaqList } from "@/data/faq-list";

export default function FAQ() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section className="faq">
      <div className="faq-wrap content-width">
        <div className="heading">
          <h2 className="text">FAQs</h2>
        </div>
        <div className="faq-questions">
          <div className="faq-questions-wrap">
            <div className="faq-list">
              {FaqList.map((item, index) => (
                <div className="faq-list-item" key={index}>
                  <div
                    className="title-and-icon"
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="title">
                      <span className="text">{item.question}</span>
                    </div>
                    <div className="icon">
                      {activeIndex === index ? (
                        <IconMinus />
                      ) : (
                        <IconPlus />
                      )}
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="answer">
                      {item.answer.map((paragraph, pIndex) => (
                        <p className="text" key={pIndex}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}