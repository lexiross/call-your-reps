import React, { Component } from 'react';

const TEXT_STYLE = {
  border: "2px solid #890bdd",
  borderRadius: "5px",
  backgroundColor: "#eee",
  padding: "10px",
  marginBottom: "15px",
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


