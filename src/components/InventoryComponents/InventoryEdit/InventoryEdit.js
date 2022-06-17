import "./InventoryEdit.scss";
import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../../../assets/Icons/arrow_back-24px.svg";
// import errorIcon from "../../../assets/Icons/error-24px.svg";
import axios from "axios";

class InventoryEdit extends React.Component {
  state = {
    inventory: null,
    warehouseList: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/inventory/${this.props.match.params.id}`)
      .then((response) => {
        return response.data;
      })
      .then((inventoryData) => {
        return axios.get("http://localhost:8080/warehouse");
      })
      .then((response) => {
        this.setState({
          inventory: inventoryData,
          warehouseList: response.data,
        });
      })
      .catch((error) => {
        console.log("Request failed");
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    console.log(this.state.inventory);
    return (
      <>
        {this.state.inventory && (
          <section className="new-item">
            <div className="new-item__container">
              <div className="new-item__header">
                {/* CHANGE PATH */}
                <Link className="new-item__link" to="/inventory">
                  <img
                    src={backArrow}
                    alt="Back Arrow to return to item page"
                    className="new-item__back-icon"
                  />
                </Link>
                <h2 className="new-item__title">Edit Inventory Item</h2>
              </div>

              <form onSubmit={this.handleSubmit} className="new-item-form">
                <div className="new-item-form__wrapper">
                  <div className="new-item-form__left">
                    <div className="new-item-form__container">
                      <h3 className="new-item-form__title">Item Details</h3>
                      <label className="new-item-form__label">
                        Item Name
                        <input
                          type="text"
                          name="itemName"
                          placeholder="Item Name"
                          className="new-item-form__input"
                          defaultValue={this.state.inventory.itemName}
                        />
                      </label>

                      <label className="new-item-form__label">
                        Description
                        <input
                          type="text"
                          name="description"
                          placeholder="Please enter a brief item description..."
                          className="new-item-form__input new-item-form__input--padding"
                          defaultValue={this.state.inventory.description}
                        />
                      </label>

                      <label className="new-item-form__label">
                        Category
                        <select
                          type="text"
                          name="category"
                          placeholder="Please select"
                          className="new-item-form__input"
                          defaultValue={this.state.inventory.category}
                        >
                          <option value="Electronics">Electronics</option>
                          <option value="Apparel">Apparel</option>
                          <option value="Accessories">Accessories</option>
                          <option value="Gear">Gear</option>
                          <option value="Health">Health</option>
                        </select>
                      </label>
                    </div>
                  </div>

                  <div className="new-item-form__right">
                    <div className="new-item-form__container">
                      <h3 className="new-item-form__title">
                        Item Availability
                      </h3>
                      <label className="new-item-form__label">Status</label>
                      <div className="new-item-form__radio">
                        <div className="new-item-form__radio-container">
                          <input
                            type="radio"
                            name="status"
                            className="new-item-form__radio-button"
                            value="inStock"
                          />
                          <p className="new-item-form__radio-text">In Stock</p>
                        </div>
                        <div className="new-item-form__radio-container">
                          <input
                            type="radio"
                            name="status"
                            className="new-item-form__radio-button"
                            value="outOfStock"
                          />
                          <p className="new-item-form__radio-text">
                            Out of Stock
                          </p>
                        </div>
                      </div>

                      <label className="new-item-form__label">Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        placeholder="0"
                        className="new-item-form__input new-item-form__input--width"
                        defaultValue={String(this.state.inventory.quantity)}
                      />

                      <label className="new-item-form__label">
                        Warehouse
                        <select
                          name="warehouse"
                          placeholder="Please select"
                          className="new-item-form__input"
                        >
                          {/* {this.state.inventory.map((warehouse) => {
                            return (
                              <option
                                value={warehouse.warehouseName}
                                key={warehouse.id}
                              >
                                {warehouse.warehouseName}
                              </option>
                            );
                          })} */}
                        </select>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="buttons">
                  <div className="buttons__container">
                    <Link to="/inventory" className="button button--cancel">
                      Cancel
                    </Link>
                    <button className="button button--special" type="submit">
                      + Add Item
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        )}
      </>
    );
  }
}

export default InventoryEdit;
