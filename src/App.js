import React, { Component } from "react";
import './App.css';
import Counter from "./components/Counter";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
 

  render() {

    return (

      <div>
        <Header/>
        <Counter/>
      </div>
    );
  }
}

