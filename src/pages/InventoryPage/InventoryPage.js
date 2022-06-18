import "./InventoryPage.scss";
import React from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryComponents/InventoryList/InventoryList";

class InventoryPage extends React.Component {
  state = {
    inventory: [],
    isOpen: false,
    activeInventoryId: null,
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

  // Toggle status function
  statusToggle = (qty) => {
    if (qty === 0) {
      return "Out of Stock";
    } else {
      return "In Stock";
    }
  };

  openModal = (id) => {
    this.setState({ isOpen: true, activeInventoryId: id });
    // window.scrollTo(0, 0);
  };

  closeModal = () => this.setState({ isOpen: false });

  deleteItem = (id) => {
    axios.delete(`http://localhost:8080/inventory/${id}`).then((response) => {
      this.setState({ inventory: response.data, isOpen: false });
    });
  };

  render() {
    if (this.state.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return (
      <div className="InventoryList__body">
        <InventoryList
          updateStatus={this.statusToggle}
          inventoryList={this.state.inventory}
          activeInventoryId={this.state.activeInventoryId}
          isOpen={this.state.isOpen}
          openModal={this.openModal}
          closeModal={this.closeModal}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default InventoryPage;
