import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import avatar from "../../images/avatar.png"
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <span className="logo">Movie App</span>
      </Link>

      <div className="user-image"><img src={avatar} alt="user"/></div>
    </div>
  );
};

export default Header;
