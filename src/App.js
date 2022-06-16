import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderSection from "./components/HeaderSection/HeaderSection";
import FooterSection from "./components/FooterSection/FooterSection";
import WareHousePage from "./pages/WareHousePage/WareHousePage";
import WarehouseDetails from "./components/WarehouseComponents/WarehouseDetails/WarehouseDetails";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehouseAdd from "./components/WarehouseComponents/WarehouseAdd/WarehouseAdd";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderSection />
        <Switch>
          <Route path="/" exact component={WareHousePage} />
          <Route path="/warehouse/test" component={WarehouseDetails} />
          <Route path="/warehouse/add" component={WarehouseAdd} />
          <Route to="/inventory" component={InventoryPage}></Route>
        </Switch>
        <FooterSection />
      </BrowserRouter>
    );
  }
}

export default App;
