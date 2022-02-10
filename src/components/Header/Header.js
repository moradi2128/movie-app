import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import avatar from "../../images/2-1.jpg";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <span className="logo">Movie App</span>
        </Link>
        <ul className="nav-item">
          <Link to="/">
            <li className="active" title="Home" aria-selected="true">
              <i className="fa fa-house"></i>
            </li>
          </Link>
          <Link to="/movie">
            <li title="Movie" aria-selected="false">
              <i className="fa fa-film"></i>
            </li>
          </Link>
          <Link to="/series">
            <li aria-selected="false">
              <i className="fa fa-folder"></i>
            </li>
          </Link>

          <li aria-selected="false">
            <i className="fa fa-sliders"></i>
          </li>
        </ul>
        <div className="user-image">
          <img src={avatar} alt="user" />
          <span>Mohammad Moradi</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
