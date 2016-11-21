import React, { Component } from 'react';

const TEXT_STYLE = {
  border: "1px solid #fafafa",
  backgroundColor: "#eee",
};

export default class Script extends Component {

  render() {
    if (!this.props.text) {
      return (
        <div>
          Loading script...
        </div>
      );
    }
    return (
      <div style={TEXT_STYLE}>
        {this.props.text}
      </div>
    );
  }
}


