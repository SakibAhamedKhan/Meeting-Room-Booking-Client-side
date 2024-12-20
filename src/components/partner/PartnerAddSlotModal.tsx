import { Button, Modal } from "antd";
import CForm from "../form/CForm";
import CTimePickerRangePicker from "../form/CTimePickerRangePicker";
import { FieldValues } from "react-hook-form";
import { useState } from "react";
import { useAddSlotMutation } from "@/redux/features/partner/partnerRoomApi.api";
import { toast } from "sonner";

const PartnerAddSlotModal = ({
  addSlotModalData,
  setAddSlotModalData,
}: any) => {
  const [timeFieldError, setTimeFiedlError] = useState({
    check: false,
    message: "",
  });
  const [addSlot] = useAddSlotMutation();
  const handleOk = () => {
    console.log(addSlotModalData);
    setTimeFiedlError({
      check: false,
      message: "",
    });
    setAddSlotModalData(null);
  };
  const handleCancel = () => {
    console.log(addSlotModalData);
    setTimeFiedlError({
      check: false,
      message: "",
    });
    setAddSlotModalData(null);
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data?.time[0]);
    console.log(data?.time[1]);
    if (data?.time === undefined) {
      setTimeFiedlError({
        check: true,
        message: "Start and End time must be fill up!",
      });
    } else {
      const date1 = new Date(data?.time[0]);
      const date2 = new Date(data?.time[1]);

      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      } as any;

      const formattedTime1 = date1.toLocaleTimeString("en-US", options);
      const formattedTime2 = date2.toLocaleTimeString("en-US", options);

      console.log(formattedTime1);
      console.log(formattedTime2);

      if (formattedTime1 === formattedTime2) {
        setTimeFiedlError({
          check: true,
          message: "Start and End time are same!!",
        });
      } else {
        const toastId = toast.loading("Adding...");
        const sendData = {
          room: addSlotModalData?._id,
          startTime: formattedTime1,
          endTime: formattedTime2,
        };
        setTimeFiedlError({
          check: false,
          message: "",
        });
        try {
          await addSlot(sendData).unwrap();
          toast.success("Added the Slot Successfully", {
            id: toastId,
            duration: 2000,
          });
          setAddSlotModalData(null);
        } catch (error: any) {
          console.log(error);
          toast.error(error?.data?.message, { id: toastId, duration: 1000 });
        }
      }
    }
  };
  return (
    <Modal
      open={addSlotModalData !== null} // Show modal if modalData is not null
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      className="!w-full md:!w-fit"
    >
      {addSlotModalData && (
        <div className="">
          <div className="mx-auto p-6">
            <div className=" mx-auto bg-white rounded-lg space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Add Slot</h2>
              <p>Name: {addSlotModalData?.name}</p>
              <p>Capacity: {addSlotModalData?.capacity}</p>
              <p>Price Per Slot: ${addSlotModalData?.pricePerSlot}</p>
              <p>Room Id: {addSlotModalData?._id}</p>
              <CForm onSubmit={onSubmit}>
                <div className="mb-4">
                  <CTimePickerRangePicker name="time" />
                  {timeFieldError?.check && (
                    <small
                      style={{ color: "red" }}
                      className="text-[10px] md:text-sm "
                    >
                      {timeFieldError?.message}
                    </small>
                  )}
                </div>

                <Button
                  htmlType="submit"
                  style={{ borderColor: "gray", color: "black" }}
                  className="bg-gray-100  w-full h-[40px] text-md md:text-lg font-semibold mb-2"
                >
                  Add Slot
                </Button>
              </CForm>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default PartnerAddSlotModal;
