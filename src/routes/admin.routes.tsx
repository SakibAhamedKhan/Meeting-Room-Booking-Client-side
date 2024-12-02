import AdminAllAcceptedPartners from "@/pages/admin/AdminAllAcceptedPartners";
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


export const AdminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard/>,
        icons: <MdDashboard/>,
    },
    {
        name: "Manage Sub Admin",
        icons: <MdManageAccounts/>,
        children: [
            {
                name: "Create SubAdmin",
                path: "create-subadmin",
                element: <AdminCreateSubAdmin/>,
            },
            {
                name: "Permission To SubAdmin",
                path: "permission-to-subadmin",
                element: <AdminPermissionToSubAdmin/>,
            },
            {
                name: "SubAdmin List",
                path: "subadmin-list",
                element: <AdminSubAdminList/>,
            },
        ]
    },
    {
        name: "Finance",
        icons: <AiFillDollarCircle/>,
        children: [
            {
                name: "Grows Income",
                path: "grows-income",
                element: <AdminGrowsIncome/>,
            },
        ]
    },
    {
        name: "Partner Management",
        icons: <FaRegHandshake/>,
        children: [
            {
                name: "Requested Partner",
                path: "requested-partner",
                element: <AdminRequestedPartner/>,
            },
            {
                name: "All Accepted Partner",
                path: "all-accepted-partner",
                element: <AdminAllAcceptedPartners/>,
            },
        ]
    },
    {
        name: "Support and Ticket",
        icons: <MdSupportAgent/>,
        children: [
            {
                name: "Support Ticket",
                path: "support-ticket",
                element: <AdminSupportTicketAssignedMe/>,
            },
            {
                name: "Support Ticket Assigned Me",
                path: "support-ticket-assigned-me",
                element: <AdminSupportTicketAssignedMe/>,
            },
        ]
    },
]