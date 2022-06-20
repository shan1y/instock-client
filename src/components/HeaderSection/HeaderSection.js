import "./HeaderSection.scss";
import InStockLogo from "../../assets/Logo/InStock-Logo.svg";
import { Link, useParams } from "react-router-dom";
import React from "react";

class HeaderSection extends React.Component {
  inventorySelected = (endpoint) => {
    if (endpoint === "/inventory") {
      return "nav__links--active";
    } else {
      return "nav__links--tablet";
    }
  };
  warehouseSelected = (endpoint) => {
    if (endpoint === "/warehouse") {
      return "nav__links--active";
    } else if (endpoint === "/") {
      return "nav__links--active";
    } else {
      return "nav__links--tablet";
    }
  };

  render() {
    return (
      <header>
        <nav className="nav">
          <Link to="/" className="nav__logo-div">
            <img
              className="nav__logo"
              src={InStockLogo}
              alt="InStock Logo"
            ></img>
          </Link>
          <div className="nav__directory">
            <Link
              to="/"
              className={`nav__links ${this.warehouseSelected(
                window.location.pathname
              )}`}
            >
              Warehouses
            </Link>
            <Link
              to="/inventory"
              className={`nav__links ${this.inventorySelected(
                window.location.pathname
              )}`}
            >
              Inventory
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderSection;
