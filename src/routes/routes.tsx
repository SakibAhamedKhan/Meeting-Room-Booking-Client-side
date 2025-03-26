import AdminDasboardLayout from "@/components/layout/AdminDashboardLayout";
import CommonLayout from "@/components/layout/CommonLayout";
import CustomerDasboardLayout from "@/components/layout/CustomerDasboardLayout";
import PartnerDashbordLayout from "@/components/layout/PartnerDashbordLayout";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";
import AboutUs from "@/pages/AboutUs";
import AdminRoomsAdd from "@/pages/admin/AdminRoomsAdd";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import RoomDetails from "@/pages/RoomDetails";
import RoomList from "@/pages/RoomList";
import Services from "@/pages/Services";
import Testing from "@/pages/testing/Testing";
import { routeGenerator } from "@/utils/routesGenerator";
import { createBrowserRouter } from "react-router-dom";
import { AdminPaths } from "./admin.routes";
import { CustomerPaths } from "./customer.routes";
import { PartnerPaths } from "./partner.routes";

export const router = createBrowserRouter([
  {
    path: "/testing",
    element: (
      <CommonLayout>
        <Testing />
      </CommonLayout>
    ),
  },
  {
    path: "/",
    element: (
      <CommonLayout>
        <Home />
      </CommonLayout>
    ),
  },
  {
    path: "/abc",
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
    path: "/rooms/",
    element: (
      <CommonLayout>
        <RoomList />
      </CommonLayout>
    ),
  },
  {
    path: "/room/:id",
    element: (
      <CommonLayout>
        <RoomDetails />
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
    path: "/admin",
    element: (
      <ProtectedRoute role="ADMIN">
        <AdminDasboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(AdminPaths),
  },
  {
    path: "/partner",
    element: (
      <ProtectedRoute role="PARTNER">
        <PartnerDashbordLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(PartnerPaths),
  },
]);
