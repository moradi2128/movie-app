import * as React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import avatar from "../../images/2-1.jpg";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
const Header = () => {
  const [value, setValue] = React.useState(0);
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <span className="logo">Movie App</span>
        </Link>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className="nav-item"
        >
          <Link to="/">
            <BottomNavigationAction
              active="true"
              icon={<i className="fa fa-house"></i>}
              className="link-li"
            />
          </Link>
          <Link to="/movie">
            <BottomNavigationAction
              icon={<i className="fa fa-film"></i>}
              className="link-li"
            />
          </Link>
          <Link to="/series">
            <BottomNavigationAction
              icon={<i className="fa fa-folder"></i>}
              className="link-li"
            />
          </Link>
          <Link to="/">
            <BottomNavigationAction
              icon={<i className="fa fa-sliders"></i>}
              className="link-li"
            />
          </Link>
        </BottomNavigation>
        <div className="user-image">
          <img src={avatar} alt="user" />
          <span>Mohammad Moradi</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
