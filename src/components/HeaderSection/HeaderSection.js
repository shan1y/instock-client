import "./HeaderSection.scss";
import InStockLogo from "../../assets/Logo/InStock-Logo.svg";
import { NavLink } from "react-router-dom";
import React from "react";

class HeaderSection extends React.Component {
  render() {
    return (
      <header>
        <nav className="nav">
          <NavLink to="/" className="nav__logo-div">
            <img
              className="nav__logo"
              src={InStockLogo}
              alt="InStock Logo"
            ></img>
          </NavLink>
          <div className="nav__directory">
            <NavLink
              to="/"
              className="nav__links"
              activeClassName="nav__links--active"
            >
              Warehouses
            </NavLink>
            <NavLink
              to="/inventory"
              className="nav__links"
              activeClassName="nav__links--active"
            >
              Inventory
            </NavLink>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderSection;
