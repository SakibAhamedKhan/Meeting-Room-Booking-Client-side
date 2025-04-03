import { Card } from "@/components/ui/card";
import {
  useGetAllFavouriteQuery,
  useMakeRoomUnFavouriteMutation,
} from "@/redux/features/customer/customerRoomApi.api";
import { TQueryParam } from "@/types";
import { ExclamationCircleFilled } from "@ant-design/icons";
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
import { LuRefreshCw } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const { confirm } = Modal;

const CustomerFavouriteRooms = () => {
  const [page, setPage] = useState(1);
  const [params] = useState<TQueryParam[]>([]);
  const {
    data: customerGetAllFavouriteQuery,
    isFetching: customerGetAllFavouriteQueryFetching,
    refetch: customerGetAllFavouriteQueryRefetch,
  } = useGetAllFavouriteQuery([
    { name: "limit", value: 10 },
    { name: "page", value: page },
    ...params,
  ],  {
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true,
  });
  const [makeRoomUnFavourite, ] =
    useMakeRoomUnFavouriteMutation();
  const navigate = useNavigate();
 

  console.log(customerGetAllFavouriteQuery);

  const showConfirm = (record: any) => {
    confirm({
      title: "Do you want to UnFavourite these meeting room?",
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
        handlUnFavourite(record);
        console.log("OK ==== ", record);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const handlUnFavourite = async (record: any) => {
    try {
      const sendData = {
        room: record?._id,
      };
      const res = await makeRoomUnFavourite(sendData).unwrap();
      console.log(res);
      toast.success("UnFavourited!", { duration: 2000 });
      customerGetAllFavouriteQueryRefetch();
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message, { duration: 1000 });
    }
  };

  const columns: TableColumnsType<any> = [
    {
      title: "Time",
      key: "time",
      render: ( record) => {
        console.log(record);
        return (
          <Space>
            <p className="!text-xs">
              {new Date(record?.createdAt).toLocaleString()}
            </p>
          </Space>
        );
      },
    },
    {
      title: "Thumbnail",
      key: "thumbnail",
      render: (record) => {
        return (
          <Space>
            <Image width={90} src={record?.room?.thumbnail[0]?.url} />
          </Space>
        );
      },
    },
    {
      title: "Name",
      key: "name",
      render: ( record) => {
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
      title: "Address",
      key: "address",
      render: (record) => {
        return (
          <Space>
            <p className="!text-xs">{record?.room?.address}</p>
          </Space>
        );
      },
    },
    {
      title: "Capacity",
      key: "capacity",
      render: ( record) => {
        return (
          <Space>
            <p className="!text-xs">{record?.room?.capacity}</p>
          </Space>
        );
      },
    },
    {
      title: "Price Per Slot",
      key: "price",
      render: ( record) => {
        return (
          <Space>
            <p className="!text-xs">{record?.room?.pricePerSlot}</p>
          </Space>
        );
      },
    },
    {
      title: "Action",
      key: "partnerName",
      render: (record) => {
        return (
          <Space>
            <Button
              style={{ borderColor: "#FFD700", color: "#FF4500" }}
              className="font-semibold bg-orange-50"
              onClick={() => showConfirm(record?.room)}
            >
              <MdOutlineDeleteOutline className="text-lg" />
            </Button>
          </Space>
        );
      },
    },
    // {
    //   title: "Business Name",
    //   key: "businessName",
    //   render: (text, record) => {
    //     return (
    //       <Space>
    //         <p className="!text-xs">{record.businessName}</p>
    //       </Space>
    //     );
    //   },
    // },

    // {
    //   title: "Business Address",
    //   key: "businessAddress",
    //   render: (text, record) => {
    //     return (
    //       <Space>
    //         <p className="!text-xs">{record.businessAddress}</p>
    //       </Space>
    //     );
    //   },
    // },
    // {
    //   title: "Status",
    //   key: "status",
    //   render: (text, record) => {
    //     return (
    //       <Space>
    //         {record?.isApproved === "Rejected" && (
    //           <Button
    //             style={{ borderColor: "#FA8072", color: "#FF0000" }}
    //             className="font-semibold bg-red-50"
    //           >
    //             {record.isApproved}
    //           </Button>
    //         )}
    //       </Space>
    //     );
    //   },
    // },
    // {
    //   title: "Details",
    //   key: "details",
    //   render: (text, record) => {
    //     return (
    //       <Space>
    //         <Button
    //           style={{
    //             borderColor: "#002f76",
    //             backgroundColor: "#002f76",
    //             color: "white",
    //           }}
    //           className="px-2"
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
  if (!customerGetAllFavouriteQueryFetching) {
    tableData = [...customerGetAllFavouriteQuery?.data || []].reverse();
  }
  const rowClassName = () => {
    return "table-custom-row";
  };

  return (
    <div>
      <Button
        onClick={() => customerGetAllFavouriteQueryRefetch()}
        className="absolute z-10 right-6 mt-[-37px] md:mt-[-45px]"
      >
        <LuRefreshCw />
      </Button>
      <Card className="overflow-x-scroll lg:overflow-hidden">
        <Table<any>
          className="!z-0"
          columns={columns}
          loading={customerGetAllFavouriteQueryFetching}
          dataSource={tableData}
          rowClassName={rowClassName}
          pagination={false}
        />
        <Row justify="center" className="my-5">
          <Pagination
            pageSize={customerGetAllFavouriteQuery?.meta?.limit}
            total={customerGetAllFavouriteQuery?.meta?.total}
            onChange={(value) => setPage(value)}
          />
        </Row>
      </Card>
    </div>
  );
};

export default CustomerFavouriteRooms;
