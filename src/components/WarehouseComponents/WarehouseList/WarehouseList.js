import React, { Component } from "react";
import "./WarehouseList.scss";
import chevron from "../../../assets/Icons/chevron_right-24px.svg";

function WarehouseList({ warehouseList }) {
  return (
    <>
      {warehouseList.map((warehouse) => {
        return (
          <div className="warehouseCard" key={warehouse.id}>
            <ul className="warehouseCard__content-list">
              <ul className="warehouseCard__sub-list">
                <li className="warehouseCard__list-details">
                  <h4 className="warehouseCard__list-title">Warehouse</h4>
                  <div className="warehouseCard__link-item">
                    <div className="warehouseCard__link body-medium">
                      {warehouse.name}
                    </div>
                    <img src={chevron} />
                  </div>
                </li>
                <li className="warehouseCard__list-details">
                  <h4 className="warehouseCard__list-title">Address</h4>
                  <p className="warehouseCard__info body-medium">
                    {warehouse.address}
                  </p>
                  <p className="warehouseCard__info body-medium">
                    {warehouse.city}, {warehouse.country}
                  </p>
                </li>
              </ul>
              <ul className="warehouseCard__sub-list">
                <li className="warehouseCard__list-details">
                  <h4 className="warehouseCard__list-title">Contact Name</h4>
                  <p className="warehouseCard__info body-medium">
                    {warehouse.contact.name}
                  </p>
                </li>
                <li className="warehouseCard__list-details">
                  <h4 className="warehouseCard__list-title">
                    Contact Information
                  </h4>
                  <p className="warehouseCard__info body-medium">
                    {warehouse.contact.phone}
                  </p>
                  <p className="warehouseCard__info body-medium">
                    athomas@instock.com
                  </p>
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
        );
      })}
    </>
  );
}

export default WarehouseList;
