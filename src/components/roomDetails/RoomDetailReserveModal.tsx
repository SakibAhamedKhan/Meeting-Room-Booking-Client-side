import {
  useBookingSlotsMutation,
  useGetAllAvailableSlotsMutation,
} from "@/redux/features/customer/customerRoomApi.api";
import { getAuthUser } from "@/utils/getAuthUser";
import {
  Button,
  DatePicker,
  DatePickerProps,
  Modal,
  Select,
  SelectProps,
} from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const RoomDetailReserveModal = ({ modalData, setModalData }: any) => {
  const [getAllAvailaleSlots, {}] = useGetAllAvailableSlotsMutation();
  const [bookingSlots, {}] = useBookingSlotsMutation();
  const [selectedSlots, setSelectedSlots] = useState<any>([]);
  const [options, setOptions] = useState<SelectProps["options"]>([]);
  const [sendData, setSendData] = useState<{
    date: any;
    slots: string[];
    room: string;
  }>({
    date: "",
    slots: [],
    room: "",
  });

  const user = getAuthUser() as any;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Hello ", user);
    if (user == null && modalData) {
      setModalData(null);
      navigate("/login");
    }
  }, [user, modalData]);

  console.log(modalData);
  const handleOk = () => {
    setModalData(null);
  };
  const handleCancel = () => {
    setModalData(null);
    // setOptions([]);
    // setSendData({ date: "", slots: [], room: "" });
  };
  const onChange: DatePickerProps["onChange"] = async (date, dateString) => {
    console.log({
      id: modalData._id,
      date: dateString,
    });
    if (dateString !== "") {
      const result = await getAllAvailaleSlots({
        id: modalData._id,
        date: dateString,
      }).unwrap();
      console.log(result);

      const option = result.data.map((item: any) => ({
        label: (
          <div className="font-semibold text-lg text-center">{`${item.startTime} - ${item.endTime}`}</div>
        ),
        value: item._id,
      }));
      setOptions(option);
      setSendData({
        ...sendData,
        date: dateString,
        room: modalData._id,
      });
    } else {
      setOptions([]);
    }
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
    setSendData({
      ...sendData,
      slots: value,
    });
    setSelectedSlots(value);
  };

  const handleReverse = async () => {
    console.log(sendData);
    const toastId = toast.loading("Reserving...");
    try {
      const res = await bookingSlots(sendData).unwrap();
      console.log(res);
      if (res.success) {
        toast.success("Reserved Successfully!", {
          id: toastId,
          duration: 2000,
        });
        setOptions([]);
        setSelectedSlots([]);
        setSendData({ date: "", slots: [], room: "" });
        setModalData(null);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.errorSources[0]?.message, { id: toastId, duration: 1000 });
    }
  };

  return (
    <Modal
      open={modalData !== null} // Show modal if modalData is not null
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      className="!w-full md:!w-[500px]"
    >
      {modalData && (
        <div className="">
          <div className="mx-auto p-4">
            <div className=" mx-auto bg-white rounded-lg space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 text-center">
                Reverse Section
              </h2>
              <hr />
              <div className="">
                <p className="text-xs md:text-lg">
                  <span className="font-semibold">Room Name:</span>{" "}
                  {modalData?.name}
                </p>
                <p className="text-xs md:text-lg">
                  <span className="font-semibold">Room Price Per Slot:</span> $
                  {modalData?.pricePerSlot}
                </p>
                <p className="text-xs md:text-lg">
                  <span className="font-semibold">Room Capacity:</span>{" "}
                  {modalData?.capacity}
                </p>
                <DatePicker
                  className="text-xs md:text-lg w-full mt-5"
                  size="large"
                  onChange={onChange}
                  format="YYYY-MM-DD"
                  disabledDate={disabledDate}
                />
                <Select
                  mode="multiple"
                  className="text-xs md:text-lg w-full mt-3"
                  size="large"
                  allowClear
                  disabled={options?.length===0}
                  placeholder="Slect Available Slots"
                  onChange={handleChange}
                  value={selectedSlots}
                  options={options}
                />
                <p className="text-xs md:text-lg mt-3 mb-1">
                  Total Price: $
                  {modalData?.pricePerSlot * sendData.slots.length}
                </p>
                <Button
                  className="bg-[#002F76] text-white w-full h-[40px] text-md md:text-lg font-semibold mb-2"
                  onClick={handleReverse}
                >
                  Reserve
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default RoomDetailReserveModal;
