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
    // Add other menu items here if needed
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

// import React, { useEffect, useRef, useState } from "react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { MdOutlineDashboard } from "react-icons/md";

// const menuItems = [
//   { path: "/dashboard", icon: "", label: "Dashboard" },
//   { path: "/test", icon: "", label: "Test" },

//   // Add other menu items here if needed
// ];

// function Sidemenu() {
//   const location = useLocation();
//   const { pathname } = location;
//   const sidebar = useRef(null);
//   const navigate = useNavigate();

//   // close if the esc key is pressed

//   const handleLogout = () => {
//     // Cookies.remove("auth_token");
//     navigate("/");
//   };

//   return (
//     <div
//       className={` h-[100%] border shadow-xl border-stroke bg-white flex flex-col justify-between p-4 "
//       }`}
//     >
//       <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
//         <nav>
//           <div>
//             <ul className="flex flex-col items-center gap-4">
//               {menuItems.map((item) => (
//                 <li key={item.path}>
//                   {item.path === "/dashboard" || item.path === "/test" ? (
//                     <NavLink
//                       to={item.path}
//                       className={`group relative flex items-center justify-center bg-[#F6F6F9] w-20 h-16 rounded-xl font-medium text-black duration-300 ease-in-out ${
//                         pathname.includes(item.path) &&
//                         " border-primary border-2 bg-[#FFF3F0]"
//                       }`}
//                     >
//                       <img src={item.icon} alt="" />
//                     </NavLink>
//                   ) : (
//                     <div className="group relative flex items-center justify-center bg-[#F6F6F9] w-20 h-16 rounded-xl font-medium text-black duration-300 ease-in-out cursor-not-allowed">
//                       <img src={item.icon} alt="" />
//                     </div>
//                   )}
//                   <div
//                     className={`group relative flex items-center justify-center gap-2.5 text-lg rounded-sm duration-300 ease-in-out ${
//                       pathname.includes(item.path) && "text-primary"
//                     }`}
//                   >
//                     <b className="text-sm">{item.label}</b>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </nav>
//       </div>
//       <div className="flex items-center justify-center">
//         <button
//           className="inline-flex items-center justify-center gap-2.5 py-2 px-10 rounded-md bg-[#FE5512] text-center font-bold text-white hover:bg-opacity-90"
//           onClick={handleLogout}
//         >
//           <span>Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Sidemenu;
