// Sidebar.js
import React from "react";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", icon: "", label: "Dashboard" },
    { path: "/test", icon: "", label: "Test" },
  ];

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <Menu theme="light" mode="inline" defaultSelectedKeys={[location.pathname]}>
      {menuItems.map(({ path, icon, label }) => (
        <Menu.Item key={path} icon={icon} onClick={() => handleMenuClick(path)}>
          {label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Sidebar;

