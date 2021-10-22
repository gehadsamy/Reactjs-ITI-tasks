import React, { Component } from "react";
import './App.css';
// import Counter from "./views/counter/Counter";
// import TodoList from "./views/todo/Todo";
import EcommercePage from "./components/shop/EcommercePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import NavBar from "./components/navbar/NavBar"
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductItem from "./components/shop/product-item";
import Counter from "./views/counter/Counter";
import TodoList from "./views/todo/Todo";
import Home from "./components/Home/Home";
import Login from "./forms/Login";
import Registration from "./forms/Registration/Registration"
export default class App extends Component {
 

  render() {

    return (

      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/products" component={EcommercePage}></Route>
          <Route path="/product/:id" component={ProductItem}></Route>
          <Route path="/Counter" component={Counter}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Registration" component={Registration}></Route>

        </Switch>
        
        {/* <Header/>
        <Counter/> */}
      </Router>
    );
  }
}

