import "./InventoryAdd.scss";
import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../../assets/Icons/error-24px.svg";
import axios from "axios";

class InventoryAdd extends React.Component {
  render() {
    return (
      <>
        {/* <div className="inventoryAdd__header"></div>
        <section className="inventoryAdd">
          <div className="inventoryAdd__content">
            <div className="inventoryAdd__details"></div>
            <div className="inventoryAdd__availability"></div>
          </div>
          <div></div>
        </section> */}
        <section className="new-item">
          <div className="new-item__container">
            <div className="new-item__header">
              {/* CHANGE PATH */}
              <Link className="new-item__link" to="/item">
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
                      <input
                        type="text"
                        name="catergory"
                        placeholder="Please select"
                        className="new-item-form__input"
                      />
                    </label>
                  </div>
                </div>

                <div className="new-item-form__right">
                  <div className="new-item-form__container">
                    <h3 className="new-item-form__title">Item Availability</h3>
                    <label className="new-item-form__label">
                      Status
                      </label>
                      <div className="new-item-form__radio">
                        <div className="new-item-form__radio-container">
                          <input
                            type="radio"
                            name="status"
                            className="new-item-form__radio-button"
                          />
                          <p className="new-item-form__radio-text">In Stock</p>
                        </div>
                        <div className="new-item-form__radio-container">
                          <input
                            type="radio"
                            name="status"
                            className="new-item-form__radio-button"
                          />
                          <p className="new-item-form__radio-text">Out of Stock</p>
                        </div>
                      </div>
              

                    <label className="new-item-form__label">
                      Quantity
                      <input
                        type="text"
                        name="position"
                        placeholder="0"
                        className="new-item-form__input"
                      />
                    </label>

                    <label className="new-item-form__label">
                      Warehouse
                      <input
                        name="phone"
                        placeholder="Please select"
                        className="new-item-form__input"
                      />
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
