import "./WarehouseDetails.scss";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import chevron from "../../../assets/Icons/chevron_right-24px.svg";
import backArrow from "../../../assets/Icons/arrow_back-24px.svg";
import editHead from "../../../assets/Icons/edit_second-24px.svg";
import edit from "../../../assets/Icons/edit-24px.svg";
import DeleteModal from "../../DeleteModal/DeleteModal";

class WarehouseDetails extends Component {
  state = {
    warehouseDetails: {
      id: "",
      name: "",
      address: "",
      city: "",
      country: "",
      contact: {
        name: "",
        position: "",
        phone: "",
        email: "",
      },
    },
    warehouseInventory: [],
    isOpen: false,
    activeInventoryId: null,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/warehouse/${this.props.match.params.id}`)
      .then((warehouseDetails) => {
        return warehouseDetails.data;
      })
      .then((warehouseDetails) => {
        return axios
          .get(
            `http://localhost:8080/warehouse/${this.props.match.params.id}/inventory`
          )
          .then((response) => {
            this.setState({
              warehouseDetails,
              warehouseInventory: response.data,
            });
          });
      });
  }

  stockCheck = (stock) => (stock === 0 ? "OUT OF STOCK" : "IN STOCK");

  openModal = (id) => {
    this.setState({ isOpen: true, activeInventoryId: id });
    window.scrollTo(0, 0);
  };

  closeModal = () => this.setState({ isOpen: false });

  deleteItem = (id) => {
    axios.delete(`http://localhost:8080/inventory/${id}`);

    axios
      .get(`http://localhost:8080/warehouse/${this.props.match.params.id}`)
      .then((warehouseDetails) => {
        return warehouseDetails.data;
      })
      .then((warehouseDetails) => {
        return axios
          .get(
            `http://localhost:8080/warehouse/${this.props.match.params.id}/inventory`
          )
          .then((response) => {
            this.setState({
              warehouseDetails,
              warehouseInventory: response.data,
              isOpen: false,
            });
          });
      });
  };

  render() {
    const { city, address, country, contact, id } = this.state.warehouseDetails;
    const { name, position, phone, email } = contact;

    const activeInventoryId = this.state.activeInventoryId;
    let modalData = this.state.warehouseInventory.find((inventory) => {
      return activeInventoryId === inventory.id;
    });
    if (this.state.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return (
      <>
        {this.state?.warehouseDetails && this.state?.warehouseInventory ? (
          <>
            {this.state.isOpen && (
              <DeleteModal
                deleteItem={this.deleteItem}
                closeModal={this.closeModal}
                isOpen={this.state.isOpen}
                title={`Delete ${modalData.itemName} inventory item?`}
                id={this.state.activeInventoryId}
                paragraph={`Please confirm that you'd like to delete ${modalData.itemName} from the inventory list. You won't be able to undo this action.`}
              />
            )}
            <div className="warehouse-details">
              <div className="warehouse-details__container">
                <div className="warehouse-details__header">
                  <div className="warehouse-details__wrapper">
                    <Link className="warehouse-details__link" to="/warehouse">
                      <img
                        src={backArrow}
                        alt="Back Arrow to return to warehouse page"
                        className="warehouse-details__back-icon"
                      />
                    </Link>
                    <h2 className="warehouse-details__title">{city}</h2>
                  </div>

                  <Link
                    className="warehouse-details__edit-link"
                    to={`/warehouse/${id}/edit`}
                  >
                    <img
                      src={editHead}
                      alt="Edit Warehouse Details"
                      className="warehouse-details__edit"
                    />
                    <p className="warehouse-details__text">Edit</p>
                  </Link>
                </div>

                <div className="warehouse-info">
                  <div className="warehouse-info__container">
                    <h4 className="warehouse-info__title">WAREHOUSE ADDRESS</h4>
                    <p className="warehouse-info__content">
                      {address}, {city}, {country}
                    </p>
                  </div>
                  <div className="warehouse-info__wrapper">
                    <div className="warehouse-info__left">
                      <h4 className="warehouse-info__title">CONTACT NAME:</h4>
                      <p className="warehouse-info__content">{name}</p>
                      <p className="warehouse-info__content">{position}</p>
                    </div>
                    <div className="warehouse-info__right">
                      <h4 className="warehouse-info__title">
                        CONTACT INFORMATION:
                      </h4>
                      <p className="warehouse-info__content">{phone}</p>
                      <p className="warehouse-info__content">{email}</p>
                    </div>
                  </div>
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
                {this.state.warehouseInventory.map((inventory) => {
                  return (
                    <div className="/" key={inventory.id}>
                      <div className="inventory-card">
                        <ul className="inventory-card__content-list">
                          <ul className="inventory-card__sub-list">
                            <li className="inventory-card__list-details">
                              <h4 className="inventory-card__list-title">
                                INVENTORY ITEM
                              </h4>
                              <Link
                                to={`/inventory/${inventory.id}`}
                                className="inventory-card__link"
                              >
                                <div className="inventory-card__link-item">
                                  <div className="inventory-card__link body-medium">
                                    {inventory.itemName}
                                  </div>
                                  <img src={chevron} />
                                </div>
                              </Link>
                            </li>
                            <li className="inventory-card__list-details">
                              <h4 className="inventory-card__list-title">
                                CATEGORY
                              </h4>
                              <p className="inventory-card__info body-medium">
                                {inventory.category}
                              </p>
                            </li>
                          </ul>
                          <ul className="inventory-card__sub-list">
                            <li className="inventory-card__list-details">
                              <h4 className="inventory-card__list-title">
                                STATUS
                              </h4>

                              <p
                                className={
                                  inventory.quantity === 0
                                    ? "out-of-stock inventory-card__info body-small "
                                    : "in-stock inventory-card__info body-small"
                                }
                              >
                                {this.stockCheck(inventory.quantity)}
                              </p>
                            </li>
                            <li className="inventory-card__list-details">
                              <h4 className="inventory-card__list-title">
                                Qty
                              </h4>
                              <p className="inventory-card__info body-medium">
                                {inventory.quantity}
                              </p>
                            </li>
                          </ul>
                        </ul>
                        <div className="inventory-card__buttons">
                          <button
                            type="button"
                            className="inventory-card__button--delete"
                          ></button>

                          <Link to={`/inventory/edit/${inventory.id}`}>
                            <div className="inventory-card__button--edit"></div>
                          </Link>
                        </div>
                      </div>

                      <div className="inventory-card--tablet">
                        <Link to={`/inventory/${inventory.id}`}>
                          <div className="inventory-card__link--tablet body-medium">
                            {inventory.itemName}
                            <img src={chevron} alt="chevron" />
                          </div>
                        </Link>
                        <p className="inventory-card__address--tablet body-medium">
                          {inventory.category}
                        </p>

                        <div className="inventory-card__info--name">
                          <p
                            className={
                              inventory.quantity === 0
                                ? "out-of-stock  body-small"
                                : "in-stock  body-small"
                            }
                          >
                            {this.stockCheck(inventory.quantity)}
                          </p>
                        </div>

                        <div>
                          <p className="inventory-card__info--contact body-medium">
                            {inventory.quantity}
                          </p>
                        </div>
                        <div className="inventory-card__buttons inventory-card__buttons--tablet">
                          <button
                            onClick={() => {
                              this.openModal(inventory.id);
                            }}
                            type="button"
                            className="inventory-card__button--delete"
                          ></button>
                          <Link to={`/inventory/edit/${inventory.id}`}>
                            <div className="inventory-card__button--edit"></div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div>Loading..</div>
        )}
      </>
    );
  }
}

export default WarehouseDetails;
