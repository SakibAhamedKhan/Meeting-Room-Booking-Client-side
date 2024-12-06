import { selectCurrentToken } from "@/redux/features/auth/authSlice.slice";
import { useAppSelector } from "@/redux/hook";
import { verifyToken } from "./verifyToken";

export const getAuthUser = () => {
  const tokens = useAppSelector(selectCurrentToken);
  let user=null;

  if (tokens) {
    user = verifyToken(tokens);
  }

  return user;
};
