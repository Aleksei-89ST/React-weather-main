import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MonchStatistics } from './pages/MonchStatistics/MonchStatistics';


function App() {
  return (
    <div className="App">Hello
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Monch-Statistics" exact component={MonchStatistics}/>
    </Switch>
    </div>
  );
}

export default App;
