import "./InventoryPage.scss";
import React from "react";
import InventoryList from "../../components/InventoryComponents/InventoryList/InventoryList";
import axios from "axios";

class InventoryPage extends React.Component {
  state = {
    inventory: [],
    // inStock: true
  };

  
componentDidMount() {
    axios.get("http://localhost:8080/inventory").then((response) => {
    this.setState({
        inventory: response.data
    })
    }).catch((error) => {
        console.log("Request failed")
    })
}

  // Toggle status function
  statusToggle = (qty) => {
    if ((qty === 0)) {
      // this.setState({
      //     inStock: false
      // })
      return "Out of Stock";
    } else {return "In Stock"}
  };

  render() {
    return <InventoryList updateStatus={this.statusToggle} inventoryList={this.state.inventory}/>;
  }
}

export default InventoryPage;
