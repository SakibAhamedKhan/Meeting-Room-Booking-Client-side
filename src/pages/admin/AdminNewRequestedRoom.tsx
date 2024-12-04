import { Card } from "@/components/ui/card";
import { useAdminGetAllRoomQuery } from "@/redux/features/admin/adminRoomApi.api";
import { TRoomData } from "@/types/rooms.type";
import { Button, Image, Space, Table, TableColumnsType } from "antd";
import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import { MdDone } from "react-icons/md";

type TDataType = Pick<
  TRoomData,
  "name" | "capacity" | "pricePerSlot"
> & {
  key: string;
  thumbnail:string;
  _id?:string;
};

const columns: TableColumnsType<TDataType> = [
  {
    title: "Thumbnail",
    key: "thumbnail",
    dataIndex: "thumbnail",
    render: (text, record) => {
      return (
        <Space>
          <Image width={90} src={record?.thumbnail} />
        </Space>
      );
    },
  },
  {
    title: "Room Id",
    dataIndex: "roomId",
    key: "roomId",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Capacity",
    dataIndex: "capacity",
    key: "capacity",
  },
  {
    title: "Price Per Slot",
    dataIndex: "pricePerSlot",
    key: "pricePerSlot",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      console.log(record);
      return (
        <Space size="middle">
          <Button>
            <MdDone />
            Approve
          </Button>
          <Button>
            <FaRegEye />
          </Button>
        </Space>
      )
    },
  },
];

const AdminNewRequestedRoom = () => {
  const { data: adminGetAllRoomData, isFetching } =
    useAdminGetAllRoomQuery(undefined);

  const [allRoomData, setAllRoomData] = useState<TRoomData[]>([]);

  const tableData = allRoomData.map(
    ({ thumbnail, _id, name, capacity, pricePerSlot }) => ({
      key: _id, 
      roomId: _id, 
      thumbnail: thumbnail[0]?.url, 
      name,
      capacity,
      pricePerSlot,
    })
  );

  useEffect(() => {
    if (!isFetching && adminGetAllRoomData) {
      const result = adminGetAllRoomData.data.filter((item: TRoomData) => {
        return item.isApproved === false;
      });
      setAllRoomData(result);
    }
  }, [isFetching, adminGetAllRoomData]);


  const rowClassName = (record: TDataType, index: number) => {
    return 'table-custom-row'; 
  };


  return (
    <Card className="overflow-x-scroll lg:overflow-hidden">
      <Table<TDataType>
        className="!z-0"
        columns={columns}
        dataSource={tableData}
        rowClassName={rowClassName} 
      />
    </Card>
  );
};

export default AdminNewRequestedRoom;
