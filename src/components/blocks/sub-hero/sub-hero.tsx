import Image from "next/image";
import { IconArrowRightCircle } from '@tabler/icons-react';

interface SubHeroProps {
  imageLink: string;
  title: string;
}

export default function SubHero({ imageLink, title }: SubHeroProps) {
  return (
    <section className="sub-hero">
      <div className="sub-hero-wrap">
        <div className="background-image">
          <Image
            src={imageLink}
            alt="background"
            width={1440}
            height={600}
            className="image"
          />
        </div>
        <div className="overlay"></div>
        <div className="content">
          <div className="content-wrap">
            <div className="title">
              <span className="text">{title}</span>
            </div>
            <div className="line"></div>
            <div className="breadcrumb">
              <div className="home">
                <span className="text">Home</span>
              </div>
              <div className="icon">
                <IconArrowRightCircle />
              </div>
              <div className="current">
                <span className="text">{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}