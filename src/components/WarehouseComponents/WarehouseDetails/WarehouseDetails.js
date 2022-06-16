import "./WarehouseDetails.scss";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import chevron from "../../../assets/Icons/chevron_right-24px.svg";
import backArrow from "../../../assets/Icons/arrow_back-24px.svg";

class WarehouseDetails extends Component {
  render() {
    return (
      <>
        <div className="new-warehouse__header">
          <Link className="new-warehouse__link" to="/warehouse">
            <img
              src={backArrow}
              alt="Back Arrow to return to warehouse page"
              className="new-warehouse__back-icon"
            />
          </Link>
          <h2 className="new-warehouse__title">Washington</h2>
        </div>

        <div>
          <h4>WAREHOUSE ADDRESS</h4>
          <p>33 Pear Street SW, Washington, USA</p>
        </div>

        <div>
          <h4>Contact NAME:</h4>
          <p>Graeme Lyon</p>
          <p>Warehouse Manager</p>
        </div>

        <div>
          <h4>CONTACT INFORMATION:</h4>
          <p>+1 (647) 504-0911</p>
          <p>glyon@instock.com</p>
        </div>

        <ul className="sorter">
          <li className="sorter__item">
            INVENTORY ITEM <button className="sorter__button"></button>
          </li>
          <li className="sorter__item sorter__item--address">
            CATEGORY <button className="sorter__button"></button>
          </li>
          <li className="sorter__item sorter__item--contact-name">
            STATUS<button className="sorter__button"></button>
          </li>
          <li className="sorter__item sorter__item--contact">
            QUANTITY<button className="sorter__button"></button>
          </li>
          <li className="sorter__item">
            Actions<button className="sorter__button"></button>
          </li>
        </ul>

        <div>
          <div className="warehouseCard">
            <ul className="warehouseCard__content-list">
              <ul className="warehouseCard__sub-list">
                <li className="warehouseCard__list-details">
                  <h4 className="warehouseCard__list-title">INVENTORY ITEM</h4>
                  <div className="warehouseCard__link-item">
                    <div className="warehouseCard__link body-medium">
                      Television
                    </div>
                    <img src={chevron} />
                  </div>
                </li>
                <li className="warehouseCard__list-details">
                  <h4 className="warehouseCard__list-title">CATEGORY</h4>
                  <p className="warehouseCard__info body-medium">Electronics</p>
                </li>
              </ul>
              <ul className="warehouseCard__sub-list">
                <li className="warehouseCard__list-details">
                  <h4 className="warehouseCard__list-title">STATUS</h4>
                  <p className="warehouseCard__info body-medium">IN STOCK</p>
                </li>
                <li className="warehouseCard__list-details">
                  <h4 className="warehouseCard__list-title">
                    Contact Information
                  </h4>
                  <p className="warehouseCard__info body-medium">500</p>
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
          <div className="warehouseCard--tablet">
            <div className="warehouseCard__link--tablet body-medium">
              Television
              <img src={chevron} alt="chevron" />
            </div>
            <p className="warehouseCard__address--tablet body-medium">
              Electronics
            </p>

            <p className="warehouseCard__info--name body-medium">IN STOCK</p>
            <div>
              <p className="warehouseCard__info--contact body-medium">500</p>
            </div>
            <div className="warehouseCard__buttons warehouseCard__buttons--tablet">
              <button
                type="button"
                className="warehouseCard__button--delete"
              ></button>
              <div className="warehouseCard__button--edit"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WarehouseDetails;
