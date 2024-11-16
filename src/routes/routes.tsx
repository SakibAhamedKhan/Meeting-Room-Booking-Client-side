import CommonLayout from "@/components/layout/CommonLayout";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Services from "@/pages/Services";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout><Home/></CommonLayout>
    },
    {
        path: "/meeting-rooms",
        element: <CommonLayout><Home/></CommonLayout>
    },
    {
        path: "/services",
        element: <CommonLayout><Services/></CommonLayout>
    },
    {
        path: "/about-us",
        element: <CommonLayout><AboutUs/></CommonLayout>
    },
    {
        path: "/contact-us",
        element: <CommonLayout><ContactUs/></CommonLayout>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/login",
        element: <CommonLayout><Login/></CommonLayout>
    },
])