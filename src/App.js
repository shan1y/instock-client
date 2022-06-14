import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import WareHousePage from "";
// import InventoryPage from "";


class React extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route to="/" exact component={WareHousePage}></Route>
          <Route to="/inventory" component={InventoryPage}></Route>
          <div className="App">
      <h1>This is a font test</h1>
    </div>
        </Switch>
      </BrowserRouter>
    );
  }
}