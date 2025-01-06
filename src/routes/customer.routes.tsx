import CustomerBooking from "@/pages/customer/CustomerBooking";
import CustomerDashboard from "@/pages/customer/CustomerDashboard";
import CustomerFavouriteRooms from "@/pages/customer/CustomerFavouriteRooms";
import CustomerProfile from "@/pages/customer/CustomerProfile";
import CustomerSettings from "@/pages/customer/CustomerSettings";
import CustomerSupportTicket from "@/pages/customer/CustomerSupportTicket";
import CustomerToPartner from "@/pages/customer/CustomerToPartner";
import CustomerTransactionHistory from "@/pages/customer/CustomerTransactionHistory";
import { MdDashboard } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa6";

export const CustomerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <CustomerDashboard />,
    icons: <MdDashboard />,
  },
  {
    name: "Favourite Rooms",
    path: "favourite-rooms",
    element: <CustomerFavouriteRooms />,
    icons: <FaRegHeart />,
  },
  {
    name: "Booking",
    path: "booking",
    element: <CustomerBooking />,
    icons: <FaShoppingCart />,
  },
  // {
  //   name: "Finance",
  //   icons: <AiFillDollarCircle/>,
  //   children: [
  //     {
  //       name: "Transaction History",
  //       path: "transaction-history",
  //       element: <CustomerTransactionHistory />,
  //     },
  //   ],
  // },

  {
    name: "Profile",
    path: "profile",
    element: <CustomerProfile />,
    icons: <CgProfile />,
  },
  // {
  //   name: "Settings",
  //   path: "settings",
  //   element: <CustomerSettings />,
  //   icons: <IoSettingsSharp />,
  // },
  {
    name: "Be a Partner",
    icons: <FaRegHandshake />,
    children: [
      {
        name: "Partner Request",
        path: "partner-request",
        element: <CustomerToPartner />,
      },
    ],
  },
  {
    name: "Customer Support",
    icons: <MdSupportAgent />,
    children: [
      {
        name: "Support Ticket",
        path: "support-ticket",
        element: <CustomerSupportTicket />,
      },
    ],
  },
];
