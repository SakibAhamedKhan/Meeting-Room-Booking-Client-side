import { useGetSingleRoomQuery } from "@/redux/features/customer/customerRoomApi.api";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import AmenitiesCard from "@/components/roomDetails/AmenitiesCard";
import TitleImage from "@/components/roomDetails/TitleImage";
import DescriptionReverse from "@/components/roomDetails/DescriptionReverse";
import { Button } from "antd";
import GoogleMapCard from "@/components/roomDetails/GoogleMapCard";
import { LoadScript } from "@react-google-maps/api";
import ReviewCard from "@/components/roomDetails/ReviewCard";

const RoomDetails = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetSingleRoomQuery(id);

  const roomData = data?.data;

  if(isFetching) return <h1>Loading..</h1>;
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-12">
        <div className="grid  lg:grid-cols-10 gap-6">
          {/* Title and image */}
          <div className="lg:col-span-7">
            <TitleImage roomData={roomData} />
          </div>

          {/* Review and map */}
          <div className="lg:col-span-3">
            <div className="flex justify-end">
              <div className="flex justify-between items-center w-52">
                <FaRegHeart className="text-2xl text-blue-700" />
                <IoShareSocialOutline className="text-3xl text-blue-700" />
                <Button className="bg-[#002F76] text-white h-[40px] text-md md:text-lg font-semibold lg:mb-2">
                  Reserve
                </Button>
              </div>
            </div>

            <ReviewCard id={roomData?._id}/>

            {window.google === undefined ? (
              <LoadScript
                googleMapsApiKey={`${import.meta.env.VITE_GOOGLE_API_KEY}`}
              >
                <GoogleMapCard data={roomData} />
              </LoadScript>
            ) : (
              <GoogleMapCard data={roomData} />
            )}
          </div>
        </div>

        {/* amenities */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 my-8">
          {roomData?.amenities.map((item: any, index: number) => (
            <AmenitiesCard amenities={item} key={index} />
          ))}
        </div>

        {/* description and Reserve */}
        <DescriptionReverse roomData={roomData} />
      </div>
    </div>
  );
};

export default RoomDetails;
