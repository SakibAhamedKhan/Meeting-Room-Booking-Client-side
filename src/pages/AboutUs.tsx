import ParticleWIthContact from "@/components/contact/ParticleWIthContact.contact";
import React from "react";
import { useEffect } from "react";
import { Particle } from "jparticles";
import { directorsData } from "@/assets/demoResources";

const AboutUs = () => {
  useEffect(() => {
    new Particle("#demo", {
      range: 0,
      num: 0.2,
      minSpeed: 0.01,
      maxSpeed: 0.5,
      minR: 0.1,
      maxR: 2,
    });
  }, []);
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-16">
        <div>
          <h1 className="text-center text-2xl md:text-4xl text-[#002F76] font-semibold mb-2">
            Curious to Know About Us?
          </h1>
          <p className="text-center font-light text-md md:text-xl md:w-[600px] lg:w-[700px] mx-auto">
            Explore more about Meeting.com and join the journey to understand
            our mission and meet the amazing individuals who bring it the way to
            success.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 md:mt-8 lg:mt-14 md:mb-[-30px] gap-6 md:gap-10 lg:gap-0">
          <div className="justify-items-center">
            <p><span className="text-3xl md:text-5xl font-semibold">10</span><span className="text-[#C2C2C2] text-3xl md:text-5xl font-semibold">+</span><span className="text-lg md:text-2xl">YEARS</span></p>
          </div>
          <div className="justify-items-center">
            <p><span className="text-3xl md:text-5xl font-semibold">1K</span><span className="text-[#C2C2C2] text-3xl md:text-5xl font-semibold">+</span><span className="text-lg md:text-2xl">ROOMS</span></p>
          </div>
          <div className="justify-items-center">
            <p><span className="text-3xl md:text-5xl font-semibold">5K</span><span className="text-[#C2C2C2] text-3xl md:text-5xl font-semibold">+</span><span className="text-lg md:text-2xl">EVENTS</span></p>
          </div>
          <div className="justify-items-center">
            <p><span className="text-3xl md:text-5xl font-semibold">10K</span><span className="text-[#C2C2C2] text-3xl md:text-5xl font-semibold">+</span><span className="text-lg md:text-2xl">CLIENTS</span></p>
          </div>
        </div>
      </div>

      <div className="bg-[#002F76] h-64 md:h-80 lg:h-96 my-8 md:my-24">
        <div id="demo" className="absolute w-full h-64 md:h-80 lg:h-96"></div>
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-24 h-full">
          <ParticleWIthContact />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-24">
        <div className="mb-2 md:mb-4">
          <h1 className="text-center text-2xl md:text-4xl text-[#002F76] font-semibold">
            Board of Directors
          </h1>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-x-14">
          {
            directorsData?.map((item,index) => (
              <div className="justify-items-center p-[10px] md:p-4 w-fit">
                <img src={`${item.image}`} className="rounded-full w-16 h-16 md:w-32 md:h-32 lg:w-40 lg:h-40 mb-2" alt="" />
                <h3 className="text-lg md:text-xl font-bold md:mb-2">{item.name}</h3>
                <p className="text-sm md:text-md font-light">{item.role}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
