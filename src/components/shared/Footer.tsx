import React from "react";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="">
      {/* First Part */}
      <div className="bg-[#002F76] p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-7xl md:px-6 lg:px-8 gap-10">
          <div className="lg:px-6">
            {/* <h1 className="text-white font-bold text-2xl mb-6">Meeting.com</h1> */}
            <div className="mb-6">
              <Link to={`/`} className="text-white font-bold text-2xl ">
                Meeting.com
              </Link>
            </div>
            <p className="text-gray-200">
              Our platform is designed to provide a seamless and intuitive
              experience for users booking meeting rooms. With a focus on
              user-friendly design, secure processes, and robust management
              tools, the system serves both regular users and administrators.
            </p>
          </div>
          <div className="lg:px-6">
            <h1 className="text-white font-bold text-2xl mb-2">Company</h1>
            <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div>
              <Link to={`/`} className="text-white font-semibold">
                Home
              </Link>
            </div>
            <div>
              <Link to={`/meeting-rooms`} className="text-white font-semibold">
                Meeting Rooms
              </Link>
            </div>
            <div>
              <Link to={`/about-us`} className="text-white font-semibold">
                About us
              </Link>
            </div>
            <div>
              <Link to={`/services`} className="text-white font-semibold">
                Services
              </Link>
            </div>
            <div>
              <Link to={`/blog`} className="text-white font-semibold">
                Blog
              </Link>
            </div>
            <div>
              <Link to={`/contact-us`} className="text-white font-semibold">
                Contact us
              </Link>
            </div>
          </div>
          <div className="lg:px-6">
            <h1 className="text-white font-bold text-2xl mb-2">Contact us</h1>
            <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div>
              <h1 className="font-bold text-white">Address:</h1>
              <p className="text-gray-200">
                121 King Street, Melbourne Victoria 3000 Australia
              </p>
            </div>
            <div>
              <h1 className="font-bold text-white">Phone:</h1>
              <p className="text-gray-200">+8801883343048</p>
            </div>
            <div>
              <h1 className="font-bold text-white">Fax:</h1>
              <p className="text-gray-200">+8801883343048</p>
            </div>
            <div>
              <h1 className="font-bold text-white">Info:</h1>
              <p className="text-gray-200">meeting@room.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Second Part */}
      <div>
        <div className="p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl px-2 md:px-4 lg:px-8  gap-0 md:gap-2 lg:gap-10 items-center justify-center">
            <h1 className="text-lg md:text-xl font-semibold text-[#002F76] lg:pl-2 pb-2 md:pb-0 text-center md:text-start">
              © 2024 All rights reserved. Developed By Sakib Ahamed Khan.
            </h1>
            <div className="flex items-center justify-center md:justify-end">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#002F76] mr-2">
                FOLLOW US:
              </h1>
              <div className="flex gap-2 justify-center items-center">
                <CiFacebook className="text-3xl md:text-4xl lg:text-5xl text-[#002F76]" />
                <FaXTwitter className="text-2xl md:text-3xl lg:text-4xl text-[#002F76]" />
                <CiLinkedin className="text-3xl md:text-4xl lg:text-5xl text-[#002F76]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
