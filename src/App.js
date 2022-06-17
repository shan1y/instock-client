import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderSection from "./components/HeaderSection/HeaderSection";
import FooterSection from "./components/FooterSection/FooterSection";
import InventoryAdd from "./components/InventoryComponents/InventoryAdd/InventoryAdd";
import WareHousePage from "./pages/WareHousePage/WareHousePage";
import WarehouseDetails from "./components/WarehouseComponents/WarehouseDetails/WarehouseDetails";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehouseAdd from "./components/WarehouseComponents/WarehouseAdd/WarehouseAdd";
import WarehouseEdit from "./components/WarehouseComponents/WarehouseEdit/WarehouseEdit";
import InventoryItem from "./components/InventoryComponents/InventoryItem/InventoryItem";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderSection />
        <Switch>
          <Route path="/" exact component={WareHousePage} />
          <Route path="/warehouse" exact component={WareHousePage} />
<<<<<<< HEAD
          <Route path="/warehouse/test" component={WarehouseDetails} />
          <Route path="/warehouse/add" component={WarehouseAdd} />
          <Route path="/warehouse/edit" component={WarehouseEdit} />
=======
          <Route path="/warehouse/add" exact component={WarehouseAdd} />
          <Route path="/warehouse/:id/inventory" component={WarehouseDetails} />
>>>>>>> develop

          <Route path="/inventory" exact component={InventoryPage} />
          <Route path="/inventory/add" exact component={InventoryAdd} />
          <Route path="/inventory/:id" exact component={InventoryItem} />
        </Switch>
        <FooterSection />
      </BrowserRouter>
    );
  }
}

export default App;
