import "./HeaderSection.scss";
import InStockLogo from "../../assets/Logo/InStock-Logo.svg";
import { Link, useParams } from "react-router-dom";
import React from "react";

class HeaderSection extends React.Component {
  state = {
    inventoryClass: "",
    warehouseClass: "button__inventory--active",
  };

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

  activeInventoryPageHandler = () => {
    this.setState({
      inventoryClass: "button__inventory--active",
      warehouseClass: "",
    });
  };

  activeWarehousePageHandler = () => {
    this.setState({
      inventoryClass: "",
      warehouseClass: "button__warehouse--active",
    });
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
            <Link to="/" className="nav__links">
              <button
                onClick={this.activeWarehousePageHandler}
                className={`button__warehouse ${this.state.warehouseClass} `}
              >
                {" "}
                Warehouses
              </button>
            </Link>
            <Link to="/inventory" className="nav__links ">
              <button
                onClick={this.activeInventoryPageHandler}
                className={`button__inventory ${this.state.inventoryClass} `}
              >
                Inventory
              </button>
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderSection;
