import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { feedbackData } from "@/assets/demoResources";

const CustomerFeedback = () => {
  return (
    <div>
      <h4 className="text-md md:text-lg lg:text-xl font-medium text-center mb-1 md:mb-2 tracking-widest">
        OUR CUSTOMERS REVIEWS
      </h4>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-2 md:mb-8">
        Good job,excellent rating
      </h1>

      <div className="lg:max-w-7xl my-4">
        <Carousel
          opts={{
            align: "start",
          }}
          className=""
        >
          <CarouselContent>
            {feedbackData.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="rounded-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <img className="rounded-full w-16 h-16 mr-6" src={`${item.user.image}`} alt="" />
                        <div>
                          <h3 className="text-xl font-semibold">{item.user.name}</h3>
                          <p>{item.role}</p>
                        </div>
                      </div>
                      <div>
                        <p>{item.feedback.slice(0,150)}...</p>
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

export default CustomerFeedback;
