import AdminNewRequestedRoomModal from "@/components/admin/AdminNewRequestedRoomModal";
import { Card } from "@/components/ui/card";
import {
  useActivateRoomMutation,
  useAdminGetAllApprovedRoomQuery,
  useAdminGetAllRoomQuery,
  useDeActivateRoomMutation,
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
import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { MdOutlineCancel } from "react-icons/md";
import { useParnterGetAllRoomQuery, usePublishRoomMutation, useUnPublishRoomMutation } from "@/redux/features/partner/partnerRoomApi.api";

type TDataType = Pick<TRoomData, "name" | "capacity" | "pricePerSlot"> & {
  key: string;
  thumbnail: string;
  _id?: string;
  isApproved?: boolean;
  isBanned?: boolean;
  partnerPublish?: boolean;
};
const { confirm } = Modal;

const PartnerAllRoomList = () => {
  const [page, setPage] = useState(1);
  const [params, setParams] = useState<TQueryParam[]>([]);
  const {
    data: partnerGetAllRoomData,
    isFetching: partnerGetAllRoomDataFetching,
  } = useParnterGetAllRoomQuery([
    { name: "limit", value: 10 },
    { name: "page", value: page },
    ...params,
  ]);
  const [publishRoom, { isLoading: publishRoomLoading }] =
  usePublishRoomMutation();
  const [unPublishRoom, { isLoading: unPublishRoomLoading }] =
  useUnPublishRoomMutation();
  // State to track modal visibility and selected feedback item
  const [modalData, setModalData] = useState<any>(null);
  // Track loading state for each room
  const [loadingRoomId, setLoadingRoomId] = useState<string | null>(null);

  // const [allRoomData, setAllRoomData] = useState<TRoomData[]>([]);
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
        console.log("OK ==== ", record);
      },
      onCancel() {
        console.log("Cancel");
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
        console.log("OK ==== ", record);
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
                    style={{
                      borderColor: "#40FF40",
                      backgroundColor: "#008000",
                      color: "white",
                    }}
                    className="font-semibold"
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
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Space size="middle">
            {record?.isApproved ? (
              <>
                {record?.partnerPublish ? (
                  <Button
                    style={{ borderColor: "#FFD700", color: "#FF4500" }}
                    className="font-semibold"
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
                    className="font-semibold"
                    loading={
                      loadingRoomId === record.key && publishRoomLoading
                    }
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
              <></>
            )}
            <Button
              style={{
                borderColor: "#002f76",
                backgroundColor: "#002f76",
                color: "white",
              }}
              onClick={() => showModal(record)}
            >
              <FaRegEye className="text-[16px]" />
            </Button>
          </Space>
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

  const rowClassName = (record: TDataType, index: number) => {
    return "table-custom-row";
  };

  const showModal = (item: any) => {
    console.log(item);
    const findedData = partnerGetAllRoomData?.data.find(
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

  const handlePublish = async (record: any) => {
    setLoadingRoomId(record.key);
    try {
      const res = await publishRoom(record.key);
      console.log(res);
    } catch (error) {
      console.error("Error publshing room:", error);
    } finally {
      setLoadingRoomId(null);
    }
  };
  const handleUnPublish = async (record: any) => {
    setLoadingRoomId(record.key);
    try {
      const res = await unPublishRoom(record.key);
      console.log(res);
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
    </div>
  );
};

export default PartnerAllRoomList;
