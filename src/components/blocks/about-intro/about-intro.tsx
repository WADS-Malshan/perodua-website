import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="about-intro-wrap">
        <div className="big-title">
          <Image src="/img/about-intro/about-text.png" alt="about-intro" width={1353} height={200} className="image" />
        </div>
        <div className="content">
          <div className="desc content-width">
            <span className="text body-text">Established in 1993, Perodua—short for Perusahaan Otomobil Kedua Sdn Bhd—has grown  to become one of the world’s leading names in vehicle manufacturing. Perodua’s mission is  to provide practical, high-quality vehicles that bring reliable mobility to every individual.</span>
          </div>
        </div>
      </div>
    </section>
  );
}