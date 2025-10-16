import AboutIntro from "@/components/blocks/about-intro";
import MoreAboutPerodua from "@/components/blocks/more-about-perodua";
import SubHero from "@/components/blocks/sub-hero";

export default function AboutPage() {
  return (
    <>
      <SubHero imageLink="/img/hero/about.png" title="About Us" />
      <AboutIntro />
      <MoreAboutPerodua />
    </>
  );
}