import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MonchStatistics } from './pages/MonchStatistics/MonchStatistics';
import { Header } from './shared/Header/Header';


function App() {
  return (
    <div className="container">
      <Header/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Monch-Statistics" exact component={MonchStatistics}/>
    </Switch>
    </div>
  );
}

export default App;
