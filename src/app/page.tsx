import Customers from "@/components/blocks/customers";
import Events from "@/components/blocks/events";
import VehicleGallery from "@/components/blocks/vehicle-gallery";

export default function Home() {
  return (
    <>
      <VehicleGallery />
      <Customers />
      <Events />
    </>
  );
}
