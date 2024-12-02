import { FiFlag } from "react-icons/fi";
import { Card } from "../ui/card";

const ReviewCard = ({id}:any) => {
  return (
    <Card className="border rounded-lg my-6">
      <div className="flex justify-end p-4 border-b">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <h1 className="text-end">Good</h1>
            <p className="text-end">1000, Reviews</p>
            <p>{id}</p>
          </div>
          <div className="h-12 w-12 bg-[#002F76] text-white font-semibold text-xl flex justify-center items-center rounded-tl-xl rounded-br-xl">
            8.5
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-4">Guests who reserve here loved</h3>
        <p className="text-sm mb-4">
          “You cannot beat the location of this property, it is smack bang in
          the heart of Krakow with easy transport links, although it is just as
          easy to...”
        </p>
        <div className="flex items-center gap-6">
          <div className="flex gap-2 items-center">
            <div className="bg-green-800 rounded-full w-10 h-10 flex justify-center items-center text-2xl font-semibold text-white">
              R
            </div>
            <h3>Rafat</h3>
          </div>
          <div className="flex gap-2 items-center">
            <FiFlag className="text-2xl" />
            <h3 className="text-gray-800 font-thin">Bangaldesh</h3>
          </div>
        </div>
        <div className="text-blue-700 text-end cursor-pointer">See All..</div>
      </div>
    </Card>
  );
};

export default ReviewCard;
