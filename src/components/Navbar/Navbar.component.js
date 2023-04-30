import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../assets/img/logoblog.svg";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <img src={logo} alt="logo" />
        </li>
        <li>
          <NavLink exact to="/" activeClassName={style.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/createpost" activeClassName={style.active}>
            Create Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
