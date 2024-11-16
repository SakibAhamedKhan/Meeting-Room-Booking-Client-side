import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { roomsData } from "@/assets/demoResources";

const RoomCollection = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-2">
        <h1 className="font-bold text-2xl md:text-4xl">
          Meeting Rom Collection
        </h1>
        <p className="text-[#002F76] text-sm md:text-lg cursor-pointer">More</p>
      </div>
      <div className="lg:max-w-7xl my-4">
        <Carousel
          opts={{
            align: "start",
          }}
          className=""
        >
          <CarouselContent>
            {roomsData.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="rounded-lg">
                    <CardContent className="p-0">
                      <div className="">
                        <img
                          className="w-full h-44 rounded-t-lg"
                          src={`${item.thumbnail}`}
                          alt=""
                        />
                      </div>
                      <div className="px-4 py-2">
                        <h2 className="text-[#002F76] text-md md:text-xl font-bold cursor-pointer">
                          {item.name}
                        </h2>
                        <p className="text-sm md:text-lg">Room No: {item.roomNo}</p>
                        <p className="text-sm md:text-lg">Capactiy: {item.capacity}</p>
                        <p className="text-sm md:text-lg">Floor No: {item.floorNo}</p>
                      </div>
                      <div className="px-4 pb-4 flex justify-end">
                        <div className="flex justify-center items-center inline-flex gap-4">
                            <p className="text-sm md:text-lg">Per Slot</p>
                            <h2 className="text-xl md:text-2xl font-bold text-[#002F76]">${item.pricePerSlot}</h2>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ms-[60px] md:ms-[30px] p-2 md:p-6" />
          <CarouselNext className="me-[60px] md:me-[30px] p-2 md:p-6" />
        </Carousel>
      </div>
    </div>
  );
};

export default RoomCollection;
