import { HomeCarousel } from "@/components/carousels/HomeCarousel";
import OurServices from "@/components/home/OurServices";
import RoomCollection from "@/components/home/RoomCollection";
import ServiceAdvertise from "@/components/home/ServiceAdvertise";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <ServiceAdvertise />
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-24">
        <RoomCollection />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-24">
        <OurServices />
      </div>
    </div>
  );
};

export default Home;
