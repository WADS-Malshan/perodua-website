"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";

export default function Footer() {
  const router = useRouter();

  const handleClick = (text: string) => {
    const id = text.toLowerCase().replace(/\s+/g, "-");

    if (text === "About us") {
      router.push("/about");
    } else {
      router.push(`/#${id}`);
    }
  };

  const quickLinks = ["Axia", "Bezza", "MYVI", "Ativa", "Aruz"];

  return (
    <section className="footer">
      <div className="footer-wrap content-width">
        {/* Contact Column */}
        <div className="footer-column contact">
          <div className="footer-column-wrap">
            <div className="image-wrap">
              <Image
                src="/img/footer/footer-logo.webp"
                alt="logo"
                width={1117}
                height={101}
                className="image"
              />
            </div>
            <div className="contact-list">
              <div className="contact-list-item">
                <div className="icon">
                  <IconMapPin />
                </div>
                <div className="value">
                  <span className="text">
                    No. 100, Hyde Park Corner, Colombo 2, Sri Lanka
                  </span>
                </div>
              </div>
              <div className="contact-list-item">
                <div className="icon">
                  <IconPhone />
                </div>
                <div className="value">
                  <span className="text">
                    <a className="link" href="tel:+94 11 7565180">
                      +94 11 756 5180
                    </a>
                  </span>
                </div>
              </div>
              <div className="contact-list-item">
                <div className="icon">
                  <IconMail />
                </div>
                <div className="value">
                  <span className="text">
                    <a className="link" href="mailto:info@unitedmotors.lk">
                      info@unitedmotors.lk
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Column */}
        <div className="footer-column social">
          <div className="footer-column-wrap">
            <div className="social-title">
              <span className="text">Follow Us:</span>
            </div>
            <div className="social-list">
              <div className="social-list-item">
                <a
                  href="https://www.facebook.com/share/169oyrio7u/"
                  target="_blank"
                  className="link"
                >
                  <div className="icon">
                    <IconBrandFacebook />
                  </div>
                </a>
              </div>
              <div className="social-list-item">
                <a
                  href="https://www.tiktok.com/@jmev.sri.lanka?_t=ZS-8xf5uIyxiHI&_r=1"
                  target="_blank"
                  className="link"
                >
                  <div className="icon">
                    <IconBrandTiktok />
                  </div>
                </a>
              </div>
              <div className="social-list-item">
                <a
                  href="https://www.linkedin.com/showcase/unimo-enterprises/"
                  target="_blank"
                  className="link"
                >
                  <div className="icon">
                    <IconBrandLinkedin />
                  </div>
                </a>
              </div>
              <div className="social-list-item">
                <a
                  href="https://www.instagram.com/jmev_srilanka?igsh=Ymx6Mjh6ajU2Nmc="
                  target="_blank"
                  className="link"
                >
                  <div className="icon">
                    <IconBrandInstagram />
                  </div>
                </a>
              </div>
              <div className="social-list-item">
                <a
                  href="https://youtube.com/@jmevsrilanka?feature=shared"
                  target="_blank"
                  className="link"
                >
                  <div className="icon">
                    <IconBrandYoutube />
                  </div>
                </a>
              </div>
            </div>
            <div className="link-list">
                <div className="link-list-item">
                  <a
                    href="#"
                    className="text"
                    style={{ cursor: "pointer" }}
                  >
                    Axia
                  </a>
                </div>
                <div className="link-list-item">
                  <a
                    href="#"
                    className="text"
                    style={{ cursor: "pointer" }}
                  >
                    Bezza
                  </a>
                </div>
                <div className="link-list-item">
                  <a
                    href="#"
                    className="text"
                    style={{ cursor: "pointer" }}
                  >
                    MYVI
                  </a>
                </div>
                <div className="link-list-item">
                  <a
                    href="#"
                    className="text"
                    style={{ cursor: "pointer" }}
                  >
                    ATIVA
                  </a>
                </div>
                <div className="link-list-item">
                  <a
                    href="#"
                    className="text"
                    style={{ cursor: "pointer" }}
                  >
                    Aruz
                  </a>
                </div>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        {/* <div className="footer-column links">
          <div className="footer-column-wrap">
            <div className="quick-title">
              <span className="text">Quick Links</span>
            </div>
            <div className="link-list">
              {quickLinks.map((text) => (
                <div className="link-list-item" key={text}>
                  <span
                    className="text"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClick(text)}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
