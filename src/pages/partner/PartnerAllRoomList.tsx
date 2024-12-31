import AdminNewRequestedRoomModal from "@/components/admin/AdminNewRequestedRoomModal";
import { Card } from "@/components/ui/card";


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
import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { MdOutlineCancel } from "react-icons/md";
import {
  useGetAllMySLotQuery,
  useParnterGetAllRoomQuery,
  usePublishRoomMutation,
  useUnPublishRoomMutation,
} from "@/redux/features/partner/partnerRoomApi.api";
import { LuRefreshCw } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { LiaBullseyeSolid } from "react-icons/lia";
import PartnerAddSlotModal from "@/components/partner/PartnerAddSlotModal";
import PartnerViewSlotModal from "@/components/partner/PartnerViewSlotModal";

type TDataType = Pick<TRoomData, "name" | "capacity" | "pricePerSlot"> & {
  key: string;
  thumbnail: string;
  _id?: string;
  isApproved?: boolean;
  isBanned?: boolean;
  partnerPublish?: boolean;
  haveSlot: boolean;
};
const { confirm } = Modal;

const PartnerAllRoomList = () => {
  const [page, setPage] = useState(1);
  const [params] = useState<TQueryParam[]>([]);
  const {
    data: partnerGetAllRoomData,
    isFetching: partnerGetAllRoomDataFetching,
    refetch: partnerGetAllRoomDataRefetch,
  } = useParnterGetAllRoomQuery([
    { name: "limit", value: 10 },
    { name: "page", value: page },
    ...params,
  ],{
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true,
  });
  const [publishRoom, { isLoading: publishRoomLoading }] =
    usePublishRoomMutation();
  const [unPublishRoom, { isLoading: unPublishRoomLoading }] =
    useUnPublishRoomMutation();
  const [roomId, setRoomId] = useState<any>(undefined);
  const { data: getAllMySlot } =
    useGetAllMySLotQuery(roomId, {
      skip: roomId === undefined,
    });
  const [modalData, setModalData] = useState<any>(null);
  const [addSlotModalData, setAddSlotModalData] = useState<any>(null);
  const [slotModalData, setSlotModalData] = useState<any>(null);
  const [loadingRoomId, setLoadingRoomId] = useState<string | null>(null);

  useEffect(() => {
    if(getAllMySlot!==undefined && getAllMySlot!==null){
      setSlotModalData(getAllMySlot);
    }
  }, [getAllMySlot]);
  const showConfirmPublish = (record: any) => {
    confirm({
      title: "Do you want to publish these meeting room?",
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
        handlePublish(record);
      },
      onCancel() {
      },
    });
  };
  const showConfirmUnpublish = (record: any) => {
    confirm({
      title: "Do you want to Unpublish these meeting room?",
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
        handleUnPublish(record);
      },
      onCancel() {
      },
    });
  };
  const handleViewSlot = (record: any) => {
    setRoomId(record.key);
  };
  const columns: TableColumnsType<TDataType> = [
    {
      title: "Thumbnail",
      key: "thumbnail",
      dataIndex: "thumbnail",
      render: ( record) => {
        return (
          <Space>
            <Image width={90} src={record} />
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
      title: "Status",
      key: "Status",
      render: (_, record) => {
        return (
          <>
            {record?.isBanned ? (
              <>
                <Button
                  style={{
                    borderColor: "#FA8072",
                    backgroundColor: "#FF0000",
                    color: "white",
                  }}
                  className="font-semibold"
                >
                  Declined
                </Button>
              </>
            ) : (
              <>
                {record?.isApproved ? (
                  <Button
                    style={{ borderColor: "#40FF40", color: "#008000" }}
                    className="font-semibold bg-green-50"
                  >
                    Approved
                  </Button>
                ) : (
                  <Button
                    // style={{ borderColor: "#FA8072", backgroundColor: "#FF0000", color:'white' }}
                    style={{
                      borderColor: "#FFD700",
                      backgroundColor: "#FF4500",
                      color: "white",
                    }}
                    className="font-semibold"
                  >
                    Pending
                  </Button>
                )}
              </>
            )}
          </>
        );
      },
    },
    {
      title: "Slot",
      key: "slot",
      render: (_, record) => {
        return (
          <div>
            {!record?.isBanned && record?.isApproved ? (
              <>
                {record?.haveSlot ? (
                  <Button
                    style={{ borderColor: "gray", color: "black" }}
                    className="font-semibold bg-gray-100"
                    loading={
                      loadingRoomId === record.key && unPublishRoomLoading
                    }
                    onClick={() => {
                      handleViewSlot(record);
                    }}
                  >
                    {loadingRoomId === record.key && unPublishRoomLoading ? (
                      ""
                    ) : (
                      <LiaBullseyeSolid className="text-lg" />
                    )}
                    View Slot
                  </Button>
                ) : (
                  <Button
                    style={{ borderColor: "gray", color: "black" }}
                    className="font-semibold bg-gray-100"
                    loading={
                      loadingRoomId === record.key && unPublishRoomLoading
                    }
                    onClick={() => setAddSlotModalData(getAllData(record))}
                  >
                    {loadingRoomId === record.key && unPublishRoomLoading ? (
                      ""
                    ) : (
                      <FiPlus className="text-lg" />
                    )}
                    Add Slot
                  </Button>
                )}
              </>
            ) : (
              <p className="text-gray-300 cursor-not-allowed">Not Available</p>
            )}
          </div>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <div>
            {record?.isApproved ? (
              <>
                {record?.partnerPublish ? (
                  <Button
                    style={{ borderColor: "#FFD700", color: "#FF4500" }}
                    className="font-semibold bg-orange-50"
                    loading={
                      loadingRoomId === record.key && unPublishRoomLoading
                    }
                    onClick={() => showConfirmUnpublish(record)}
                  >
                    {loadingRoomId === record.key && unPublishRoomLoading ? (
                      ""
                    ) : (
                      <MdOutlineCancel />
                    )}
                    Unpublish
                  </Button>
                ) : (
                  <Button
                    style={{ borderColor: "#40FF40", color: "#008000" }}
                    className="font-semibold bg-green-50"
                    loading={loadingRoomId === record.key && publishRoomLoading}
                    onClick={() => showConfirmPublish(record)}
                  >
                    {loadingRoomId === record.key && publishRoomLoading ? (
                      ""
                    ) : (
                      <MdDone />
                    )}
                    Publish
                  </Button>
                )}
              </>
            ) : (
              <div className="">
                <p className="text-gray-300 cursor-not-allowed">
                  Not Available
                </p>
              </div>
            )}
          </div>
        );
      },
    },
    {
      title: "View",
      dataIndex: "pricePerSlot",
      key: "pricePerSlot",
      render: (_, record) => {
        return (
          <Button
            style={{
              borderColor: "#002f76",
              backgroundColor: "#002f76",
              color: "white",
            }}
            onClick={() => {
              setModalData(getAllData(record));
            }}
          >
            <FaRegEye className="text-[16px]" />
          </Button>
        );
      },
    },
  ];
  const tableData = partnerGetAllRoomData?.data.map(
    ({
      thumbnail,
      _id,
      name,
      capacity,
      pricePerSlot,
      isApproved,
      isBanned,
      partnerPublish,
      haveSlot,
    }: any) => ({
      key: _id,
      roomId: _id,
      thumbnail: thumbnail[0]?.url,
      name,
      capacity,
      pricePerSlot,
      isApproved,
      isBanned,
      partnerPublish,
      haveSlot,
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

  const getAllData = (item: any) => {
    const findedData = partnerGetAllRoomData?.data.find(
      (d: any) => d._id === item?.key
    );

    return findedData;
  };

  const handleOk = () => {
    setModalData(null); // Close the modal
  };

  const handleCancel = () => {
    setModalData(null); // Close the modal
  };

  const handlePublish = async (record: any) => {
    setLoadingRoomId(record.key);
    try {
     await publishRoom(record.key);
    } catch (error) {
      console.error("Error publshing room:", error);
    } finally {
      setLoadingRoomId(null);
    }
  };
  const handleUnPublish = async (record: any) => {
    setLoadingRoomId(record.key);
    try {
     await unPublishRoom(record.key);
    } catch (error) {
      console.error("Error unPublishing room:", error);
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
        onClick={() => partnerGetAllRoomDataRefetch()}
        className="absolute z-10 right-6 mt-[-37px] md:mt-[-45px]"
      >
        <LuRefreshCw />
      </Button>
      <Card className="overflow-x-scroll lg:overflow-hidden">
        <Table<TDataType>
          className="!z-0"
          columns={columns}
          loading={partnerGetAllRoomDataFetching}
          dataSource={tableData}
          rowClassName={rowClassName}
          pagination={false}
        />
        <Row justify="center" className="my-5">
          <Pagination
            pageSize={partnerGetAllRoomData?.meta?.limit}
            total={partnerGetAllRoomData?.meta?.total}
            onChange={(value) => setPage(value)}
          />
        </Row>
      </Card>
      <AdminNewRequestedRoomModal
        modalData={modalData}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <PartnerAddSlotModal
        addSlotModalData={addSlotModalData}
        setAddSlotModalData={setAddSlotModalData}
      />

      <PartnerViewSlotModal
        slotModalData={slotModalData}
        setSlotModalData={setSlotModalData}
      />
    </div>
  );
};

export default PartnerAllRoomList;
