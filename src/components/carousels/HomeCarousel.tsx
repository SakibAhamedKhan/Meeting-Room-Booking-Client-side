import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "antd";

export function HomeCarousel() {
  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="w-full">
            <Card className="w-full  h-[400px] md:h-[500px] overflow-hidden rounded-none relative border-none">
              <CardContent className="p-0 h-full">
                <img
                  src={`https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/08/20201008-199WaterSt-2_v1-scaled.jpg`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-60"></div>
                {/* Centered Text and Button */}
                <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
                  <div className="p-16">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 text-white">
                      Find your next Meeting
                    </h1>
                    <p className="text-gray-200 text-md md:text-xl mt-5">
                      Search deals on Meeting Rooms and much more...
                    </p>
                    <Button
                      className="text-[#002F76] font-semibold mt-5"
                    //   onClick={() => navigate("/register")}
                    >
                      EXPLORE NOW
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-5 rounded-full">
        ←
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-5 rounded-full">
        →
      </CarouselNext>
      <div className="h-[10px] w-full bg-[#44FD60]"></div>
    </Carousel>
  );
}
