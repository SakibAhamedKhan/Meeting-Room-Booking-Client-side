import AdminCreateSubAdmin from "@/pages/admin/AdminCreateSubAdmin";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminGrowsIncome from "@/pages/admin/AdminGrowsIncome";
import AdminPermissionToSubAdmin from "@/pages/admin/AdminPermissionToSubAdmin";
import AdminRequestedPartner from "@/pages/admin/AdminRequestedPartner";
import AdminSubAdminList from "@/pages/admin/AdminSubAdminList";
import AdminSupportTicketAssignedMe from "@/pages/admin/AdminSupportTicketAssignedMe";
import { MdDashboard } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaHouseChimneyCrack } from "react-icons/fa6";
import AdminNewRequestedRoom from "@/pages/admin/AdminNewRequestedRoom";
import AdminAllRejectedPartners from "@/pages/admin/AdminAllRejectedPartners";
import AdminAllApprovedRoom from "@/pages/admin/AdminAllApprovedRoom";
import AdminAllApprovedPartners from "@/pages/admin/AdminAllApprovedPartners";

export const AdminPaths = [
  {
    name: "Admin Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
    icons: <MdDashboard />,
  },
  {
    name: "Manage Sub Admin",
    icons: <MdManageAccounts />,
    children: [
      {
        name: "Create SubAdmin",
        path: "create-subadmin",
        element: <AdminCreateSubAdmin />,
      },
      {
        name: "Permission To SubAdmin",
        path: "permission-to-subadmin",
        element: <AdminPermissionToSubAdmin />,
      },
      {
        name: "SubAdmin List",
        path: "subadmin-list",
        element: <AdminSubAdminList />,
      },
    ],
  },
  {
    name: "Finance",
    icons: <AiFillDollarCircle />,
    children: [
      {
        name: "Grows Income",
        path: "grows-income",
        element: <AdminGrowsIncome />,
      },
    ],
  },
  {
    name: "Partner Management",
    icons: <FaRegHandshake />,
    children: [
      {
        name: "Requested Partner",
        path: "requested-partner",
        element: <AdminRequestedPartner />,
      },
      {
        name: "All Approved Partner",
        path: "all-approved-partner",
        element: <AdminAllApprovedPartners />,
      },
      {
        name: "All Rejected Room",
        path: "all-rejected-room",
        element: <AdminAllRejectedPartners />,
      },
    ],
  },
  {
    name: "Room Management",
    icons: <FaHouseChimneyCrack />,
    children: [
      {
        name: "New Requested Room",
        path: "new-requested-room",
        element: <AdminNewRequestedRoom />,
      },
      {
        name: "All Approved Room",
        path: "all-approved-room",
        element: <AdminAllApprovedRoom />,
      },
    ],
  },
  {
    name: "Support and Ticket",
    icons: <MdSupportAgent />,
    children: [
      {
        name: "Support Ticket",
        path: "support-ticket",
        element: <AdminSupportTicketAssignedMe />,
      },
      {
        name: "Support Ticket Assigned Me",
        path: "support-ticket-assigned-me",
        element: <AdminSupportTicketAssignedMe />,
      },
    ],
  },
];
