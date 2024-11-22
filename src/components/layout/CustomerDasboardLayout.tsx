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

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const CustomerDasboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const screens = Grid.useBreakpoint();

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
          width={200}
          collapsedWidth={screens.xs? 50 : 60}
          trigger={null}
          collapsible
          collapsed={collapsed}
          
        >
          <Menu
          className="overflow-auto h-screen sticky"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0, background:"#002F76", color:"white" }}
            items={items2}
            onClick={() => {
              console.log(screens);
              if (screens.xs) {
                setCollapsed(true);
              }
            }}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }} className="overflow-auto h-screens">
          <div className="flex items-center gap-5">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Breadcrumb
              items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
              style={{ margin: "16px 0" }}
            />
          </div>
          <Content
            
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CustomerDasboardLayout;
