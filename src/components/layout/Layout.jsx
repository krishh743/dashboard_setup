import React, { useState } from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import CustomHeader from "../header/Header";

const { Sider, Content } = Layout;

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        style={{
          backgroundColor: "white",
          boxShadow:
            "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical border-b " />
        {/* sidebar*/}
        <Sidebar />
      </Sider>
      <Layout>
        {/* header  start*/}
        <CustomHeader
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
          colorBgContainer={colorBgContainer}
        />
        {/* header end */}
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
