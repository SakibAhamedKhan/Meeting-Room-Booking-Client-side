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
     
    >
      Sign out
    </p>
  );
};

export default LogoutButton;
