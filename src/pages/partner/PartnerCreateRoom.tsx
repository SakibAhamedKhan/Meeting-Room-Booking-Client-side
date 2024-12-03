import CForm from "@/components/form/CForm";
import CImageField from "@/components/form/CImageField";
import CInput from "@/components/form/CInput";
import CSelectAmenities from "@/components/form/CSelectAmenities";
import CTextArea from "@/components/form/CTextArea";
import { Card } from "@/components/ui/card";
import { useRequestedToCreateRoomMutation } from "@/redux/features/partner/partnerRoomApi.api";
import { registerZodSchema } from "@/schemas/auth.schemas";
import { requestToCreateRoomPartner } from "@/schemas/partner.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Input } from "antd";
import React from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const PartnerCreateRoom = () => {
  const { control } = useForm();
  const [requestedToCreateRoom, {}] = useRequestedToCreateRoomMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Requesting...");
    if (data.extraImages === undefined || data.thumbnail === undefined) {
      toast.error("You must choose the thumbnail and extra images!!!", {
        id: toastId,
        duration: 5000,
      });
    } else {
      try {
        data.roomNo = Number(data.roomNo);
        data.floorNo = Number(data.floorNo);
        data.capacity = Number(data.capacity);
        data.pricePerSlot = Number(data.pricePerSlot);

        const roomData = {
          name: data.name,
          roomNo: data.roomNo,
          floorNo: data.floorNo,
          capacity: data.capacity,
          pricePerSlot: data.pricePerSlot,
          address: data.address,
          googleMapURL: data.googleMapURL,
          amenities: data.amenities,
          description: data.description,
        };

        const formData = new FormData();
        formData.append("data", JSON.stringify(roomData));
        data?.extraImages.forEach((imageFile: any) => {
          formData.append(`extraImages`, imageFile.originFileObj); // imageFile is the File object
        });

        formData.append("thumbnail", data.thumbnail[0].originFileObj);

        const res = await requestedToCreateRoom(formData);
        console.log(res);
        toast.success("Successfully submitted the room create request.", {
          id: toastId,
          duration: 2000,
        });
      } catch (error: any) {
        console.log(error);
        toast.error(error?.data?.message, { id: toastId, duration: 2000 });
      }
    }
  };

  return (
    <Card className="bg-white p-6">
      <div>
        <CForm
          onSubmit={onSubmit}
          resolver={zodResolver(requestToCreateRoomPartner)}
        >
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
                type="number"
                name="roomNo"
                placeholder="Room No."
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-4 mr-4 w-full">
              <CInput
                control={control}
                type="number"
                name="floorNo"
                placeholder="Floor No."
              />
            </div>
            <div className="mb-4 w-full">
              <CInput
                control={control}
                type="number"
                name="capacity"
                placeholder="Capacity"
              />
            </div>
          </div>

          <div className="flex">
            <div className="mb-4 mr-4 w-full">
              <CInput
                control={control}
                type="number"
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
