import { HomeCarousel } from '@/components/carousels/HomeCarousel'
import React from 'react'
import { MdOutlineEventAvailable,MdAssuredWorkload  } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";


const Home = () => {
  return (
    <div>
      <div className=''>
        <HomeCarousel/>
        <div className='bg-[#002F76] p-4 md:p-14 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white'>
          <div className='flex flex-col justify-center items-center'>
            <MdOutlineEventAvailable className='text-3xl md:text-6xl'/>
            <h1 className='text-sm md:text-2xl font-semibold mt-5 text-center'>Real-Time Availability</h1>            
          </div>
          <div className='flex flex-col justify-center items-center'>
            <MdAssuredWorkload className='text-3xl md:text-6xl'/>
            <h1 className='text-sm md:text-2xl font-semibold mt-5 text-center'>Instant Booking Confirmation</h1>            
          </div>
          <div className='flex flex-col justify-center items-center'>
            <RiCalendarScheduleLine className='text-3xl md:text-6xl'/>
            <h1 className='text-sm md:text-2xl font-semibold mt-5 text-center'>Flexible Scheduling</h1>            
          </div>
          <div className='flex flex-col justify-center items-center'>
            <BiSupport className='text-3xl md:text-6xl'/>
            <h1 className='text-sm md:text-2xl font-semibold mt-5 text-center'> 24/7 Support</h1>            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home