import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import FooterSection from "./components/FooterSection/FooterSection";
// import WareHousePage from "";
// import InventoryPage from "";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderSection />
        <Switch>
          {/* <Route to="/" exact component={WareHousePage}></Route>
          <Route to="/inventory" component={InventoryPage}></Route> */}
        </Switch>
        <FooterSection />
      </BrowserRouter>
    );
  }
}

export default App;
