import { Card, CardContent } from "@/components/ui/card";
import { useGetAllRoomsQuery } from "@/redux/features/customer/customerRoomApi.api";
import { Select, Tooltip } from "antd";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineProduct } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { LiaFilterSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const RoomList = () => {
  const { data: roomData } = useGetAllRoomsQuery(undefined, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const [grid, setGrid] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="max-w-full my-8 md:my-12 mx-2 md:mx-10">
      <div className="grid grid-cols-12 gap-4 w-full p-2">
        {/* Filter Side */}
        <div className="col-span-2">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-gray-200 rounded-full p-[10px]">
              <LiaFilterSolid className="text-xl" />
            </div>
            <h3 className="font-bold text-[22px] md:text-3xl">Filter</h3>
          </div>
        </div>

        <div className="col-span-1 bg-gray-300 w-[3px] mx-auto divider"></div>

        {/* List Side */}
        <div className="col-span-9">
          {/* Head section */}
          <div className="flex justify-between mb-6">
            <div>
              <h2 className="font-bold text-[22px] md:text-4xl m-0">
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
              />
              <div className="flex gap-[2px]">
                <div className={`border-2 border-[#002F76] rounded-sm p-1 ${grid ? 'bg-[#002F76]' :''} cursor-pointer`} onClick={() => setGrid(true)}>
                  <AiOutlineMenu className={`text-xl ${grid? 'text-white':''}`} />
                </div>
                <div className={`border-2 border-[#002F76] rounded-sm p-1 ${grid ? '' :'bg-[#002F76]'} cursor-pointer `} onClick={() => setGrid(false)}>
                  <AiOutlineProduct className={`text-xl ${grid? '':'text-white'}`} />
                </div>
              </div>
            </div>
          </div>

          {/* body section  */}

          {!grid ? (
            // grid
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
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
                          <div className="flex justify-center items-center inline-flex gap-4">
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
                <div
                  key={index}
                  className="md:basis-1/3 lg:basis-1/4"
                >
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
                          <div className="flex justify-center items-center inline-flex gap-4">
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
        </div>
      </div>
    </div>
  );
};

export default RoomList;
