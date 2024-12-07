import AdminNewRequestedRoomModal from "@/components/admin/AdminNewRequestedRoomModal";
import { Card } from "@/components/ui/card";
import {
  useDeActivateRoomMutation,
} from "@/redux/features/admin/adminRoomApi.api";
import { TQueryParam } from "@/types";
import {
  Button,
  Modal,
  Pagination,
  Row,
  Select,
  Space,
  Table,
  TableColumnsType,
} from "antd";
import { useState } from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { LuRefreshCw } from "react-icons/lu";
import { TPartnerRequested } from "@/types/admin.partnerRequest.type";
import getTimeAgo from "@/utils/getTimeAgo";
import { useGetAllPartnersQuery } from "@/redux/features/admin/adminPartnerApi.api";

type TDataType = TPartnerRequested;
const { confirm } = Modal;

const actionOpitions = [
  { value: "Pending", label: "Pending" },
  { value: "Approved", label: "Approved" },
  { value: "Rejected", label: "Rejected" },
];

const AdminRequestedPartner = () => {
  const [page, setPage] = useState(1);
  const [params, setParams] = useState<TQueryParam[]>([]);
  const {
    data: adminGetAllPartnersData,
    isFetching: adminGetAllPartnersDataFetching,
    refetch: adminGetAllPartnersDataRefetch,
  } = useGetAllPartnersQuery([
    { name: "limit", value: 10 },
    { name: "page", value: page },
    { name: "isApproved", value: "Pending" },
    ...params,
  ]);
  const [deActivateRoom, { isLoading: deActivateRoomLoading }] =
    useDeActivateRoomMutation();
  // State to track modal visibility and selected feedback item
  const [modalData, setModalData] = useState<any>(null);
  // Track loading state for each room
  const [loadingRoomId, setLoadingRoomId] = useState<string | null>(null);

  console.log(adminGetAllPartnersData);
  const showConfirm = (record: any) => {
    confirm({
      title: "Do you want to unapprove these meeting room?",
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

  const handleActionChange = (data:string) => {

  }
  const columns: TableColumnsType<TDataType> = [
    {
      title: "Id",
      key: "id",
      render: (text, record) => {
        return (
          <Space>
            <p className="!text-xs">{record._id}</p>
          </Space>
        );
      },
    },
    {
      title: "Time",
      key: "time",
      render: (text, record) => {
        console.log(record);
        return (
          <Space>
            <p className="!text-xs">{getTimeAgo(record?.createdAt)}</p>
          </Space>
        );
      },
    },
    {
      title: "Partner Name",
      key: "partnerName",
      render: (text, record) => {
        return (
          <Space>
            <p className="!text-xs">{record.user.name}</p>
          </Space>
        );
      },
    },
    {
      title: "Business Name",
      key: "businessName",
      render: (text, record) => {
        return (
          <Space>
            <p className="!text-xs">{record.businessName}</p>
          </Space>
        );
      },
    },

    {
      title: "Business Address",
      key: "businessAddress",
      render: (text, record) => {
        return (
          <Space>
            <p className="!text-xs">{record.businessAddress}</p>
          </Space>
        );
      },
    },
    {
      title: "Status",
      key: "status",
      render: (text, record) => {
        return (
          <Space>
            {record?.isApproved === "Pending" && (
              <Button
                style={{ borderColor: "#FFD700", color: "#FF4500" }}
                className="font-semibold"
              >
                {record.isApproved}
              </Button>
            )}
          </Space>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <Space>
            {record?.isApproved === "Pending" && (
                <Select
                  options={actionOpitions}
                  placeholder="Select Action"
                  onChange={(value) => {
                    handleActionChange(value);
                  }}
                />
            )}
          </Space>
        );
      },
    },

    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => {
    //     return (
    //       <Space size="middle">
    //         <Button
    //           style={{ borderColor: "#FFD700", color: "#FF4500" }}
    //           className="font-semibold"
    //           loading={loadingRoomId === record.key && deActivateRoomLoading}
    //           onClick={() => showConfirm(record)}
    //         >
    //           {loadingRoomId === record.key && deActivateRoomLoading ? (
    //             ""
    //           ) : (
    //             <MdOutlineCancel />
    //           )}
    //           Unapprove
    //         </Button>
    //         <Button
    //           style={{
    //             borderColor: "#002f76",
    //             backgroundColor: "#002f76",
    //             color: "white",
    //           }}
    //           onClick={() => showModal(record)}
    //         >
    //           <FaRegEye className="text-[16px]" />
    //         </Button>
    //       </Space>
    //     );
    //   },
    // },
  ];
  let tableData = [];
  if (!adminGetAllPartnersDataFetching) {
    tableData = [...adminGetAllPartnersData?.data].reverse();
  }
  console.log(tableData);
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
    const findedData = adminGetAllPartnersData?.data.find(
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
      const res = await deActivateRoom(record.key);
      console.log(res);
    } catch (error) {
      console.error("Error approving room:", error);
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
        onClick={() => adminGetAllPartnersDataRefetch()}
        className="absolute z-10 right-6 mt-[-37px] md:mt-[-45px]"
      >
        <LuRefreshCw />
      </Button>
      <Card className="overflow-x-scroll lg:overflow-hidden">
        <Table<TDataType>
          className="!z-0"
          columns={columns}
          loading={adminGetAllPartnersDataFetching}
          dataSource={tableData}
          rowClassName={rowClassName}
          pagination={false}
        />
        <Row justify="center" className="my-5">
          <Pagination
            pageSize={adminGetAllPartnersData?.meta?.limit}
            total={adminGetAllPartnersData?.meta?.total}
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

export default AdminRequestedPartner;
