import "./WarehouseAdd.scss";
import { Component } from "react";
import { Link } from "react-router-dom";

import backArrow from "../../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../../assets/Icons/error-24px.svg";
import axios from "axios";

const numberRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

class WarehouseAdd extends Component {
  state = {
    warehouseName: "",
    address: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phone: "",
    email: "",
    phoneError: "",
    emailError: "",
    isFormSubmitted: "",
  };

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    return;
  }

  handleWarehouseName = (event) => {
    const inputValue = event.target.value;

    if (inputValue.trim() === "") {
      this.setState({ warehouseNameCheck: true });
    } else {
      this.setState({ warehouseNameCheck: false });
    }
  };

  handleAddress = (event) => {
    const inputValue = event.target.value;
    if (inputValue.trim() === "") {
      this.setState({ addressCheck: true });
    } else {
      this.setState({ addressCheck: false });
    }
  };

  handleCity = (event) => {
    const inputValue = event.target.value;

    if (inputValue.trim() === "") {
      this.setState({ cityCheck: true });
    } else {
      this.setState({ cityCheck: false });
    }
  };

  handleCountry = (event) => {
    const inputValue = event.target.value;

    if (inputValue.trim() === "") {
      this.setState({ countryCheck: true });
    } else {
      this.setState({ countryCheck: false });
    }
  };

  handleContactName = (event) => {
    const inputValue = event.target.value;

    if (inputValue.trim() === "") {
      this.setState({ contactNameCheck: true });
    } else {
      this.setState({ contactNameCheck: false });
    }
  };

  handlePosition = (event) => {
    const inputValue = event.target.value;

    if (inputValue.trim() === "") {
      this.setState({ positionCheck: true });
    } else {
      this.setState({ positionCheck: false });
    }
  };

  handlePhoneNumber = (event) => {
    const inputValue = event.target.value;
    const numberRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (inputValue.trim() === "") {
      this.setState({ numberCheck: true });
    } else if (!numberRegex.test(inputValue)) {
      this.setState({ numberCheck: true });
    } else {
      this.setState({ numberCheck: false });
    }
  };

  handleEmail = (event) => {
    const inputValue = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputValue.trim() === "") {
      this.setState({ emailCheck: true });
    } else if (!emailRegex.test(inputValue)) {
      this.setState({ emailCheck: true });
    } else {
      this.setState({ emailCheck: false });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.warehouseName.value.trim() === "") {
      this.setState({ warehouseNameCheck: true });
    }
    if (event.target.address.value.trim() === "") {
      this.setState({ addressCheck: true });
    }

    if (event.target.city.value.trim() === "") {
      this.setState({ cityCheck: true });
    }

    if (event.target.country.value.trim() === "") {
      this.setState({ countryCheck: true });
    }

    if (event.target.contactName.value.trim() === "") {
      this.setState({ contactNameCheck: true });
    }

    if (event.target.position.value.trim() === "") {
      this.setState({ positionCheck: true });
    }

    if (event.target.phone.value.trim() === "") {
      this.setState({ numberCheck: true });
    }

    if (event.target.email.value.trim() === "") {
      this.setState({ emailCheck: true });
    }

    if (
      !this.state.warehouseNameCheck &&
      !this.state.addressCheck &&
      !this.state.cityCheck &&
      !this.state.numberCheck &&
      !this.state.positionCheck &&
      !this.state.emailCheck &&
      !this.state.countryCheck &&
      event.target.warehouseName.value &&
      event.target.address.value &&
      event.target.city.value &&
      event.target.country.value &&
      event.target.position.value &&
      event.target.phone.value &&
      event.target.email.value
    ) {
      axios
        .post("http://localhost:8080/warehouse", {
          warehouseName: event.target.warehouseName.value,
          address: event.target.address.value,
          city: event.target.city.value,
          country: event.target.country.value,
          contactName: event.target.contactName.value,
          position: event.target.position.value,
          phone: event.target.phone.value,
          email: event.target.email.value,
        })
        .catch((error) => console.log(error));
      this.props.history.push("/warehouse");
    }

    // CREATING POST REQUEST TO API
  };

  render() {
    return (
      <section className="new-warehouse">
        <div className="new-warehouse__header">
          <Link to="/warehouse">
            <img
              src={backArrow}
              alt="Back Arrow to return to warehouse page"
              className="new-warehouse__back-icon"
            />
          </Link>
          <h1 className="new-warehouse__title">Add New Warehouse</h1>
        </div>

        <form className="new-warehouse-form" onSubmit={this.handleSubmit}>
          <div>
            <h2>Warehouse Details</h2>
            <label>
              Warehouse Name
              <input
                type="text"
                name="warehouseName"
                placeholder="Warehouse Name"
                onChange={this.handleWarehouseName}
              />
            </label>
            {this.state.warehouseNameCheck && (
              <div className="error">
                <img src={errorIcon} alt="Error Icon" className="error__icon" />
                <p className="error__text">Field is Required</p>
              </div>
            )}

            <label>
              Street Address
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                onChange={this.handleAddress}
              />
            </label>
            {this.state.addressCheck && (
              <div className="error">
                <img src={errorIcon} alt="Error Icon" className="error__icon" />
                <p className="error__text">Field is Required</p>
              </div>
            )}

            <label>
              City
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={this.handleCity}
              />
            </label>
            {this.state.cityCheck && (
              <div className="error">
                <img src={errorIcon} alt="Error Icon" className="error__icon" />
                <p className="error__text">Field is Required</p>
              </div>
            )}

            <label>
              Country
              <input
                type="text"
                name="country"
                placeholder="Country"
                onChange={this.handleCountry}
              />
            </label>
            {this.state.countryCheck && (
              <div className="error">
                <img src={errorIcon} alt="Error Icon" className="error__icon" />
                <p className="error__text">Field is Required</p>
              </div>
            )}
          </div>

          <div>
            <h2>Contact Details</h2>
            <label>
              Contact Name
              <input
                type="text"
                name="contactName"
                placeholder="Contact Name"
                onChange={this.handleContactName}
              />
            </label>
            {this.state.contactNameCheck && (
              <div className="error">
                <img src={errorIcon} alt="Error Icon" className="error__icon" />
                <p className="error__text">Field is Required</p>
              </div>
            )}

            <label>
              Position
              <input
                type="text"
                name="position"
                placeholder="Position"
                onChange={this.handlePosition}
              />
            </label>
            {this.state.positionCheck && (
              <div className="error">
                <img src={errorIcon} alt="Error Icon" className="error__icon" />
                <p className="error__text">Field is Required</p>
              </div>
            )}

            <label>
              Phone Number
              <input
                name="phone"
                type="number"
                placeholder="Phone Number"
                onChange={this.handlePhoneNumber}
              />
            </label>
            {this.state.numberCheck && (
              <div className="error">
                <img src={errorIcon} alt="Error Icon" className="error__icon" />
                <p className="error__text">Phone Number is Required</p>
              </div>
            )}

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleEmail}
              />
            </label>
            {this.state.emailCheck && (
              <div className="error">
                <img src={errorIcon} alt="Error Icon" className="error__icon" />
                <p className="error__text">Email is Required</p>
              </div>
            )}
          </div>

          <button>Cancel</button>

          <button type="submit">+ Add Warehouse</button>
        </form>
      </section>
    );
  }
}

export default WarehouseAdd;
