import { Modal, TimePicker } from "antd";

const PartnerAddSlotModal = ({
  addSlotModalData,
  setAddSlotModalData,
}: any) => {
  const handleOk = () => {
    console.log(addSlotModalData);
    setAddSlotModalData(null);
  };
  const handleCancel = () => {
    console.log(addSlotModalData);
    setAddSlotModalData(null);
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
              <TimePicker.RangePicker />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default PartnerAddSlotModal;
