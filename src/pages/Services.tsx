import ParticleWIthContact from "@/components/contact/ParticleWIthContact.contact";
import OurServices from "@/components/home/OurServices";
import { useEffect } from "react";
import { Particle } from "jparticles";
import CustomerFeedback from "@/components/home/CustomerFeedback.home";

const Services = () => {
  useEffect(() => {
    new Particle("#demo", {
      proximity: 90,
      range: 100,
    });
  }, []);
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-24">
        <OurServices />
      </div>
      <div className="bg-[#002F76] h-64 md:h-80 lg:h-96 my-8 md:my-24">
        <div id="demo" className="absolute w-full h-64 md:h-80 lg:h-96"></div>
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-24 h-full">
          <ParticleWIthContact />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-24">
        <CustomerFeedback />
      </div>
    </div>
  );
};

export default Services;
