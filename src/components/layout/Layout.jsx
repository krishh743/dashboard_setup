import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import { Outlet } from "react-router";
import Sidebar from "../sidebar/Sidebar";

const { Header, Sider, Content } = Layout;

const menuItems = [
  { path: "/dashboard", icon: "", label: "Dashboard" },
  { path: "/test", icon: "", label: "Test" },
  // Add other menu items here if needed
];

const LayoutPage = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical border-b " />
{/* <Header/> */}
        <Sidebar menuItems={menuItems} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
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
        </Header>
        <Layout className={`${"p-4 h-[92vh]"} bg-white w-full overflow-auto `}>
          <Content>
            <main>
              <div>
                <Outlet />
              </div>
            </main>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
