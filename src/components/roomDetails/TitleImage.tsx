import { FaLocationDot } from "react-icons/fa6";
import { Image } from "antd";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const TitleImage = ({ roomData }: any) => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold">{roomData?.name}</h1>
      <div className="flex items-center gap-1 my-2 text-xs md:text-lg">
        <FaLocationDot className="text-blue-700 text-xl" />
        <p className="">
          {roomData?.address}-{" "}
          <a
            href={`${roomData?.googleMapURL}`}
            target="_blank"
            className="text-blue-700 font-semibold"
          >
            Excellent location - show map
          </a>
        </p>
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
  );
};

export default TitleImage;
