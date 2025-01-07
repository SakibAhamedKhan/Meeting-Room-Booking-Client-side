import { logout } from "@/redux/features/auth/authSlice.slice";
import { useAppDispatch } from "@/redux/hook";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }

  return (
    <div className="px-4 py-2 text-sm lg:text-md font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none hover:!text-[#3880ec] flex gap-2 items-center"
    onClick={() => handleLogout()}
    >
    <LogOut size={16} />
    Log out
  </div>
  );
};

export default LogoutButton;
