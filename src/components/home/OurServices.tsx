import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";


import { BiLogoDigitalocean } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { MdModelTraining } from "react-icons/md";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { PiStrategyBold } from "react-icons/pi";


const OurServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="px-4 pb-4 cursor-grab  duration-200 border-none shadow-none">
        <CardHeader className="">
          <div className="">
            <p className="text-xl text-[#002F76] mb-2">
            Our Services
            </p>
          </div>
          <div className="">
            <h1 className="m-0 text-3xl md:text-4xl lg:text-5xl font-bold">
            What we do
            </h1>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <p className="text-md md:text-xl">
          Our advertising agency provides wide specter of services for medical and insurance industry. Get a free consultation with a marketing expert to discover opportunities for you type of products or services.
          </p>
        </CardFooter>
      </Card>

      <Card className="px-4 pb-4 hover:bg-[#002F76] cursor-grab hover:text-white duration-200">
        <CardHeader className="grid grid-cols-2 justify-center items-center">
          <div className="">
            <BiLogoDigitalocean className="text-5xl md:text-6xl lg:text-7xl" />
          </div>
          <div className="flex justify-end items-center">
            <h1 className="m-0 text-6xl md:text-7xl lg:text-8xl font-semibold tracking-widest mt-[-12px] leading-none text-[#E7E7E7]">
              01
            </h1>
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="text-[22px] md:text-[24px] lg:text-[28px]">Digital advertising</h1>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-md md:text-xl">
            Looking for someone to help you with your ads? We are proficient in
            SEM, SMM, any kind of display and mobile advertising.
          </p>
        </CardFooter>
      </Card>

      <Card className="px-4 pb-4 hover:bg-[#002F76] cursor-grab hover:text-white duration-200">
        <CardHeader className="grid grid-cols-2 justify-center items-center">
          <div className="">
            <RiTeamLine className="text-5xl md:text-6xl lg:text-7xl" />
          </div>
          <div className="flex justify-end items-center">
            <h1 className="m-0 text-6xl md:text-7xl lg:text-8xl font-semibold tracking-widest mt-[-12px] leading-none text-[#E7E7E7]">
              02
            </h1>
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="text-[22px] md:text-[24px] lg:text-[28px]">Team management</h1>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-md md:text-xl">
            We willl help you to build an authentic community among your
            customers, employees, and partners through various
          </p>
        </CardFooter>
      </Card>

      <Card className="px-4 pb-4 hover:bg-[#002F76] cursor-grab hover:text-white duration-200">
        <CardHeader className="grid grid-cols-2 justify-center items-center">
          <div className="">
            <MdModelTraining className="text-5xl md:text-6xl lg:text-7xl" />
          </div>
          <div className="flex justify-end items-center">
            <h1 className="m-0 text-6xl md:text-7xl lg:text-8xl font-semibold tracking-widest mt-[-12px] leading-none text-[#E7E7E7]">
              03
            </h1>
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="text-[22px] md:text-[24px] lg:text-[28px]">Training and consulting</h1>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-md md:text-xl">
            We are proficient in coaching and consulting. Our team provide best
            learning and development solutions to companies and organisations.
          </p>
        </CardFooter>
      </Card>

      <Card className="px-4 pb-4 hover:bg-[#002F76] cursor-grab hover:text-white duration-200">
        <CardHeader className="grid grid-cols-2 justify-center items-center">
          <div className="">
            <HiOutlineBuildingLibrary className="text-5xl md:text-6xl lg:text-7xl" />
          </div>
          <div className="flex justify-end items-center">
            <h1 className="m-0 text-6xl md:text-7xl lg:text-8xl font-semibold tracking-widest mt-[-12px] leading-none text-[#E7E7E7]">
              04
            </h1>
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="text-[22px] md:text-[24px] lg:text-[28px]">Full funnel build</h1>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-md md:text-xl">
            We will build a well designed and properly executed sales funnel,
            which help your business to convert leads into paying
          </p>
        </CardFooter>
      </Card>

      <Card className="px-4 pb-4 hover:bg-[#002F76] cursor-grab hover:text-white duration-200">
        <CardHeader className="grid grid-cols-2 justify-center items-center">
          <div className="">
            <PiStrategyBold className="text-5xl md:text-6xl lg:text-7xl" />
          </div>
          <div className="flex justify-end items-center">
            <h1 className="m-0 text-6xl md:text-7xl lg:text-8xl font-semibold tracking-widest mt-[-12px] leading-none text-[#E7E7E7]">
              05
            </h1>
          </div>
        </CardHeader>
        <CardContent>
          <h1 className="text-[22px] md:text-[24px] lg:text-[28px]">Marketing strategy</h1>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-md md:text-xl">
            Our team knows everything about reaching prospective consumers and
            turning them into customers of the services
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OurServices;
