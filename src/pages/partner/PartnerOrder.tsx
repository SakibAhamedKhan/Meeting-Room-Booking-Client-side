import { Card } from "@/components/ui/card";
import { TQueryParam } from "@/types";
import {
  Button,
  Modal,
  Pagination,
  Row,
  Space,
  Table,
  TableColumnsType,
} from "antd";
import { useState } from "react";
import { LuRefreshCw } from "react-icons/lu";
import {
  useGetCustomerAllBookingQuery,
  useGiveCustomerBookingCancelMutation,
  useGiveCustomerBookingPaidMutation,
} from "@/redux/features/customer/customerRoomApi.api";
import { useNavigate } from "react-router-dom";
import { BsQuestionCircle } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { MdDone } from "react-icons/md";
import { useGetAllPartnerBookingQuery, useGivePartnerBookingEeventCompleteMutation } from "@/redux/features/partner/partnerRoomApi.api";

const { confirm } = Modal;

const PartnerOrder = () => {
  const [page, setPage] = useState(1);
  const [params] = useState<TQueryParam[]>([]);
  const {
    data: partnerGetAllBookingData,
    isFetching: partnerGetAllBookingDataFetching,
    refetch: partnerGetAllBookingDataRefetch,
  } = useGetAllPartnerBookingQuery(
    [{ name: "limit", value: 10 }, { name: "page", value: page }, ...params],
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );

  const [givePartnerBookingEeventComplete] = useGivePartnerBookingEeventCompleteMutation();

  const navigate = useNavigate();

  console.log(partnerGetAllBookingData);

  const showConfirm = async (record: any) => {
    confirm({
      title: "Do you want to complete this event?",
      icon: <ExclamationCircleFilled />,
      content: (
        <div>
          <p>
            Booking Id: <span>{record?._id}</span>
          </p>
          <p>
            Room Name: <span>{record?.room?.name}</span>
          </p>
          <p>
            Capacity: <span>{record?.room?.capacity}</span>
          </p>
          <p>
            Price Per Slot: <span>{record?.room?.pricePerSlot}</span>
          </p>
          <p>
            Total Slot Booked: <span>{record?.slots.length}</span>
          </p>
          <hr className="my-3" />
          <p className="font-semibold text-lg ">
            Total Revenue: <span>${record?.totalAmount}</span>
          </p>
        </div>
      ),
      onOk() {
        console.log("OK ==== ", record);
        handleComplete(record);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const handleComplete = async (record: any) => {
    try {
      await givePartnerBookingEeventComplete(record?._id);
    } catch (error) {
      console.log(error);
    }
  };
  // const showConfirm2 = (record: any) => {
  //   confirm({
  //     title: "Do you want to cancel booking?",
  //     icon: <ExclamationCircleFilled />,
  //     content: (
  //       <div>
  //         <p>
  //           Booking Id: <span>{record?._id}</span>
  //         </p>
  //         <p>
  //           Room Name: <span>{record?.room?.name}</span>
  //         </p>
  //         <p>
  //           Capacity: <span>{record?.room?.capacity}</span>
  //         </p>
  //         <p>
  //           Price Per Slot: <span>{record?.room?.pricePerSlot}</span>
  //         </p>
  //         <p>
  //           Total Slot Booked: <span>{record?.slots.length}</span>
  //         </p>
  //       </div>
  //     ),
  //     onOk() {
  //       // handleApprove(record);
  //       console.log("OK ==== ", record);
  //       handleCancel(record);
  //     },
  //     onCancel() {
  //       console.log("Cancel");
  //     },
  //   });
  // };

  // const handleCancel = async (record: any) => {
  //   try {
  //     await giveCustomerBookingCancel(record?._id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const columns: TableColumnsType<any> = [
    {
      title: "",
      key: "completed",
      render: (record) => {
        return (
          <div className="me-[-15px]">
            {record?.isCompleted ? (
              <div>
                <BsCheckCircle className="text-green-500 text-xl" />
              </div>
            ) : (
              <div>
                <BsQuestionCircle className="text-orange-500 text-xl" />
              </div>
            )}
          </div>
        );
      },
    },
    {
      title: "Booking At",
      key: "Booking At",
      render: (record) => {
        return (
          <Space className="">
            <p className="!text-xs">
              {record?.createdAt &&
                new Date(record?.createdAt).toLocaleString("en-US", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
            </p>
          </Space>
        );
      },
    },
    {
      title: "Booking Id",
      key: "id",
      render: (record) => {
        return (
          <Space>
            <p className="!text-xs">{record?._id}</p>
          </Space>
        );
      },
    },
    {
      title: "Event Date",
      key: "Event Date",
      render: (record) => {
        return (
          <Space>
            <p className="!text-xs">
              {record?.date &&
                new Date(record?.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
            </p>
          </Space>
        );
      },
    },
    {
      title: "Room",
      key: "room",
      render: (record) => {
        return (
          <Space>
            <p
              className="!text-xs text-blue-800 cursor-pointer"
              onClick={() => navigate(`/room/${record?.room?._id}`)}
            >
              {record?.room?.name}
            </p>
          </Space>
        );
      },
    },
    {
      title: "Slots",
      key: "slots",
      render: (record) => {
        return (
          <Space className="flex flex-wrap w-[250px]">
            {record?.slots?.map((slot: any) => {
              return (
                <div className="bg-green-50 text-green-700 font-semibold border border-green-400 hover:bg-green-200 cursor-pointer p-1 rounded-md shadow-md text-[12px]">
                  {slot?.startTime}-{slot?.endTime}
                </div>
              );
            })}
          </Space>
        );
      },
    },
    {
      title: "Total Cost",
      key: "total cost",
      render: (record) => {
        return (
          <Space>
            <p className="!text-md">${record?.totalAmount}</p>
          </Space>
        );
      },
    },
    {
      title: "Payment Status",
      key: "Payment Status",
      render: (record) => {
        return (
          <Space>
            {record?.isConfirmed === "unconfirmed" && (
              <Button
                style={{ borderColor: "#40FF40", color: "#008000" }}
                className="font-semibold bg-red-50 text-red-800"
                variant="outlined"
              >
                Not Paid
              </Button>
            )}
            {record?.isConfirmed === "confirmed" && (
              <Button
                style={{ borderColor: "#40FF40", color: "#008000" }}
                className="font-semibold bg-green-50"
                variant="outlined"
              >
                <MdDone />
                Paid
              </Button>
            )}
          </Space>
        );
      },
    },
    {
      title: "Complete Action",
      key: "Payment Status",
      render: (record) => {
        return (
          <Space className="">
            {record?.isConfirmed === "confirmed" && record?.isCompleted===false ? (
              <Button
                style={{ borderColor: "#FA8072"}}
                className="font-semibold bg-blue-50 text-blue-600"
                onClick={() => showConfirm(record)}
              >
                Make Complete
              </Button>
            ) : (
              <div className="text-gray-500 cursor-not-allowed">
                Not Available
              </div>
            )}
          </Space>
        );
      },
    },
  ];
  let tableData = [];
  if (!partnerGetAllBookingDataFetching) {
    tableData = [...partnerGetAllBookingData?.data.result].reverse();
  }
  console.log(tableData);

  const rowClassName = () => {
    return "table-custom-row";
  };

  return (
    <div>
      <Button
        onClick={() => partnerGetAllBookingDataRefetch()}
        className="absolute z-10 right-6 mt-[-37px] md:mt-[-45px]"
      >
        <LuRefreshCw />
      </Button>
      <Card className="overflow-x-scroll lg:overflow-hidden">
        <Table<any>
          className="!z-0"
          columns={columns}
          loading={partnerGetAllBookingDataFetching}
          dataSource={tableData}
          rowClassName={rowClassName}
          pagination={false}
        />
        <Row justify="center" className="my-5">
          <Pagination
            pageSize={partnerGetAllBookingData?.meta?.limit}
            total={partnerGetAllBookingData?.meta?.total}
            onChange={(value) => setPage(value)}
          />
        </Row>
      </Card>
    </div>
  );
};

export default PartnerOrder;
