import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ParticleWIthContact = () => {
  const navigate = useNavigate();
  
  return (
    <div className="text-white flex h-full justify-between items-center gap-8">
      <div>
        <p className="mb-4 text-sm md:text-xl font-thin tracking-widest">
          QUALITY, SPEED AND RESULT
        </p>
        <h1 className="text-[20px] md:text-4xl lg:text-5xl font-bold md:w-2/3">
          We'll help your business to get on a new stage!
        </h1>
      </div>
      <div>
        <Button
          onClick={() => navigate("/contact-us")}
          className="text-[18px] md:text-2xl p-[20px] md:px-8 md:py-8 border-[3px]"
          ghost
        >
          Contact us
        </Button>
      </div>
    </div>
  );
};

export default ParticleWIthContact;
