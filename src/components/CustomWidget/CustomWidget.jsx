import React, { Component } from "react";
import HelloWorld from "../HelloWorld/HelloWorld";
import "./../../../styles.css";

export class CustomWidget extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}

export default CustomWidget;

// global.dashboard.registerWidget("HelloWorld", BaseComponent);
