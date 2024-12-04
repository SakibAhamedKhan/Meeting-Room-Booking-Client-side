import React, { useState } from "react";
import {
  LaptopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps, Grid } from "antd";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Navbar from "./Navbar";
import DashboardNavbar from "./DashboardNavbar";
import { useAppSelector } from "@/redux/hook";
import { selectCurrentToken } from "@/redux/features/auth/authSlice.slice";
import { verifyToken } from "@/utils/verifyToken";
import { CustomerPaths } from "@/routes/customer.routes";
import { sidebarItemsGenerator } from "@/utils/SidebarsItemsGenerator";
import { TUser } from "@/types";
import { Outlet, useLocation } from "react-router-dom";
import { AdminPaths } from "@/routes/admin.routes";

const { Header, Content, Sider } = Layout;

const userRole = {
  ADMIN: "ADMIN",
  SUBADMIN: "SUBADMIN",
  CUSTOMER: "CUSTOMER",
  PARTNER: "PARTNER",
};

const AdminDashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const screens = Grid.useBreakpoint();
  const location = useLocation();

  const tokens = useAppSelector(selectCurrentToken);
  let user;

  if (tokens) {
    user = verifyToken(tokens);
  }
  let sidebarItems;

  const role = (user as TUser).role;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(
        AdminPaths,
        userRole.ADMIN.toLowerCase()
      );
      break;
    default:
      break;
  }

  const generateBreadcrumbItems = (pathname: string) => {
    const pathSegments = pathname.split("/").filter(Boolean); // Split by '/' and remove empty values

    return pathSegments.map((segment, index) => {
      // Decode URL-encoded segments (e.g., "Customer%20Support" -> "Customer Support")
      const decodedSegment = decodeURIComponent(segment);

      // Capitalize the first letter of each word in the segment for better readability
      const title = decodedSegment
        .split("-") // Split by hyphen (to handle "support-ticket" as "Support Ticket")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "); // Join words back with a space

      return {
        title: title, // Return the formatted title
      };
    });
  };

  const breadcrumbItems = generateBreadcrumbItems(location.pathname);

  console.log(sidebarItems, role);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-screen overflow-hidden">
      <div className="pb-[64px]">
        <DashboardNavbar />
      </div>
      <Layout>
        <Sider
          className={`${
            collapsed === false && screens.xs ? "absolute h-screen z-50" : ""
          }`}
          width={250}
          collapsedWidth={screens.xs ? 50 : 60}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu
            className="overflow-auto h-screen sticky"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
              background: "#002F76",
              color: "white",
            }}
            onClick={() => {
              console.log(screens);
              if (screens.xs) {
                setCollapsed(true);
              }
            }}
            items={sidebarItems}
          />
        </Sider>
        <Layout
          style={{ padding: "0 24px 24px" }}
          className="overflow-auto h-screens"
        >
          <div className="flex items-center gap-5">
            {/* Mobileview Sidebar open and close button  */}
            <Button
              className={`${
                collapsed === false && screens.xs
                  ? "relative h-screen left-[230px] top-[4px] !bg-[#002F76]"
                  : ""
              }`}
              type="text"
              icon={
                collapsed ? (
                  <MenuUnfoldOutlined />
                ) : (
                  <MenuFoldOutlined
                    className={screens.xs ? "text-white" : ""}
                  />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Breadcrumb items={breadcrumbItems} style={{ margin: "16px 0" }} />
          </div>
          <div
            style={{
              margin: 0,
              // background: colorBgContainer,
              // borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminDashboardLayout;
