import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import FooterSection from "./components/FooterSection/FooterSection";
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
<<<<<<< HEAD
          <Route path="/inventory" component={InventoryPage}></Route>
          {/* Left this in from FAM-2 PR, can remove anytime*/}
          <Route path="/warehouse/add" exact component={WarehouseAdd} />
=======
          {/* <Route to="/inventory" component={InventoryPage}></Route> */}
          {/* Left this in from FAM-2 PR, can remove anytime*/}
          <Route path="/warehouse/add" component={WarehouseAdd} />
>>>>>>> develop
        </Switch>
        <FooterSection />
      </BrowserRouter>
    );
  }
}

export default App;
