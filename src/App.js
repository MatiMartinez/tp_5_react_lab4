import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Address from './containers/Address';
import Products from './containers/Products';
import Product from './containers/Product';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/maps" component={Address}></Route>
      <Route path="/products" component={Products}></Route>
      <Route path="/product/:id" component={Product}></Route>
    </Switch>
  );
}

export default App;
