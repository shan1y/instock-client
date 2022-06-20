import "./HeaderSection.scss";
import InStockLogo from "../../assets/Logo/InStock-Logo.svg";
import { NavLink } from "react-router-dom";
import React from "react";

class HeaderSection extends React.Component {
<<<<<<< HEAD
=======
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

>>>>>>> develop
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
<<<<<<< HEAD
            <NavLink
              to="/warehouse"
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
=======
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
>>>>>>> develop
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderSection;
