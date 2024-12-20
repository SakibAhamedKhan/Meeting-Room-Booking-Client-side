import { Modal } from "antd";

const PartnerViewSlotModal = ({ slotModalData, setSlotModalData }: any) => {
  console.log(slotModalData);
  const handleOk = () => {
    setSlotModalData(null);
  };
  const handleCancel = () => {
    setSlotModalData(null);
  };

  return (
    <Modal
      open={slotModalData !== null} // Show modal if modalData is not null
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      className="!w-full md:!w-fit"
    >
      {slotModalData && (
        <div className="">
          <div className="mx-auto p-4">
            <div className=" mx-auto bg-white rounded-lg space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">All Slots</h2>
              {slotModalData?.data?.map((item:any) => {
                console.log(item);
                return (
                  <div className="bg-green-200 px-2 py-1 rounded-md">
                    <p>Start Time: {item?.startTime}, End Time: {item?.endTime}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default PartnerViewSlotModal;
