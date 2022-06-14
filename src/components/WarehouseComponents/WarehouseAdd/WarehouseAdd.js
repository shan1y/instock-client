import "./WarehouseAdd.scss";
import { Component } from "react";
import { Link } from "react-router-dom";

import backArrow from "../../../assets/Icons/arrow_back-24px.svg";

class WarehouseAdd extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to={"/warehouse"} className="/">
            <img src={backArrow} alt="Back Arrow to return to warehouse page" />
          </Link>
          <h1>Add New Warehouse</h1>
        </div>

        <form>
          <div>
            <h2>Warehouse Details</h2>
            <label>
              Warehouse Name
              <input
                type="text"
                name="warehouseName"
                placeholder="Warehouse Name"
                //   value={this.state.warehouseName}
                //   onChange={this.handleChange}
              />
            </label>

            <label>
              Position
              <input
                type="text"
                name="position"
                placeholder="Position"
                //   value={this.state.warehouseName}
                //   onChange={this.handleChange}
              />
            </label>

            <label>
              City
              <input
                type="text"
                name="city"

                //   value={this.state.warehouseName}
                //   onChange={this.handleChange}
              />
            </label>

            <label>
              Country
              <input
                type="text"
                name="country"
                //   value={this.state.warehouseName}
                //   onChange={this.handleChange}
              />
            </label>
          </div>

          <div>
            <h2>Warehouse Details</h2>
            <label>
              Warehouse
              <input
                type="text"
                name="warehouseName"
                //   value={this.state.warehouseName}
                //   onChange={this.handleChange}
              />
            </label>

            <label>
              Street Address
              <input
                type="text"
                name="address"
                //   value={this.state.warehouseName}
                //   onChange={this.handleChange}
              />
            </label>

            <label>
              City
              <input
                type="text"
                name="city"
                //   value={this.state.warehouseName}
                //   onChange={this.handleChange}
              />
            </label>

            <label>
              Country
              <input
                type="text"
                name="country"
                //   value={this.state.warehouseName}
                //   onChange={this.handleChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default WarehouseAdd;
