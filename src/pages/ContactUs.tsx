import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import CForm from "@/components/form/CForm";
import { FieldValues } from "react-hook-form";
import CInput from "@/components/form/CInput";
import { Link } from "react-router-dom";
import { Button } from "antd";
import CTextArea from "@/components/form/CTextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormZodSchema } from "@/schemas/commonForm.schemas";

const containerStyle = {
  width: "100%",
  height: "350px",
};

const center = { lat: -28.643387, lng: 153.612224 };

const ContactUs = () => {
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-16">
        <div>
          <h1 className="text-center text-2xl md:text-4xl text-[#002F76] font-semibold mb-2">
            Contact us
          </h1>
          <p className="text-center font-light text-md md:text-xl md:w-[600px] lg:w-[700px] mx-auto">
            Get a free consultation with a marketing expert to discover
            opportunities for you type of products or services.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-16 gap-4 lg:gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-[#002F76]">Send us a message</h2>
            <p className="text-md md:text-xl font-light">
              Fill up the form below, and we will get in touch very soon! Your
              attention is very important to us and we are constantly in touch.
            </p>

            <div className="mt-6">
              <CForm onSubmit={onSubmit} resolver={zodResolver(contactFormZodSchema)}>
                <div className="flex">
                  <div className="mb-4 mr-4 w-full">
                    <CInput type="text" name="name" placeholder="Name" />
                  </div>
                  <div className="mb-4 w-full">
                    <CInput type="text" name="email" placeholder="Email" />
                  </div>
                </div>
                <div className="mb-4">
                  <CInput type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="mb-6">
                  <CTextArea
                    name="message"
                    placeholder="Your Message"
                  />
                </div>
                <div className="">
                  <Button
                    htmlType="submit"
                    className="bg-[#002F76] text-white w-full h-[40px] text-md md:text-lg font-semibold mb-2"
                  >
                    Send message
                  </Button>
                </div>
              </CForm>
            </div>
          </div>
          <div>
            <LoadScript
              googleMapsApiKey={`${import.meta.env.VITE_GOOGLE_API_KEY}`}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
