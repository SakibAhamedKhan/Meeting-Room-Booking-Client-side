import { useState, useEffect, useRef } from "react";
import { Line, Column } from "@ant-design/plots";
import { Card, Select, Spin } from "antd";
import { useGetPartnerBookingLinechartDataQuery } from "@/redux/features/partner/partnerRoomApi.api";

const CHART_MAP = {} as any;

const PartnerDashboardChart2 = () => {
  const [numberMonths, setNumberMonths] = useState<string>("12");
  const {
    data: getPartnerBookingLinechartData,
    isFetching: getPartnerBookingLinechartDataFetching,
  } = useGetPartnerBookingLinechartDataQuery([
    { name: "numberMonth", value: numberMonths },
  ]) as any;
  const [data, setData] = useState([]);

  //   if (getPartnerBookingLinechartDataFetching) {
  //     return <p>Loading...</p>;
  //   }
  useEffect(() => {
    setData(getPartnerBookingLinechartData?.data);
  }, [
    getPartnerBookingLinechartData,
    numberMonths,
    getPartnerBookingLinechartDataFetching,
  ]);
  const config = {
    data,
    xField: "Date",
    yField: "Earning",
    height: 300,
  };

  console.log(config);

  const handleChange = (value: string) => {
    setNumberMonths(value);
  };

  return (
    <Card className="shadow-sm min-h-[300px]">
      <div className="flex justify-between">
        <div>
          <p className="font-semibold text-lg">Bar Chart - Income</p>
          <p>Showing total visitors for the last {numberMonths} months</p>
        </div>
        <div>
          <Select
            defaultValue="12"
            onChange={handleChange}
            options={[
              { label: "Last 3 months", value: "3" },
              { label: "Last 6 months", value: "6" },
              { label: "Last 12 months", value: "12" },
              { label: "Last 24 months", value: "24" },
            ]}
          />
        </div>
      </div>
      <hr className="my-4" />
      {getPartnerBookingLinechartDataFetching ? (
        <Spin tip="Loading" size="small" className="my-6 md:my-16">
            .
        </Spin>
      ) : (
        <Column className={`!w-full`} {...config} />
      )}
    </Card>
  );
};

export default PartnerDashboardChart2;
