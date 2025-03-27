
const RoomDetailsPageSkeleton = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 my-8 md:my-12">
      <div className="grid lg:grid-cols-10 gap-6">
        {/* Left Column (7/10 width) */}
        <div className="lg:col-span-7">
          {/* Title and Location */}
          <div className="mb-4">
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="flex items-center gap-1 my-2 text-xs md:text-lg">
              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>

          {/* Main Image */}
          <div className="w-full mb-4">
            <div className="rounded-lg bg-gray-200 h-60"></div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="relative my-2">
            <div className="overflow-hidden">
              <div className="flex ml-[1px]">
                <div className="rounded-lg !w-[80px] md:!w-[200px] bg-gray-200 h-20"></div>
                <div className="ml-4 bg-gray-200 !w-[80px] md:!w-[200px] h-20"></div>
                <div className="ml-4 bg-gray-200 !w-[80px] md:!w-[200px] h-20"></div>
              </div>
            </div>
            <button className="h-8 w-8 absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-200 rounded-full"></button>
            <button className="h-8 w-8 absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-200 rounded-full"></button>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 my-4">
            <div className="flex justify-center items-center border w-full p-4 rounded-lg gap-4 hover:bg-gray-50 cursor-default">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="flex justify-center items-center border w-full p-4 rounded-lg gap-4 hover:bg-gray-50 cursor-default">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="flex justify-center items-center border w-full p-4 rounded-lg gap-4 hover:bg-gray-50 cursor-default">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="flex justify-center items-center border w-full p-4 rounded-lg gap-4 hover:bg-gray-50 cursor-default">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>

          {/* Description and Price Grid */}
          <div className="grid md:grid-cols-7 gap-6">
            <div className="md:col-span-4 lg:col-span-5">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="md:col-span-3 lg:col-span-2">
              <div className="border p-4 rounded-lg">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (3/10 width) */}
        <div className="lg:col-span-3">
          {/* Action Buttons */}
          <div className="flex justify-end mb-6">
            <div className="flex justify-between items-center w-52 gap-5">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
            </div>
          </div>

          {/* Rating Card */}
          <div className="border rounded-lg my-6">
            <div className="flex justify-end p-4 border-b">
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                  <div className="h-4 bg-gray-200 rounded w-20 mt-1"></div>
                </div>
                <div className="h-12 w-12 bg-gray-200 rounded-tl-xl rounded-br-xl"></div>
              </div>
            </div>
            <div className="p-4">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="flex items-center gap-6 mb-4">
                <div className="flex gap-2 items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
            </div>
          </div>

          {/* Map Container */}
          <div style={{ width: '100%', height: '300px', position: 'relative', overflow: 'hidden' }}>
            <div className="w-full h-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPageSkeleton;
