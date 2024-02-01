// // import { SearchIcon } from '@heroicons/react/outline';
// import { Input } from "antd";
// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const CustomHeader = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const [searchKeyword, setSearchKeyword] = useState(
//     queryParams.get("searchKeyword") || ""
//   );


//   const handleInputChange = (e) => {
//     const newSearchKeyword = e.target.value;
//     setSearchKeyword(newSearchKeyword);
//     // Cookies.set('searchKeyWord', newSearchKeyword);

//     queryParams.set("searchKeyword", newSearchKeyword);
//     navigate({
//       pathname: location.pathname,
//       search: queryParams.toString(),
//     });
//   };

//   return (
//     <div
//       style={{
//         padding: "10px",
//         // backgroundColor: 'black',
//         position: "sticky",
//         width: "100%",
//         top: 0,
//         // borderBottom: "2px solid #212121",
//         zIndex: 1,
//         height: 70,
//         boxShadow:
//           "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
//       }}
//       className={`${"justify-between"} z-40 flex items-center`}
//     >
//       <div className="flex justify-between items-center">
//         <span className=" flex flex-col justify-center px-7  text-white text-lg ">
//           <span className="flex text-base">
//             {/* <b className="leading-loose">Zebra</b>
//             <p className="font-extralight leading-loose">Learn</p> */}
//           </span>
//           {/* <span className="text-primary font-medium text-md -mt-2">
//             SCHOOLS
//           </span> */}
//         </span>
//         {/* header search input field on header */}
//         <Input
//           size="large"
//           placeholder="search"
//           className="rounded-lg border-none  text-gray-100 text-sm placeholder:text-gray-400 h-10"
//           value={searchKeyword}
//           onChange={handleInputChange}
//         />
//       </div>

//       <span
//         onClick={() => navigate("/")}
//         className="px-4 rounded-md text-white text-lg cursor-pointer hover:text-primary"
//       >
//         Login
//       </span>
//     </div>
//   );
// };

// export default CustomHeader;
