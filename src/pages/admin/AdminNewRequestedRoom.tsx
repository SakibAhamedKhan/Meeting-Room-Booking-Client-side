import AdminNewRequestedRoomModal from "@/components/admin/AdminNewRequestedRoomModal";
import { Card } from "@/components/ui/card";
import {
  useActivateRoomMutation,
  useAdminGetAllRoomQuery,
  useDeclinedRoomMutation,
} from "@/redux/features/admin/adminRoomApi.api";
import { TQueryParam } from "@/types";
import { TRoomData } from "@/types/rooms.type";
import {
  Button,
  Image,
  Modal,
  Pagination,
  Row,
  Space,
  Table,
  TableColumnsType,
} from "antd";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { MdOutlineCancel } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";

type TDataType = Pick<TRoomData, "name" | "capacity" | "pricePerSlot"> & {
  key: string;
  thumbnail: string;
  _id?: string;
};
const { confirm } = Modal;

const AdminNewRequestedRoom = () => {
  const [page, setPage] = useState(1);
  const [params] = useState<TQueryParam[]>([]);
  const { data: adminGetAllRoomData, isFetching: adminGetAllRoomDataFetching, refetch: adminGetAllRoomDataRefetch } =
    useAdminGetAllRoomQuery([
      { name: "limit", value: 5 },
      { name: "page", value: page },
      ...params,
    ]);
  const [activateRoom, { isLoading: activateRoomLoading }] =
    useActivateRoomMutation();
  const [declinedRoom, { isLoading: declinedRoomLoading }] =
    useDeclinedRoomMutation();

  // State to track modal visibility and selected feedback item
  const [modalData, setModalData] = useState<any>(null);
  // Track loading state for each room
  const [loadingRoomId, setLoadingRoomId] = useState<string | null>(null);

  // const [allRoomData, setAllRoomData] = useState<TRoomData[]>([]);
  const showConfirm = (record: any) => {
    confirm({
      title: "Do you want to approve these meeting room?",
      icon: <ExclamationCircleFilled />,
      content: (
        <div>
          <p>
            Room Id: <span>{record.key}</span>
          </p>
          <p>
            Room Name: <span>{record.name}</span>
          </p>
          <p>
            Capacity: <span>{record.capacity}</span>
          </p>
          <p>
            Price Per Slot: <span>{record.pricePerSlot}</span>
          </p>
        </div>
      ),
      onOk() {
        handleApprove(record);
        console.log("OK ==== ", record);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const showConfirm2 = (record: any) => {
    confirm({
      title: "Do you want to decline these meeting room?",
      icon: <ExclamationCircleFilled />,
      content: (
        <div>
          <p>
            Room Id: <span>{record.key}</span>
          </p>
          <p>
            Room Name: <span>{record.name}</span>
          </p>
          <p>
            Capacity: <span>{record.capacity}</span>
          </p>
          <p>
            Price Per Slot: <span>{record.pricePerSlot}</span>
          </p>
        </div>
      ),
      onOk() {
        handleDecline(record);
        console.log("OK Declined ==== ", record);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const columns: TableColumnsType<TDataType> = [
    {
      title: "Thumbnail",
      key: "thumbnail",
      dataIndex: "thumbnail",
      render: (record) => {
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
        return (
          <Space size="middle">
            <Button
              style={{ borderColor: "#40FF40", color: "#008000" }}
              className="font-semibold bg-green-50"
              variant="outlined"
              loading={loadingRoomId === record.key && activateRoomLoading}
              onClick={() => showConfirm(record)}
            >
              {loadingRoomId === record.key && activateRoomLoading ? (
                ""
              ) : (
                <MdDone />
              )}
              Approve
            </Button>
            <Button
              style={{ borderColor: "#FA8072", color: "#FF0000" }}
              className="font-semibold bg-red-50"
              loading={loadingRoomId === record.key && declinedRoomLoading}
              onClick={() => showConfirm2(record)}
            >
              {loadingRoomId === record.key && declinedRoomLoading ? (
                ""
              ) : (
                <MdOutlineCancel />
              )}
              Declined
            </Button>
            <Button
              style={{
                borderColor: "#002f76",
                backgroundColor: "#002f76",
                color: "white",
              }}
              className="px-2"
              onClick={() => showModal(record)}
            >
              <FaRegEye className="text-[16px]" />
            </Button>
          </Space>
        );
      },
    },
  ];
  const tableData = adminGetAllRoomData?.data.map(
    ({ thumbnail, _id, name, capacity, pricePerSlot }: any) => ({
      key: _id,
      roomId: _id,
      thumbnail: thumbnail[0]?.url,
      name,
      capacity,
      pricePerSlot,
    })
  );

  // useEffect(() => {
  //   if (!isFetching && adminGetAllRoomData) {
  //     const result = adminGetAllRoomData.data.filter((item: TRoomData) => {
  //       return item.isApproved === false;
  //     });
  //     setAllRoomData(result);
  //   }
  // }, [isFetching, adminGetAllRoomData]);

  const rowClassName = () => {
    return "table-custom-row";
  };

  const showModal = (item: any) => {
    console.log(item);
    const findedData = adminGetAllRoomData?.data.find(
      (d: any) => d._id === item?.key
    );
    setModalData(findedData); // Store the item whose details should be shown in the modal
  };

  const handleOk = () => {
    setModalData(null); // Close the modal
  };

  const handleCancel = () => {
    setModalData(null); // Close the modal
  };

  const handleApprove = async (record: any) => {
    setLoadingRoomId(record.key);
    try {
      const res = await activateRoom(record.key);
      console.log(res);
    } catch (error) {
      console.error("Error approving room:", error);
    } finally {
      setLoadingRoomId(null);
    }
  };

  const handleDecline = async (record: any) => {
    setLoadingRoomId(record.key);
    try {
      const res = await declinedRoom(record.key);
      console.log(res);
    } catch (error) {
      console.error("Error decling room:", error);
    } finally {
      setLoadingRoomId(null);
    }
  };

  // const onChange: TableProps<TDataType>["onChange"] = (
  //   pagination,
  //   filters,
  //   sorter,
  //   extra
  // ) => {
  //   console.log("params", { pagination, filters, sorter, extra });
  //   if (extra.action === "filter") {
  //     const queryParams: TQueryParam[] = [];
  //     filters.name?.forEach((item) => {
  //       queryParams.push({ name: "name", value: item });
  //     });
  //     setParams(queryParams);
  //   }
  // };

  return (
    <div>
      <Button
        onClick={() => adminGetAllRoomDataRefetch()}
        className="absolute z-10 right-6 mt-[-37px] md:mt-[-45px]"
      >
        <LuRefreshCw />
      </Button>
      <Card className="overflow-x-scroll lg:overflow-hidden">
        <Table<TDataType>
          className="!z-0 "
          columns={columns}
          loading={adminGetAllRoomDataFetching}
          dataSource={tableData}
          rowClassName={rowClassName}
          pagination={false}
        />
        <Row justify="center" className="my-5">
          <Pagination
            pageSize={adminGetAllRoomData?.meta?.limit}
            total={adminGetAllRoomData?.meta?.total}
            onChange={(value) => setPage(value)}
          />
        </Row>
      </Card>
      <AdminNewRequestedRoomModal
        modalData={modalData}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default AdminNewRequestedRoom;
