import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/authProvider/AuthProvider";
import avatar from "../../assets/images/avatar.png";

const UserNav = () => {
  const { token, handleSignOut } = useContext(authContext);

  return (
    <div className="user-nav">
      {token == null ? (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/signin">
            <button>Sign In</button>
          </Link>
        </>
      ) : (
        <>
          <button onClick={handleSignOut}>Sign Out</button>
          <Link to="/user-profile">
            <img className="nav-link-avatar" src={avatar} alt="sample avatar" />
          </Link>
        </>
      )}
    </div>
  );
};

export default UserNav;
