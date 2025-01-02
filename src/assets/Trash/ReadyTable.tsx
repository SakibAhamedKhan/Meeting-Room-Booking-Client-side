import { Card } from "@/components/ui/card";
import { TQueryParam } from "@/types";
import {
  Button,
  Pagination,
  Row,
  Space,
  Table,
  TableColumnsType,
} from "antd";
import { useState } from "react";
import { LuRefreshCw } from "react-icons/lu";
import { useGetCustomerAllBookingQuery } from "@/redux/features/customer/customerRoomApi.api";


const ReadyTable = () => {
  const [page, setPage] = useState(1);
  const [params] = useState<TQueryParam[]>([]);
  const {
    data: customerGetAllBookingData,
    isFetching: customerGetAllBookingDataFetching,
    refetch: customerGetAllBookingDataRefetch,
  } = useGetCustomerAllBookingQuery([
    { name: "limit", value: 10 },
    { name: "page", value: page },
    { name: "isApproved", value: "Approved" },
    ...params,
  ]);
  

 

  const columns: TableColumnsType<any> = [
    {
      title: "Id",
      key: "id",
      render: ( record) => {
        return (
          <Space>
            <p className="!text-xs">{record?._id}</p>
          </Space>
        );
      },
    },
    
   
  ];
  let tableData = [];
  if (!customerGetAllBookingDataFetching) {
    tableData = [...customerGetAllBookingData?.data].reverse();
  }

  const rowClassName = () => {
    return "table-custom-row";
  };

  

  return (
    <div>
      <Button
        onClick={() => customerGetAllBookingDataRefetch()}
        className="absolute z-10 right-6 mt-[-37px] md:mt-[-45px]"
      >
        <LuRefreshCw />
      </Button>
      <Card className="overflow-x-scroll lg:overflow-hidden">
        <Table<any>
          className="!z-0"
          columns={columns}
          loading={
            customerGetAllBookingDataFetching
          }
          dataSource={tableData}
          rowClassName={rowClassName}
          pagination={false}
        />
        <Row justify="center" className="my-5">
          <Pagination
            pageSize={customerGetAllBookingData?.meta?.limit}
            total={customerGetAllBookingData?.meta?.total}
            onChange={(value) => setPage(value)}
          />
        </Row>
      </Card>
    </div>
  );
};

export default ReadyTable;
