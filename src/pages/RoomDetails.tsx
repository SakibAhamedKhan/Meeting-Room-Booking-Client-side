import { useGetSingleRoomQuery } from "@/redux/features/customer/roomApi.api";
import React from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { Image } from "antd";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RoomDetails = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetSingleRoomQuery(id);
  let roomData;
  if (!isFetching) {
    roomData = data?.data;
  }
  console.log(roomData);
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-12">
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-5 border">
            <h1 className="text-2xl font-bold">{roomData?.name}</h1>
            <div className="flex items-center gap-1 my-2">
              <FaLocationDot className="text-blue-700 text-xl" />
              <p>{roomData?.address}-</p>
              <a
                href={`${roomData?.googleMapURL}`}
                target="_blank"
                className="text-blue-700 font-semibold"
              >
                Excellent location - show map
              </a>
            </div>

            <div className="">
              <Image
                className="h-auto max-w-full rounded-lg"
                src={`${roomData?.thumbnail[0]?.url}`}
                alt=""
              />
            </div>
            <Carousel className="my-2">
              <CarouselContent className="ml-[1px]">
                {roomData?.extraImages.map((item:any) => (
                  <div className="mr-4">
                    <Image
                      className="h-auto rounded-lg !w-[80px] md:!w-[200px]"
                      src={`${item.url}`}
                      alt=""
                    />
                  </div>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-5 rounded-full">
                ←
              </CarouselPrevious>
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-black p-5 rounded-full">
                →
              </CarouselNext>
            </Carousel>
          </div>
          <div className="border">hi</div>
        </div>
        
      </div>
      
    </div>
  );
};

export default RoomDetails;
