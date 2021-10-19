import React, { Component } from "react";
import './App.css';
// import Counter from "./components/Counter";
// import Header from "./components/Header";
import EcommercePage from "./components/shop/EcommercePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import NavBar from "./components/navbar/NavBar"
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductItem from "./components/shop/product-item";
import Counter from "./components/counter/Counter";
import Home from "./components/Home/Home";
export default class App extends Component {
 

  render() {

    return (

      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/products" component={EcommercePage}></Route>
          <Route path="/product/:id" component={ProductItem}></Route>
          <Route path="/counter" component={Counter}></Route>
        </Switch>
        
        {/* <Header/>
        <Counter/> */}
      </Router>
    );
  }
}

