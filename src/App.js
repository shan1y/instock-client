import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import FooterSection from "./components/FooterSection/FooterSection";
import WareHousePage from "./pages/WareHousePage/WareHousePage";

import WarehouseAdd from "./components/WarehouseComponents/WarehouseAdd/WarehouseAdd";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderSection />
        <Switch>
          <Route to="/" exact component={WareHousePage}></Route>
          {/* <Route to="/inventory" component={InventoryPage}></Route> */}
          {/* Left this in from FAM-2 PR, can remove anytime*/}
          <Route to="/warehouse/add" exact component={WarehouseAdd} />
        </Switch>
        <FooterSection />
      </BrowserRouter>
    );
  }
}

export default App;
