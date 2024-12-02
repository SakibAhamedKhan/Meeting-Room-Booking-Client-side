import { Button } from "antd";
import { Card } from "../ui/card";

const DescriptionReverse = ({ roomData }: any) => {
  return (
    <div className="grid md:grid-cols-7 gap-6">
      <div className="md:col-span-4 lg:col-span-5">
        <p className="leading-8 text-justify text-sm md:text-lg">
          {roomData?.description}
        </p>
      </div>
      <div className="md:col-span-3 lg:col-span-2 ">
        <Card className="border p-4 rounded-lg">
          <p>
            <span className="font-medium">Price Per Slot:</span> $
            {roomData?.pricePerSlot}
          </p>
          <p className="text-sm text-gray-600 mt-3 mb-2">
            * We given money back generate
          </p>
          <Button className="bg-[#002F76] text-white w-full h-[40px] text-md md:text-lg font-semibold mb-2">
            Reserve
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default DescriptionReverse;
