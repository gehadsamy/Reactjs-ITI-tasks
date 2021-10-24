
import React, { Component } from "react";
import Counting from "./Counting";

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
          count: 0,
        
        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        });
    };
  render() {
      let {count} = this.state;
    return (
        <div  md="auto count__body">
            <h1>Counter</h1>
            <div className="count__app">
            <Counting action={this.incrementCount} title={"+"}/>
            <h2>{count}</h2> 
            <Counting action={this.decrementCount} title={"-"}/>
            </div>
         
        </div>
    )
  }
}