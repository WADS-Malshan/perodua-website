import ChooseBestCar from "@/components/blocks/choose-best-car";
import Customers from "@/components/blocks/customers";
import Events from "@/components/blocks/events";
import Testimonials from "@/components/blocks/testimonials";
import VehicleGallery from "@/components/blocks/vehicle-gallery";

export default function Home() {
  return (
    <>
      <ChooseBestCar />
      <VehicleGallery />
      <Testimonials />
      <Customers />
      <Events />
    </>
  );
}
