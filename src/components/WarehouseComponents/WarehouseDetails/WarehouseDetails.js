import "./WarehouseDetails.scss";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import chevron from "../../../assets/Icons/chevron_right-24px.svg";
import backArrow from "../../../assets/Icons/arrow_back-24px.svg";
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
    inventory: "inventory",
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
    const { city, address, country, contact } = this.state.warehouseDetails;
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
    console.log(this.state.warehouseInventory);

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
                paragraph={`Please confirm that you'd like to delete ${modalData.itemName} from the ${this.state.inventory} list. You won't be able to undo this action.`}
              />
            )}

            <div className="new-warehouse__header">
              <Link className="new-warehouse__link" to="/warehouse">
                <img
                  src={backArrow}
                  alt="Back Arrow to return to warehouse page"
                  className="new-warehouse__back-icon"
                />
              </Link>
              <h2 className="new-warehouse__title">{city}</h2>
            </div>
            <div>
              <h4>WAREHOUSE ADDRESS</h4>
              <p>
                {address}, {city}, {country}
              </p>
            </div>
            <div>
              <h4>Contact NAME:</h4>
              <p>{name}</p>
              <p>{position}</p>
            </div>
            <div>
              <h4>CONTACT INFORMATION:</h4>
              <p>{phone}</p>
              <p>{email}</p>
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
            {this.state.warehouseInventory.map((inventory, index) => {
              return (
                <div key={inventory.id}>
                  <div className="warehouseCard">
                    <ul className="warehouseCard__content-list">
                      <ul className="warehouseCard__sub-list">
                        <li className="warehouseCard__list-details">
                          <h4 className="warehouseCard__list-title">
                            INVENTORY ITEM
                          </h4>
                          <Link to={`/inventory/${inventory.id}`}>
                            <div className="warehouseCard__link-item">
                              <div className="warehouseCard__link body-medium">
                                {inventory.itemName}
                              </div>
                              <img src={chevron} />
                            </div>
                          </Link>
                        </li>
                        <li className="warehouseCard__list-details">
                          <h4 className="warehouseCard__list-title">
                            CATEGORY
                          </h4>
                          <p className="warehouseCard__info body-medium">
                            {inventory.category}
                          </p>
                        </li>
                      </ul>
                      <ul className="warehouseCard__sub-list">
                        <li className="warehouseCard__list-details">
                          <h4 className="warehouseCard__list-title">STATUS</h4>
                          <p className="warehouseCard__info body-medium">
                            {this.stockCheck(inventory.quantity)}
                          </p>
                        </li>
                        <li className="warehouseCard__list-details">
                          <h4 className="warehouseCard__list-title">
                            Contact Information
                          </h4>
                          <p className="warehouseCard__info body-medium">
                            {inventory.quantity}
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
                  <div className="warehouseCard--tablet">
                    <Link to={`/inventory/${inventory.id}`}>
                      <div className="warehouseCard__link--tablet body-medium">
                        {inventory.itemName}
                        <img src={chevron} alt="chevron" />
                      </div>
                    </Link>
                    <p className="warehouseCard__address--tablet body-medium">
                      {inventory.category}
                    </p>

                    <p className="warehouseCard__info--name body-medium">
                      {this.stockCheck(inventory.quantity)}
                    </p>
                    <div>
                      <p className="warehouseCard__info--contact body-medium">
                        {inventory.quantity}
                      </p>
                    </div>
                    <div className="warehouseCard__buttons warehouseCard__buttons--tablet">
                      <button
                        onClick={() => {
                          this.openModal(inventory.id);
                        }}
                        type="button"
                        className="warehouseCard__button--delete"
                      ></button>
                      <div className="warehouseCard__button--edit"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div>Hello</div>
        )}
      </>
    );
  }
}

export default WarehouseDetails;
