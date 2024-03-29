import "./WarehouseDetails.scss";
import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import chevron from "../../../assets/Icons/chevron_right-24px.svg";
import backArrow from "../../../assets/Icons/arrow_back-24px.svg";
import editHead from "../../../assets/Icons/edit_second-24px.svg";
import edit from "../../../assets/Icons/edit-24px.svg";
import DeleteModal from "../../DeleteModal/DeleteModal";
import InventoryList from "../../InventoryComponents/InventoryList/InventoryList";

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

  statusToggle = (stock) => (stock === 0 ? "OUT OF STOCK" : "IN STOCK");

  statusStyleToggle = (stock) =>
    stock === 0
      ? "out-of-stock inventory-card__info body-small "
      : "in-stock inventory-card__info body-small";

  openModal = (id) => {
    this.setState({ isOpen: true, activeInventoryId: id });
    window.scrollTo(0, 0);
  };

  closeModal = () => this.setState({ isOpen: false });

  deleteItem = (id) => {
    axios.delete(`http://localhost:8080/inventory/${id}`);

    axios
      .get(
        `http://localhost:8080/warehouse/${this.props.match.params.id}/inventory`
      )
      .then((response) => {
        this.setState({
          warehouseInventory: response.data,
          isOpen: false,
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

                <InventoryList
                  updateStatus={this.statusToggle}
                  statusStyle={this.statusStyleToggle}
                  isOpen={this.state.isOpen}
                  openModal={this.openModal}
                  closeModal={this.closeModal}
                  deleteItem={this.deleteItem}
                  activeInventoryId={this.state.activeInventoryId}
                  inventoryList={this.state.warehouseInventory}
                />
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
