import { useGetSingleRoomQuery } from "@/redux/features/customer/roomApi.api";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { Button, Image } from "antd";
import ReactMarkdown from "react-markdown";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AmenitiesCard from "@/components/roomDetails/AmenitiesCard";

const RoomDetails = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetSingleRoomQuery(id);

  const roomData = data?.data;

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-12">
        <div className="grid grid-cols-7 gap-4">
          {/* Title and image */}
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
                alt="Room Thumbnail"
              />
            </div>
            <Carousel className="my-2">
              <CarouselContent className="ml-[1px]">
                {roomData?.extraImages.map((item: any) => (
                  <div className="mr-4" key={item.public_id}>
                    <Image
                      className="h-auto rounded-lg !w-[80px] md:!w-[200px]"
                      src={`${item.url}`}
                      alt="Extra Room Image"
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
          {/* Review and map */}
          <div className="col-span-2 border">hi</div>
        </div>

        {/* amenities */}
        <div className="flex gap-4 my-8 flex-wrap">
          {roomData?.amenities.map((item: any, index: number) => (
            <AmenitiesCard amenities={item} key={index} />
          ))}
        </div>
        {/* description and Reserve */}
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-5">
            <p className="leading-8 text-justify text-lg">
              {roomData?.description}
            </p>
          </div>
          <div className="col-span-2 ">
            <div className="border p-4 rounded-lg">
              <p>
                <span className="font-medium">Price Per Slot:</span> $
                {roomData?.pricePerSlot}
              </p>
              <p className="text-sm text-gray-600 mt-3 mb-2">
                * We given money back generate
              </p>
              <Button className="bg-[#002F76] text-white w-full h-[40px] text-md md:text-lg font-semibold mb-2">
                Reserve
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
