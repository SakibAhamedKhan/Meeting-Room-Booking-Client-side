import CapacityPriceFilter from "@/components/roomLists/capacity-price-filter";
import RoomCardSkeleton from "@/components/skeleton/RoomCardSkeleton";
import { Card, CardContent } from "@/components/ui/card";
import { useGetAllRoomsQuery } from "@/redux/features/customer/customerRoomApi.api";
import { TQueryParam } from "@/types";
import { Pagination, Row, Select, Tooltip } from "antd";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineProduct } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LiaFilterSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const RoomList = () => {
  const [page, setPage] = useState(1);
  const [sortvalue, setSortValue] = useState("0");
  const [capacity, setCapacity] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [params] = useState<TQueryParam[]>([]);
  console.log(capacity, price);
  const {
    data: roomData,
    isFetching: roomDataFetching,
    refetch: roomDataRefetching,
  } = useGetAllRoomsQuery(
    [
      { name: "limit", value: 3 },
      { name: "page", value: page },
      { name: "sort", value: sortvalue },
      { name: "capacity", value: capacity },
      { name: "price", value: price },
      ...params,
    ],
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );
  const [grid, setGrid] = useState(false);

  const navigate = useNavigate();

  const clearFilter = () => {
    setPrice("");
    setCapacity("");
  };

  const handleSelectionForSort = (value: string) => {
    setSortValue(value);
    roomDataRefetching();
  };

  return (
    <div className="max-w-full">
      <div className="grid grid-cols-12 gap-2 md-gap-4 w-full">
        {/* Filter Side */}
        <div
          className={`md:col-span-2 h-screen fixed md:relative !bg-gray-50 rounded-sm z-10 md:p-6 ${
            showFilter ? "p-2 sm:left-0 top-[64px] md:top-0 h-screen" : "h-[55px] overflow-hidden p-2 sm:left-0 md:top-0 w-[160px] relative"
          }`}
        >
          <div className="flex justify-between items-center mx-2">
            <div className="flex items-center justify-start gap-4">
              <div className="bg-gray-200 rounded-full p-[10px]">
                <LiaFilterSolid className="text-md md:text-xl" />
              </div>
              <h3 className="font-bold text-[22px] text-lg md:text-3xl">Filter</h3>
            </div>
            <div className="md:hidden inline">
              <p onClick={() => setShowFilter(!showFilter)}>
                {showFilter ? <FaChevronDown /> : <FaChevronUp />}
              </p>
            </div>
          </div>
          <CapacityPriceFilter
            capacity={capacity}
            setCapacity={setCapacity}
            price={price}
            setPrice={setPrice}
            clearFilter={clearFilter}
          />
        </div>

        {/* List Side */}
        <div className="col-span-12 md:col-span-10 mx-4 md:mx-6 my-2 md:my-6">
          {/* Head section */}
          <div className="flex justify-between mb-6 gap-2 md:gap-0">
            <div>
              <h2 className="font-bold text-lg md:text-4xl m-0">
                Our Meeting Rom Collection (53)
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Select
                className="border-2 border-blue-600 rounded-md"
                defaultValue="Sort By Price"
                options={[
                  { label: "Low to High", value: "1" },
                  { label: "High to Low", value: "2" },
                ]}
                bordered={false}
                onChange={handleSelectionForSort}
              />
              <div className="flex gap-[2px]">
                <div
                  className={`border-2 border-[#002F76] rounded-sm p-1 ${
                    grid ? "bg-[#002F76]" : ""
                  } cursor-pointer`}
                  onClick={() => setGrid(true)}
                >
                  <AiOutlineMenu
                    className={`text-xl ${grid ? "text-white" : ""}`}
                  />
                </div>
                <div
                  className={`border-2 border-[#002F76] rounded-sm p-1 ${
                    grid ? "" : "bg-[#002F76]"
                  } cursor-pointer `}
                  onClick={() => setGrid(false)}
                >
                  <AiOutlineProduct
                    className={`text-xl ${grid ? "" : "text-white"}`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* body section  */}

          {!grid ? (
            // grid
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
              {roomDataFetching ? (
                <>
                  {Array.from({ length: 6 }).map(() => (
                    <RoomCardSkeleton />
                  ))}
                </>
              ) : (
                <></>
              )}

              {roomData?.data.map((item: any, index: number) => (
                <div
                  key={index}
                  className="md:basis-1/3 lg:basis-1/4 col-span-4"
                >
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent className="p-0">
                        <div className="overflow-hidden w-full h-44 rounded-t-lg">
                          <img
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                            src={`${item.thumbnail[0]?.url}`}
                            alt=""
                          />
                        </div>
                        <div className="px-4 py-2">
                          <h2
                            onClick={() => navigate(`/room/${item._id}`)}
                            className="text-[#002F76] text-lg md:text-2xl font-semibold cursor-pointer mb-1"
                          >
                            {item.name}
                          </h2>
                          <div className="flex items-center mb-2">
                            <FaLocationDot className="text-blue-700 text-md flex-shrink-0" />
                            <Tooltip
                              placement="bottom"
                              title={`${item.address}`}
                            >
                              <p className="text-sm text-gray-600 ml-2 overflow-hidden whitespace-nowrap text-ellipsis cursor-default">
                                {item.address}
                              </p>
                            </Tooltip>
                          </div>
                          <p className="text-sm md:text-lg">
                            Room No: {item.roomNo}
                          </p>
                          <p className="text-sm md:text-lg">
                            Capactiy: {item.capacity}
                          </p>
                          <p className="text-sm md:text-lg">
                            Floor No: {item.floorNo}
                          </p>
                        </div>
                        <div className="px-4 pb-4 flex justify-end">
                          <div className="justify-center items-center inline-flex gap-4">
                            <p className="text-sm md:text-lg">Per Slot</p>
                            <h2 className="text-xl md:text-2xl font-bold text-[#002F76]">
                              ${item.pricePerSlot}
                            </h2>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // not grid
            <div className="flex flex-col gap-4">
              {roomData?.data.map((item: any, index: number) => (
                <div key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <Card className="rounded-lg">
                      <CardContent className="p-0 grid grid-cols-3 gap-4">
                        <div className="overflow-hidden w-full h-44 rounded-t-lg">
                          <img
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                            src={`${item.thumbnail[0]?.url}`}
                            alt=""
                          />
                        </div>
                        <div className="px-4 py-2">
                          <h2
                            onClick={() => navigate(`/room/${item._id}`)}
                            className="text-[#002F76] text-lg md:text-2xl font-semibold cursor-pointer mb-1"
                          >
                            {item.name}
                          </h2>
                          <div className="flex items-center mb-2">
                            <FaLocationDot className="text-blue-700 text-md flex-shrink-0" />
                            <Tooltip
                              placement="bottom"
                              title={`${item.address}`}
                            >
                              <p className="text-sm text-gray-600 ml-2 overflow-hidden whitespace-nowrap text-ellipsis cursor-default">
                                {item.address}
                              </p>
                            </Tooltip>
                          </div>
                          <p className="text-sm md:text-lg">
                            Room No: {item.roomNo}
                          </p>
                          <p className="text-sm md:text-lg">
                            Capactiy: {item.capacity}
                          </p>
                          <p className="text-sm md:text-lg">
                            Floor No: {item.floorNo}
                          </p>
                        </div>
                        <div className="px-4 pb-4 flex justify-end">
                          <div className="justify-center items-center inline-flex gap-4">
                            <p className="text-sm md:text-lg">Per Slot</p>
                            <h2 className="text-xl md:text-2xl font-bold text-[#002F76]">
                              ${item.pricePerSlot}
                            </h2>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          )}

          <Row justify="center" className="my-5">
            <Pagination
              pageSize={roomData?.meta?.limit}
              total={roomData?.meta?.total}
              onChange={(value) => setPage(value)}
            />
          </Row>
        </div>
      </div>
    </div>
  );
};

export default RoomList;
