import React from "react";
import WarehouseList from "../../components/WarehouseComponents/WarehouseList/WarehouseList";
// import WarehouseAdd from "../../components/WarehouseComponents/WarehouseAdd/WarehouseAdd";

class WareHousePage extends React.Component {
  render() {
    return (
      <div>
        <div className="InventoryList__body">
          <WarehouseList />
        </div>
      </div>
    );
  }
}

export default WareHousePage;
