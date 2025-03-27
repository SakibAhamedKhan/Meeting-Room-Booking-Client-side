const RoomCardSkeleton = () => {
  return (
    <div className="md:basis-1/3 lg:basis-1/4 col-span-4">
      <div className="p-1">
        <div className="bg-gray-100 rounded-lg animate-pulse">
          <div className="overflow-hidden w-full h-44 rounded-t-lg bg-gray-200"></div>
          <div className="px-4 py-2">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-gray-200 rounded-full mr-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div className="px-4 pb-4 flex justify-end">
            <div className="flex justify-center items-center inline-flex gap-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCardSkeleton;
