import React, { Component } from 'react';
import {VLayout} from "react-flexbox-layout";

const HEADER_STYLE = {
  fontSize: "20px",
};

const INPUT_STYLE = {
  border: "1px solid #fafafa",
  backgroundColor: "#f3f3f3",
  borderRadius: "6px",
  fontSize: "24px",
  padding: "16px",
};


export default class ZipForm extends Component {

  // constructor () {
  //   super();
  //   this.state = {
  //     zipCode: ""
  //   }
  // }

  render() {
    return (
      <VLayout justifyItems="center">
        <h3 style={HEADER_STYLE}>Enter your zip code</h3>
        <input
          style={INPUT_STYLE}
          type="number"
          onChange={this._onKeyboardInput}
        />
      </VLayout>
    );
  }

  _onKeyboardInput = (e) => {
    const value = e.target.value;
    if (value.length >= 5) {
      this.props.onSubmit(value.slice(0, 5));
    }
  }
}
