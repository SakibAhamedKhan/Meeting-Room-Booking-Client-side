import React from "react";
import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loginZodSchema, registerZodSchema } from "@/schemas/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "antd";
import { FieldValues } from "react-hook-form";

const Register = () => {
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div className="m-0 grid grid-cols-5">
      {/* First Part  */}
      <Link
        to={`/`}
        className="text-2xl md:text-2xl lg:text-3xl font-semibold text-white fixed left-14 top-10  hidden md:block "
      >
        Meeting.com
      </Link>
      <div className="md:col-span-2 bg-[#002F76] h-screen md:p-14 text-white hidden md:block">
        <div className="h-full flex flex-col justify-evenly gap-2">
          <div>
            <h1 className="text-3xl md:text-3xl lg:text-5xl text-white font-semibold mt-4">
              Book Your Ideal Meeting Room with Ease.
            </h1>
          </div>
          <div>
            <p className="text-xl  font-semibold">Trusted by 57+ customers</p>
            <p className="text-gray-300 font-thin">
              Copyright © 2024 Meeting.com | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Second Part */}
      <div className="col-span-5 md:col-span-3 overflow-auto h-screen flex justify-center items-center">
        <div className="p-8 w-full md:w-4/5">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold">
              Create Account
            </CardTitle>
            <CardDescription>Create account in 30 seconds.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <CForm onSubmit={onSubmit} resolver={zodResolver(registerZodSchema)}>
              <div className="flex">
                <div className="mb-4 mr-4 w-full">
                  <CInput type="text" name="name" placeholder="Name" />
                </div>
                <div className="mb-4 w-full">
                  <CInput type="text" name="email" placeholder="Email" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-4 mr-4 w-full">
                  <CInput
                    type="password"
                    name="password"
                    placeholder="Your Password"
                  />
                </div>
                <div className="mb-4 w-full">
                  <CInput type="text" name="phone" placeholder="Phone Number" />
                </div>
              </div>
              <div className="flex">
                <div className="mb-4 w-full">
                  <CInput type="text" name="address" placeholder="Address" />
                </div>
              </div>

              <div>
                <Button
                  htmlType="submit"
                  className="bg-[#002F76] text-white w-full h-[40px] text-md md:text-lg font-semibold mb-2"
                >
                  Register
                </Button>
                <h1 className="text-center mb-2">
                  <CardDescription className="inline">
                    Already have account?{" "}
                  </CardDescription>{" "}
                  <Link
                    to={`/login`}
                    className="text-[#002F76] font-semibold"
                  >
                    Sign in
                  </Link>
                </h1>
              </div>
            </CForm>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default Register;
