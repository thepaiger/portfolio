// // ====================IMPORTS====================
// // Packages
// import { NavHashLink } from "react-router-hash-link";
// import { Link } from 'react-router-dom';
// import { useState } from "react";

// // CSS
// import "./NavHamburger.css";

// // Icons
// import { FaBars } from "react-icons/fa";
// import { AiOutlineClose } from "react-icons/ai";
// import { } from "react-icons/io";

// // Services
// import { navbarRoutes } from "../../services/navbarRoutes";

// export default function NavHamburger() {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <div className="navbar">
//         <Link to="#" className="menu-bars">
//           <FaBars onClick={showSidebar} />
//         </Link>
//       </div>
//       <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
//         <ul className="nav-menu-items">
//           <li className="navbar-toggle">
//             <Link to="#" className="menu-bars">
//               <AiOutlineClose />
//             </Link>
//           </li>
//           {navbarRoutes.map((item, index) => {
//             return (
//               <li key={index} className={item.className}>
//                 <Link to={item.path}>
//                   {item.icon}
//                   <span>{item.title}</span>
//                 </Link>
//               </li>
//             )
//           })}
//         </ul>
//       </nav>
//     </>
//   );
// }
