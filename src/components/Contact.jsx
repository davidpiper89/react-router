import React, { Component } from "react";

class Contact extends Component {
  state = { name: "", text: "" };

  onInput = (e) => {
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value });
  };
  onClick = (e) => {
    this.setState({ name: "", text: "" });
  };

  render() {
    return (
      <>
        <div>Contact us</div>
        <div>Get in touch on:</div>
        <div>
          <p>Or send us message:</p>
          <form onInput={this.onInput}>
            <div>
              <label>
                Full Name:
                <input value={this.state.name} type="text" name="name"></input>
              </label>
            </div>
            <div>
              <label>
                Message:{" "}
                <textarea
                  value={this.state.text}
                  rows="5"
                  cols="60"
                  name="text"
                  placeholder="Enter message"
                ></textarea>
              </label>
            </div>
            <input type="submit" onClick={this.onClick}></input>
          </form>
        </div>
      </>
    );
  }
}

export default Contact;
