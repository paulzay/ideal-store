import React from "react";
import { Link } from "react-router-dom";
import UserNav from "./UserNav";

const NavBar = () => {
  return (
    <nav className="nav-row">
      <ul className="col menu-list">
        <Link to="/">
          <button>Shop</button>
        </Link>
      </ul>
      <UserNav />
    </nav>
  );
};

export default NavBar;
