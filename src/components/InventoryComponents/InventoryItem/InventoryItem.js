import { Component } from "react";
import "./InventoryItem.scss";
import { Link } from "react-router-dom";
import axios from "axios";

import backArrow from "../../../assets/Icons/arrow_back-24px.svg";
import edit from "../../../assets/Icons/edit-24px.svg";

class InventoryItem extends Component {
  state = {
    inventoryItem: [],
  };

  componentDidMount() {
    this.getInventoryItem(this.props.match.params.id)
      .then((response) => {
        this.setState({
          inventoryItem: response.data,
        });
      })
      .catch((error) => {
        console.log("Failed Task Successfully");
      });
  }

  getInventoryItem = (inventoryId) =>
    axios.get(`http://localhost:8080/inventory/${inventoryId}`);

  stockCheck = (stock) => (stock === 0 ? "OUT OF STOCK" : "IN STOCK");

  render() {
    const { warehouseName, itemName, description, category, quantity } =
      this.state.inventoryItem;

    return (
      <section className="inventory-item">
        <div className="inventory-item__container">
          <div className="inventory-item__header">
            <div className="inventory-item__wrapper">
              <Link className="inventory-item__link" to="/inventory">
                <img
                  src={backArrow}
                  alt="Back Arrow to return to inventory page"
                  className="inventory-item__back-icon"
                />
              </Link>
              <h2 className="inventory-item__title">{itemName}</h2>
            </div>

            <Link className="inventory-item__edit-link" to="/">
              <img
                src={edit}
                alt="Edit inventory item"
                className="inventory-item__edit"
              />
            </Link>
          </div>

          <div className="item-detail">
            <div className="item-detail__left">
              <div className="item-detail__container">
                <h4 className="item-detail__title">ITEM DESCRIPTION:</h4>
                <p className="item-detail__description body-small">
                  {description}
                </p>
              </div>

              <div className="item-detail__container">
                <h4 className="item-detail__title">CATEGORY:</h4>
                <p className="item-detail__description body-small">
                  {category}
                </p>
              </div>
            </div>

            <div className="item-detail__right">
              <div className="item-detail__container">
                <div>
                  <h4 className="item-detail__title">STATUS:</h4>
                  <p className="item-detail__description body-small">
                    {this.stockCheck(quantity)}
                  </p>
                </div>

                <div className="item-detail__container">
                  <h4 className="item-detail__title">QUANTITY:</h4>
                  <p className="item-detail__description body-small">
                    {quantity}
                  </p>
                </div>
              </div>

              <div className="item-detail__container">
                <h4 className="item-detail__title">WAREHOUSE:</h4>
                <p className="item-detail__description body-small">
                  {warehouseName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default InventoryItem;
