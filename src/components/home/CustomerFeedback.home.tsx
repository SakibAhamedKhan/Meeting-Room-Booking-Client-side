import  { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { feedbackData } from "@/assets/demoResources";
import { Modal } from "antd";

const modalStyles = {};

const CustomerFeedback = () => {
  // State to track modal visibility and selected feedback item
  const [modalData, setModalData] = useState<any>(null);

  const showModal = (item:any) => {
    setModalData(item); // Store the item whose details should be shown in the modal
  };

  const handleOk = () => {
    setModalData(null); // Close the modal
  };

  const handleCancel = () => {
    setModalData(null); // Close the modal
  };

  return (
    <div>
      <h4 className="text-md md:text-lg lg:text-xl font-medium text-center mb-1 md:mb-2 tracking-widest">
        OUR CUSTOMERS REVIEWS
      </h4>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-2 md:mb-8">
        Good job, excellent rating
      </h1>

      <div className="lg:max-w-7xl my-4">
        <Carousel opts={{ align: "start" }} className="">
          <CarouselContent>
            {feedbackData.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 cursor-pointer"
                onClick={() => showModal(item)}
              >
                <div className="p-1">
                  <Card className="rounded-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <img
                          className="rounded-full w-16 h-16 mr-6"
                          src={`${item.user.image}`}
                          alt=""
                        />
                        <div>
                          <h3 className="text-xl font-semibold">
                            {item.user.name}
                          </h3>
                          <p>{item.role}</p>
                        </div>
                      </div>
                      <div>
                        <p>{item.feedback.slice(0, 150)}...</p>
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

      {/* Modal to display feedback details */}
      <Modal
        open={modalData !== null} // Show modal if modalData is not null
        onOk={handleOk}
        onCancel={handleCancel}
        styles={modalStyles}
        footer={null}
      >
        {modalData && (
          <div>
            <div className="flex items-center mb-4">
              <img
                className="rounded-full w-16 h-16 mr-6"
                src={`${modalData.user.image}`}
                alt=""
              />
              <div>
                <h3 className="text-xl font-semibold">{modalData.user.name}</h3>
                <p>{modalData.role}</p>
              </div>
            </div>
            <div>
              <p className="text-justify">{modalData.feedback}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CustomerFeedback;
