import { Button } from "antd";
import React, { useState } from "react";
import RoomDetailReserveModal from "./RoomDetailReserveModal";

const ReserveButton = ({ roomData }: any) => {
  const [modalData, setModalData] = useState<any>(null);
  return (
    <>
      <Button className="bg-[#002F76] text-white w-full h-[40px] text-md md:text-lg font-semibold mb-2"
      onClick={() => setModalData(roomData)}
      >
        Reserve
      </Button>
      <RoomDetailReserveModal modalData={modalData} setModalData={setModalData}/>
    </>
  );
};

export default ReserveButton;
