import "./InventoryAdd.scss";
import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../../assets/Icons/error-24px.svg";
import axios from "axios";

class InventoryAdd extends React.Component {
  state = {
    inventory: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/inventory")
      .then((response) => {
        this.setState({
          inventory: response.data,
        });
      })
      .catch((error) => {
        console.log("Request failed");
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/inventory", {
        warehouseName: event.target.warehouse.value,
        itemName: event.target.itemName.value,
        description: event.target.desciprtion.value,
        category: event.target.category.value,
        status: event.target.inStock.value || event.target.outOfStock.value,
        quantity: event.target.quantity.value,
      })
      .catch((error) => console.log(error));
    this.props.history.push("/warehouse");
  };

  render() {
    return (
      <>
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
              <h2 className="new-item__title">Add New Inventory Item</h2>
            </div>

            <form className="new-item-form">
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
                      />
                    </label>

                    <label className="new-item-form__label">
                      Description
                      <input
                        type="text"
                        name="description"
                        placeholder="Please enter a brief item description..."
                        className="new-item-form__input new-item-form__input--padding"
                      />
                    </label>

                    <label className="new-item-form__label">
                      Category
                      <select
                        type="text"
                        name="category"
                        placeholder="Please select"
                        className="new-item-form__input"
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
                    <h3 className="new-item-form__title">Item Availability</h3>
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
                    />

                    <label className="new-item-form__label">
                      Warehouse
                      <select
                        name="warehouse"
                        placeholder="Please select"
                        className="new-item-form__input"
                      >
                        {this.state.inventory.map((warehouse) => {
                          return (
                            <option
                              value={warehouse.warehouseName}
                              key={warehouse.id}
                            >
                              {warehouse.warehouseName}
                            </option>
                          );
                        })}
                      </select>
                    </label>
                  </div>
                </div>
              </div>

              <div className="buttons">
                <div className="buttons__container">
                  <button className="button">Cancel</button>

                  <button className="button button--special" type="submit">
                    + Add Item
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default InventoryAdd;
