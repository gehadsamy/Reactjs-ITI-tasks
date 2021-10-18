import { Button } from "react-bootstrap";
import React, { Component } from "react";

export default class Counting extends Component {

  render() {
    return <div className="buttons">
<Button  variant="outline-danger" onClick={this.props.action}>{this.props.title}</Button>
    </div>
    
  }
}
