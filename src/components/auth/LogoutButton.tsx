import { logout } from "@/redux/features/auth/authSlice.slice";
import { useAppDispatch } from "@/redux/hook";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const LogoutButton = () => {
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }

  return (
    <p
      onClick={handleLogout}
      className="block px-4 py-2 text-sm lg:text-lg font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none hover:!text-[#3880ec]"
    >
      Sign out
    </p>
  );
};

export default LogoutButton;
