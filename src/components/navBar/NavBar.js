import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserNav from "./UserNav";

import { authContext } from "../provider/AuthProvider";

const NavBar = () => {
  const { token } = useContext(authContext);

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
