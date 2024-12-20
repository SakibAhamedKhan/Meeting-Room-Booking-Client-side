import { logout } from "@/redux/features/auth/authSlice.slice";
import { useAppDispatch } from "@/redux/hook";

const LogoutButton = () => {
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }

  return (
    <p
      onClick={handleLogout}
      className="block px-4 py-2 text-sm lg:text-md font-medium text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none hover:!text-[#3880ec]"
    >
      Sign out
    </p>
  );
};

export default LogoutButton;
