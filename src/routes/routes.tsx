import TestParticles from "@/components/contact/TestParticles";
import CommonLayout from "@/components/layout/CommonLayout";
import CustomerDasboardLayout from "@/components/layout/CustomerDasboardLayout";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";
import AboutUs from "@/pages/AboutUs";
import AdminRoomsAdd from "@/pages/admin/AdminRoomsAdd";
import ContactUs from "@/pages/ContactUs";
import CustomerDashboard from "@/pages/customer/CustomerDashboard";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MeetingRoomsList from "@/pages/MeetingRoomsList";
import Register from "@/pages/Register";
import Services from "@/pages/Services";
import { routeGenerator } from "@/utils/routesGenerator";
import { createBrowserRouter } from "react-router-dom";
import { CustomerPaths } from "./customer.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CommonLayout>
        <Home />
      </CommonLayout>
    ),
  },
  {
    path: "/meeting-rooms",
    element: (
      <CommonLayout>
        <AdminRoomsAdd />
      </CommonLayout>
    ),
  },
  {
    path: "/services",
    element: (
      <CommonLayout>
        <Services />
      </CommonLayout>
    ),
  },
  {
    path: "/about-us",
    element: (
      <CommonLayout>
        <AboutUs />
      </CommonLayout>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <CommonLayout>
        <AdminRoomsAdd />
      </CommonLayout>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: (
      <CommonLayout>
        <Login />
      </CommonLayout>
    ),
  },
  {
    path: "/customer",
    element: (
      <ProtectedRoute role="CUSTOMER">
        <CustomerDasboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(CustomerPaths) ,
  },
  {
    path: "/admin-dashboard",
    element: (
      <ProtectedRoute role="ADMIN">
        <CustomerDasboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
      },
    ],
  },
  {
    path: "/partner-dashboard",
    element: (
      <ProtectedRoute role="PARTNER">
        <CustomerDasboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
      },
    ],
  },
]);
