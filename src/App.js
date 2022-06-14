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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
