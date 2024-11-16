import { Button } from 'antd'
import React from 'react'

const GetInTouch = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 ">
      <h2 className="md:text-2xl lg:text-4xl font-bold mb-4 md:mb-0 md:pr-6">
        Get in touch
      </h2>
      <div className="md:border-l md:pl-6 md:w-[500px] md:border-gray-300 text-center md:text-left">
        <p className="text-gray-700 mb-4 md:mb-0">
          We look forward to welcoming you into one of our beautiful meeting, event, or flexible office spaces.
        </p>
      </div>
      <Button className="bg-[#002F76] text-white py-2 px-4 rounded hover:bg-blue-700 transition">
        CONTACT US
      </Button>
    </div>
  )
}

export default GetInTouch