import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MonchStatistics } from "./pages/MonchStatistics/MonchStatistics";
import { Header } from "./shared/Header/Header";
import { Popup } from "./shared/Popup/Popup";

function App() {
  return (
    <div className="clobal-container">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Monch-Statistics" exact component={MonchStatistics} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
