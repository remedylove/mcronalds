import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/home/home';
import CreateOrderPage from './pages/createOrder/createOrder';


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/create-order" component={CreateOrderPage} exact/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
