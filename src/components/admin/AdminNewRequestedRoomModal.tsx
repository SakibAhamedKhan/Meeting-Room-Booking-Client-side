import { Modal } from "antd";
import TitleImage from "../roomDetails/TitleImage";
import { Card } from "../ui/card";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineBedroomParent } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdOutlinePriceChange } from "react-icons/md";
import AdminAmenitiesCard from "./AdminAmenitiesCard";

const AdminNewRequestedRoomModal = ({
  modalData,
  handleOk,
  handleCancel,
}: any) => {
  console.log(modalData);
  return (
    <Modal
      open={modalData !== null} // Show modal if modalData is not null
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      className="!w-full md:!w-5/6"
    >
      {modalData && (
        <div className="">
          <div className="mx-auto max-w-7xl md:px-6 lg:px-8 my-8 md:my-12">
            <div className="grid  lg:grid-cols-10 gap-6">
              {/* Title and image */}
              <div className="lg:col-span-6">
                <TitleImage roomData={modalData} />
              </div>

              {/* Review and Details */}
              <div className="lg:col-span-4">
                <Card className="mb-4">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex gap-2 items-center">
                        <div className="bg-green-800 rounded-full w-10 h-10 flex justify-center items-center text-2xl font-semibold text-white">
                          {modalData?.owner.name[0]}
                        </div>
                        <h3 className="text-lg font-semibold">
                          {modalData?.owner.name}
                        </h3>
                      </div>
                    </div>
                    <div className="font-semibold mb-4 flex items-center gap-2 text-lg">
                      <BsBuildings className="text-2xl" />
                      <p>Floor No: <span className="font-light text-xl">{modalData?.floorNo}</span></p>
                    </div>
                    <div className="font-semibold mb-4 flex items-center gap-2 text-lg">
                      <MdOutlineBedroomParent className="text-2xl" />
                      <p>Room No: <span className="font-light text-xl">{modalData?.roomNo}</span></p>
                    </div>
                    <div className="font-semibold mb-4 flex items-center gap-2 text-lg">
                      <IoIosPeople className="text-2xl" />
                      <p>Capacity: <span className="font-light text-xl">{modalData?.capacity}</span></p>
                    </div>
                    <div className="font-semibold flex items-center gap-2 text-lg">
                      <MdOutlinePriceChange className="text-2xl" />
                      <p>Price Per Slot: <span className="font-light text-xl">${modalData?.pricePerSlot}</span></p>
                    </div>
                  </div>
                </Card>
                <Card className="mb-4">
                  <div className="flex flex-wrap flex-row">
                    {modalData?.amenities.map((item: any, index: number) => (
                      <AdminAmenitiesCard amenities={item} key={index} />
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* description*/}
            <div className="">
              <p className="leading-8 text-justify text-sm md:text-lg">
                {modalData?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default AdminNewRequestedRoomModal;
