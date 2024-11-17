import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import GetInTouch from "@/components/home/GetInTouch.home";
import TrustedCompany from "@/components/home/TrustedCompany.home";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { loginZodSchema } from "@/schemas/auth.schemas";
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from "antd";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <div className="flex justify-center items-center my-10 md:my-14 lg:my-24 px-8">
        <Card className="w-[350px] p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold">
              Login now
            </CardTitle>
            <CardDescription>Login for Arrange Meeting</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <CForm onSubmit={onSubmit} resolver={zodResolver(loginZodSchema)}>
              <div className="mb-4">
                <CInput type="text" name="email" placeholder="Email" />
              </div>
              <div className="mb-2">
                <CInput
                  type="password"
                  name="password"
                  placeholder="Your Password"
                />
              </div>
              <div>
                <Link to={`/`}>
                  <h1 className="text-center text-[#002F76] font-semibold mb-2">
                    Forgot Password
                  </h1>
                </Link>
                <Button
                  htmlType="submit"
                  className="bg-[#002F76] text-white w-full h-[40px] text-md md:text-lg font-semibold mb-2"
                >
                  Sign in
                </Button>
                <h1 className="text-center mb-2">
                <CardDescription className="inline">Not have an account? </CardDescription> <Link to={`/register`} className="text-[#002F76] font-semibold">Registration now</Link>
                </h1>
              </div>
            </CForm>
          </CardContent>
        </Card>
      </div>

      <div className="bg-[#e4e9f2]">
        <TrustedCompany />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-4 mt-[-50px] md:mt-[-97px]">
        <GetInTouch />
      </div>
    </div>
  );
};

export default Login;
