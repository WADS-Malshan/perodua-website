import ChooseBestCar from "@/components/blocks/choose-best-car";
import Customers from "@/components/blocks/customers";
import Deals from "@/components/blocks/deals";
import Events from "@/components/blocks/events";
import FAQ from "@/components/blocks/faq";
import Footer from "@/components/blocks/footer";
import Hero from "@/components/blocks/hero";
import Testimonials from "@/components/blocks/testimonials";
import VehicleGallery from "@/components/blocks/vehicle-gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <ChooseBestCar />
      <VehicleGallery />
      <Testimonials />
      <Customers />
      <Events />
      <Deals />
      <FAQ />
      <Footer />
    </>
  );
}
