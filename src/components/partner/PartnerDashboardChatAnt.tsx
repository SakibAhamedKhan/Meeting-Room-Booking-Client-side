import { useState, useEffect, useRef } from "react";
import { Line, Column } from "@ant-design/plots";
import { Card } from "antd";
import { useGetPartnerBookingLinechartDataQuery } from "@/redux/features/partner/partnerRoomApi.api";

const CHART_MAP = {} as any;

const PartnerDashboardChatAnt = () => {
  const {
    data: getPartnerBookingLinechartData,
    isFetching: getPartnerBookingLinechartDataFetching,
  } = useGetPartnerBookingLinechartDataQuery(undefined) as any;
  const [data, setData] = useState([]);
  const dataRef = useRef() as any;

    if (getPartnerBookingLinechartDataFetching) {
      return <p>Loading...</p>;
    }
    console.log(getPartnerBookingLinechartData);
  dataRef.current = getPartnerBookingLinechartData.data as any;
  console.log(dataRef.current);
//   useEffect(() => {
//     asyncFetch();
//   }, []);

//   const asyncFetch = () => {
//     fetch("https://gw.alipayobjects.com/os/antvdemo/assets/data/sp500.json")
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log("fetch data failed", error);
//       });
//   };

  const config = {
    data:getPartnerBookingLinechartData.data,
    xField: "Date",
    yField: "Earning",
    height: 250,
  };
  console.log(config);
  const showTooltip = (data: any) => {
    const { line, column } = CHART_MAP as any;
    line.emit("tooltip:show", {
      data: { data: { x: data.Date } },
    });
    column.emit("tooltip:show", {
      data: { data },
    });
  };

  const hideTooltip = () => {
    const { line, column } = CHART_MAP as any;
    line.emit("tooltip:hide");
    column.emit("tooltip:hide");
  };

  const setTooltipPosition = (evt: any, chart: any) => {
    const { x } = evt;
    const { layout } = chart.getView();
    const percent = x / layout.width;
    showTooltip(dataRef.current[Math.floor(percent * dataRef.current.length)]);
  };

  return (
    <Card className="shadow-sm w-full">
      <Line
        {...config}
        className={`w-full`}
        onReady={({ chart }) => {
          CHART_MAP["line"] = chart;
          chart.on("plot:pointermove", (evt: any) => {
            setTooltipPosition(evt, chart);
          });
          chart.on("plot:pointerout", hideTooltip);
        }}
      />
      {/* <Column
        {...config}
        className={`w-full`}
        onReady={({ chart }) => {
          CHART_MAP["column"] = chart;
          chart.on("plot:pointermove", (evt:any) => {
            setTooltipPosition(evt, chart);
          });
          chart.on("plot:pointerout", hideTooltip);
        }}
      /> */}
    </Card>
  );
};

export default PartnerDashboardChatAnt;
