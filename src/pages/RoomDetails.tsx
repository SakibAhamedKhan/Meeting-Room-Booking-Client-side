import AmenitiesCard from "@/components/roomDetails/AmenitiesCard";
import DescriptionReverse from "@/components/roomDetails/DescriptionReverse";
import GoogleMapCard from "@/components/roomDetails/GoogleMapCard";
import ReserveButton from "@/components/roomDetails/ReserveButton";
import ReviewCard from "@/components/roomDetails/ReviewCard";
import TitleImage from "@/components/roomDetails/TitleImage";
import RoomDetailsPageSkeleton from "@/components/skeleton/RoomDetailsPageSkeleton";
import {
  useGetSingleRoomQuery,
  useMakeRoomFavouriteMutation,
  useMakeRoomUnFavouriteMutation,
} from "@/redux/features/customer/customerRoomApi.api";
import { getAuthUser } from "@/utils/getAuthUser";
import { LoadScript } from "@react-google-maps/api";
import { Tooltip } from "antd";
import { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const RoomDetails = () => {
  const [makeRoomFavourite] =
    useMakeRoomFavouriteMutation();
  const [makeRoomUnFavourite] =
    useMakeRoomUnFavouriteMutation();
  const navigate = useNavigate();
  const user = getAuthUser();
  const { id } = useParams();
  console.log(id);
  const { data, isFetching, refetch } = useGetSingleRoomQuery(id);

  useEffect(() => {
    refetch();
  }, [id, refetch]);

  if(isFetching){
    return (
      <RoomDetailsPageSkeleton/>
    )
  }
  const roomData = data?.data;

  const handleFavourite = async () => {
    console.log(user);
    if (user === null) {
      toast.warning("At first you have to login!", {
        duration: 2000,
        position: "top-center",
      });
      // toast.custom(
      //   (t) => (
      //     <div className="bg-white p-4 rounded-md shadow-lg border-2 flex justify-center items-center gap-2 !w-full">
      //       <IoWarningOutline className="text-orange-500" />
      //       At first you have to login!{" "}
      //       <button onClick={() => toast.dismiss(t)}>close</button>
      //     </div>
      //   ),
      //   {
      //     duration: 2000,
      //   }
      // );
      return navigate("/login");
    }

    try {
      const sendData = {
        room: roomData?._id,
      };
      const res = await makeRoomFavourite(sendData).unwrap();
      console.log(res);
      toast.success("Favourited!", { duration: 2000 });
      refetch();
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message, { duration: 1000 });
    }
  };

  const handleUnFavourite = async () => {
    console.log(user);
    if (user === null) {
      toast.warning("At first you have to login!", {
        duration: 2000,
        position: "top-center",
      });
      return navigate("/login");
    }

    try {
      const sendData = {
        room: roomData?._id,
      };
      const res = await makeRoomUnFavourite(sendData).unwrap();
      console.log(res);
      toast.success("UnFavourited!", { duration: 2000 });
      refetch();
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message, { duration: 1000 });
    }
  };

  console.log(roomData);

  
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-12 ">
        <div className="grid lg:grid-cols-10 gap-6 ">
          {/* Title and image */}
          <div className="lg:col-span-7">
            <TitleImage roomData={roomData} />
          </div>

          {/* Review and map */}
          <div className="lg:col-span-3">
            <div className="flex justify-end">
              <div className="flex justify-between items-center w-52 gap-5">
                {roomData?.favourited ? (
                  <Tooltip placement="top" title="UnFavourite it">
                    <FaHeart
                      onClick={() => handleUnFavourite()}
                      className="text-5xl text-blue-700 cursor-pointer"
                    />
                  </Tooltip>
                ) : (
                  <Tooltip placement="top" title="Favourite it">
                    <FaRegHeart
                      onClick={() => handleFavourite()}
                      className="text-5xl text-blue-700 cursor-pointer"
                    />
                  </Tooltip>
                )}

                <IoShareSocialOutline className="text-5xl text-blue-700" />
                <ReserveButton roomData={roomData}/>
              </div>
            </div>

            <ReviewCard id={roomData?._id} />

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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 my-4 ">
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
