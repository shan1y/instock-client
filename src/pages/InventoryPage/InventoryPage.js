import "./InventoryPage.scss";
import React from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryComponents/InventoryList/InventoryList";


class InventoryPage extends React.Component {
  state = {
    inventory: [],
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

  render() {
    return (
      <div className="InventoryList__body">
        <InventoryList
          updateStatus={this.statusToggle}
          inventoryList={this.state.inventory}
        />
      </div>
    )
  }
}

export default InventoryPage;
