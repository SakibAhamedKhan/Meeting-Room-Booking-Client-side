import { HomeCarousel } from "@/components/carousels/HomeCarousel";
import CustomerFeedback from "@/components/home/CustomerFeedback.home";
import GetInTouch from "@/components/home/GetInTouch.home";
import OurServices from "@/components/home/OurServices";
import RoomCollection from "@/components/home/RoomCollection";
import ServiceAdvertise from "@/components/home/ServiceAdvertise";
import TrustedCompany from "@/components/home/TrustedCompany.home";

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
      <div className="bg-[#e4e9f2]">  
        <TrustedCompany />   
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-24 md:mt-[-50px]">
        <CustomerFeedback />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-4 mt-[-50px] md:mt-[-80px]">
        <GetInTouch />
      </div>  
    </div>
  );
};

export default Home;
