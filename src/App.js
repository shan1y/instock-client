import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import FooterSection from "./components/FooterSection/FooterSection";
import WareHousePage from "./pages/WareHousePage/WareHousePage";
import WarehouseDetails from "./components/WarehouseComponents/WarehouseDetails/WarehouseDetails";

import WarehouseAdd from "./components/WarehouseComponents/WarehouseAdd/WarehouseAdd";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderSection />
        <Switch>
          <Route path="/" exact component={WareHousePage} />
          <Route path="/warehouse/test" component={WarehouseDetails} />
          {/* <Route to="/inventory" component={InventoryPage}></Route> */}
          {/* Left this in from FAM-2 PR, can remove anytime*/}
          <Route path="/warehouse/add" component={WarehouseAdd} />
        </Switch>
        <FooterSection />
      </BrowserRouter>
    );
  }
}

export default App;
