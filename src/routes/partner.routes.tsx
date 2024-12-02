import PartnerAllRoomList from "@/pages/partner/PartnerAllRoomList";
import PartnerCreateRoom from "@/pages/partner/PartnerCreateRoom";
import PartnerDashboard from "@/pages/partner/PartnerDashboard";
import PartnerOrder from "@/pages/partner/PartnerOrder";
import PartnerTransactionReport from "@/pages/partner/PartnerTransactionReport";
import PartnerWithdraw from "@/pages/partner/PartnerWithdraw";
import { MdDashboard } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { RiHomeOfficeLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

export const PartnerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <PartnerDashboard />,
    icons: <MdDashboard />,
  },
  {
    name: "Room Management",
    icons: <RiHomeOfficeLine />,
    children: [
      {
        name: "Create Room",
        path: "create-room",
        element: <PartnerCreateRoom />,
      },
      {
        name: "All Room List",
        path: "all-room-list",
        element: <PartnerAllRoomList />,
      },
    ],
  },
  {
    name: "Order Management",
    icons: <FaShoppingCart />,
    children: [
      {
        name: "Orders",
        path: "orders",
        element: <PartnerOrder />,
      },
    ],
  },
  {
    name: "Finance",
    icons: <AiFillDollarCircle />,
    children: [
      {
        name: "Withdraw",
        path: "withdraw",
        element: <PartnerWithdraw />,
      },
      {
        name: "Transaction Report",
        path: "transaction-report",
        element: <PartnerTransactionReport />,
      },
    ],
  },
];
