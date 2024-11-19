import ParticleWIthContact from "@/components/contact/ParticleWIthContact.contact";
import OurServices from "@/components/home/OurServices";
import React, { useEffect } from 'react';
import { Particle } from 'jparticles';

const Services = () => {
  useEffect(() => {
    new Particle('#demo', {
      // The straight line distance between the two particle centers
      proximity: 90,
      // All points are within the range of 100(including) for the fixed point radius,
      // the distance between the center points is less than
      // or equal to the `proximity` value, then connection
      range: 100,
  })
  }, []); 
  return (
    <div >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-24" >
        <OurServices />
      </div>
      <div className="bg-[#002F76] h-64 md:h-80 lg:h-96 my-8 md:my-24" >
        <div id="demo" className="absolute w-full h-64 md:h-80 lg:h-96"></div>
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-24 h-full" >
          <ParticleWIthContact />
        </div>
      </div>
    </div>
  );
};

export default Services;
