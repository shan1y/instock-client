import React from "react";
import WarehouseList from "../../components/WarehouseComponents/WarehouseList/WarehouseList";
import WarehouseAdd from "../../components/WarehouseComponents/WarehouseAdd/WarehouseAdd";

import axios from "axios";

class WareHousePage extends React.Component {
  state = { warehouseList: null };

  componentDidMount() {
    axios
      .get("http://localhost:8080/warehouse")
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .then((warehouseData) => {
        this.setState({
          warehouseList: warehouseData,
        });
      });
  }

  render() {
    const { warehouseList } = this.state;
    return (
      <div>
        {warehouseList && (
          <WarehouseList warehouseList={this.state.warehouseList} />
        <WarehouseAdd />
        )}
      </div>
    );
  }




