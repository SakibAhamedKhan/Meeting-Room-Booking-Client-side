import { useGetUserQuery } from "@/redux/features/auth/authApi.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge as BadgeUI } from "@/components/ui/badge";
import { User, Mail, Phone, MapPin, UserCheck } from "lucide-react";
import React from "react";
import type { BadgeProps, CalendarProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";

const CustomerProfile = () => {
  const { data: getUser, isFetching: getUserFetching } =
    useGetUserQuery(undefined);

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {getUserFetching ? (
        <div className="bg-gray-100 flex items-center ">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                User Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Name Skeleton */}
                <div className="flex items-center space-x-4 my-2">
                  <User className="w-6 h-6 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <div className="h-6 bg-gray-300 rounded-md w-24 animate-pulse"></div>
                  </div>
                </div>
                {/* Phone Skeleton */}
                <div className="flex items-center space-x-4 my-2">
                  <Phone className="w-6 h-6 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    <div className="h-6 bg-gray-300 rounded-md w-24 animate-pulse"></div>
                  </div>
                </div>

                {/* Email Skeleton */}
                <div className="flex items-center space-x-4 col-span-2 my-2">
                  <Mail className="w-6 h-6 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <div className="h-6 bg-gray-300 rounded-md w-24 animate-pulse"></div>
                  </div>
                </div>

                

                {/* Address Skeleton */}
                <div className="flex items-center space-x-4 col-span-2 my-2">
                  <MapPin className="w-6 h-6 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Address</p>
                    <div className="h-6 bg-gray-300 rounded-md w-24 animate-pulse"></div>
                  </div>
                </div>

                {/* Role Skeleton */}
                <div className="flex items-center space-x-4 my-2">
                  <UserCheck className="w-6 h-6 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Role</p>
                    <div className="h-6 bg-gray-300 rounded-md w-24 animate-pulse"></div>
                  </div>
                </div>

                {/* Status Skeleton */}
                <div className="flex items-center space-x-4 my-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Status</p>
                    <div className="h-6 bg-gray-300 rounded-md w-24 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="bg-gray-100 flex items-center">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                User Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center space-x-4 my-2">
                  <User className="w-6 h-6 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="text-xs md:text-lg font-semibold">
                      {getUser?.data?.result?.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 my-2">
                  <Phone className="w-6 h-6 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    <p className="text-xs md:text-lg font-semibold">
                      {getUser?.data?.result?.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 col-span-2 my-2">
                  <Mail className="w-6 h-6 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-xs md:text-lg font-semibold">
                      {getUser?.data?.result?.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 col-span-2 my-2">
                  <MapPin className="w-6 h-6 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Address</p>
                    <p className="text-xs md:text-lg font-semibold">
                      {getUser?.data?.result?.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 my-2">
                  <UserCheck className="w-6 h-6 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Role</p>
                    <BadgeUI
                      variant="secondary"
                      className="text-xs md:text-lg font-semibold"
                    >
                      {getUser?.data?.result?.role}
                    </BadgeUI>
                  </div>
                </div>

                <div className="flex items-center space-x-4 my-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        getUser?.data?.result?.status === "in-progress"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    ></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Status</p>
                    <p className="text-xs md:text-lg font-semibold capitalize">
                      {getUser?.data?.result?.status}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Card>
        <Calendar
          fullscreen={false}
          onPanelChange={onPanelChange}
          className="h-full"
        />
      </Card>
    </div>
  );
};

export default CustomerProfile;
