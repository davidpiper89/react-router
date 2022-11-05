import React, { Component } from "react";
import helpImg from "../images/Help.jpg";

class Help extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={helpImg} alt="help"></img>
      </div>
    );
  }
}

export default Help;
