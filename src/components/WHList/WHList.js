import React, { Component } from "react";
import "./WHList.scss";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
class WHList extends Component {
  render() {
    return (
      <div>
        <div className="warehouseCard">
          <ul className="warehouseCard__content-list">
            <ul className="warehouseCard__sub-list">
              <li className="warehouseCard__list-details">
                <h4 className="warehouseCard__list-title">Warehouse</h4>
                <div className="warehouseCard__link">Miami</div>
                <img src={chevron} />
              </li>
              <li className="warehouseCard__list-details">
                <h4 className="warehouseCard__list-title">Address</h4>
                <p className="warehouseCard__info">
                  2650NW 5th Avenue, Miami USA
                </p>
              </li>
            </ul>
            <ul className="warehouseCard__sub-list">
              <li className="warehouseCard__list-details">
                <h4 className="warehouseCard__list-title">Contact Name</h4>
                <p className="warehouseCard__info">Alana Thomas</p>
              </li>
              <li className="warehouseCard__list-details">
                <h4 className="warehouseCard__list-title">
                  Contact Information
                </h4>
                <p className="warehouseCard__info">+1(646)123-1234</p>
                <p className="warehouseCard__info">athomas@instock.com</p>
              </li>
            </ul>
          </ul>
          <div className="warehouseCard__buttons">
            <button
              type="button"
              className="warehouseCard__button--delete"
            ></button>
            <div className="warehouseCard__button--edit"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default WHList;
