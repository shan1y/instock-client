import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import FooterSection from "./components/FooterSection/FooterSection";
import InventoryAdd from "./components/InventoryComponents/InventoryAdd/InventoryAdd";
import WareHousePage from "./pages/WareHousePage/WareHousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";


import WarehouseAdd from "./components/WarehouseComponents/WarehouseAdd/WarehouseAdd";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderSection />
        <Switch>
          <Route path="/" exact component={WareHousePage}></Route>
          <Route path="/warehouse/add" component={WarehouseAdd} />
          <Route path="/inventory" exact component={InventoryPage}></Route>
          <Route path="/inventory/add" component={InventoryAdd}></Route>
        </Switch>
        <FooterSection />
      </BrowserRouter>
    );
  }
}

export default App;
