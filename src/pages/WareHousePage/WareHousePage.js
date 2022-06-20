import React from "react";
import WarehouseList from "../../components/WarehouseComponents/WarehouseList/WarehouseList";
import "./WarehousePage.scss";

class WareHousePage extends React.Component {
  render() {
    return (
      <div className="WarehouseList__background">
        <div className="WarehouseList__body">
          <WarehouseList />
        </div>
      </div>
    );
  }
}

export default WareHousePage;
