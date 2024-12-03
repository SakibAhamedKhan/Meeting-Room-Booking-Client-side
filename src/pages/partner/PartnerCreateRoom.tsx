import CForm from "@/components/form/CForm";
import CImageField from "@/components/form/CImageField";
import CInput from "@/components/form/CInput";
import CSelectAmenities from "@/components/form/CSelectAmenities";
import CTextArea from "@/components/form/CTextArea";
import { Card } from "@/components/ui/card";
import { registerZodSchema } from "@/schemas/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const PartnerCreateRoom = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging in");
  };

  return (
    <Card className="bg-white p-6">
      <div>
        <CForm onSubmit={onSubmit} resolver={zodResolver(registerZodSchema)}>
          <div className="flex">
            <div className="mb-4 mr-4 w-full">
              <CInput
                control={control}
                type="text"
                name="name"
                placeholder="Meeting Room Name"
              />
            </div>
            <div className="mb-4 w-full">
              <CInput
                control={control}
                type="text"
                name="roomNo"
                placeholder="Room No."
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-4 mr-4 w-full">
              <CInput
                control={control}
                type="text"
                name="floorNo"
                placeholder="Floor No."
              />
            </div>
            <div className="mb-4 w-full">
              <CInput
                control={control}
                type="text"
                name="capacity"
                placeholder="Capacity"
              />
            </div>
          </div>

          <div className="flex">
            <div className="mb-4 mr-4 w-full">
              <CInput
                control={control}
                type="text"
                name="pricePerSlot"
                placeholder="Price Per Slot"
              />
            </div>
            <div className="mb-4 w-full">
              <CInput
                control={control}
                type="text"
                name="googleMapURL"
                placeholder="Google Map URL"
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-4 mr-4 w-full">
              <CSelectAmenities
                name="amenities"
                placeholder="Choose amenities"
                control={control} // Pass control here
              />
            </div>
            <div className="mb-4 w-full">
              <CInput
                control={control}
                type="text"
                name="address"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-4 mr-4 w-1/2">
              <CImageField
                name="thumbnail"
                placeholder="Thumbnail"
                control={control} // Pass control here
                maxImage={1}
              />
            </div>
            <div className="mb-4 w-1/2">
              <CImageField
                name="extraImages"
                placeholder="Extra Images"
                control={control} // Pass control here
                maxImage={10}
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-6 w-full">
              <CTextArea
                control={control}
                type="text"
                name="description"
                placeholder="Description"
              />
            </div>
          </div>

          <div>
            <Button
              htmlType="submit"
              className="bg-[#002F76] text-white h-[40px] text-md md:text-lg font-semibold mb-2"
            >
              Request to add your meeting room
            </Button>
          </div>
        </CForm>
      </div>
    </Card>
  );
};

export default PartnerCreateRoom;
