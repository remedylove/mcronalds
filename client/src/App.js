import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CreateOrderPage from './pages/CreateOrderPage/CreateOrderPage';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import CartPage from './pages/CartPage/CartPage';
import Error404Page from './pages/404Page/404Page';


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/create-order" component={CreateOrderPage} exact/>
            <Route path="/cart" component={CartPage} exact />
            <Route path="/product-details/:title" component={ProductDetailsPage} exact/>
            <Route component={Error404Page} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
