import React from "react";
import style from "../css/Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <h1>Todo List</h1>
      <div className={style.links}>
        <Link to="/">Home</Link>
        <Link to="/">Get Started</Link>
      </div>
    </nav>
  );
}

export default Navbar;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import style from "../css/Header.module.css";

// export default function Navbar() {
//   return (
//     <nav className={style.navbar}>
//       <div className={style.leftlink}>
//         <NavLink to="/home" className={style.leftnav}>
//           TodoList
//         </NavLink>
//       </div>
//       <div className={style.rightlink}>
//         <NavLink to="/signup" className={style.rightnav}>
//           Sign Up
//         </NavLink>
//         <NavLink to="/login" className={style.rightnav}>
//           Sign in
//         </NavLink>
//       </div>
//     </nav>
//   );
// }
