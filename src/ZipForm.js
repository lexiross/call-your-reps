import React, { Component } from 'react';
import {VLayout}            from 'react-flexbox-layout';
import {extend}             from 'lodash';

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

const ERROR_INPUT_STYLE = {
  border: "1px solid #ff1500",
  backgroundColor: "#ffd7d3",
};

const ERROR_TEXT_STYLE = {
  marginTop: "15px",
  color: "#ff1500",
};


export default class ZipForm extends Component {

  componentDidMount () {
    this.refs.input.focus();
  }

  constructor () {
    super();
    this.state = {
      showingError: false,
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.error || nextProps.noReps) {
      this.setState({showingError: true});
    }
  }

  render() {
    const {error, noReps} = this.props;
    const {showingError} = this.state;
    const inputStyle = showingError ? extend({}, INPUT_STYLE, ERROR_INPUT_STYLE) : INPUT_STYLE;
    return (
      <VLayout justifyItems="center">
        <h3 style={HEADER_STYLE}>Enter your zip code</h3>
        <input
          ref="input"
          style={inputStyle}
          type="number"
          onChange={this._onKeyboardInput}
        />
        { showingError && error && !noReps &&
          <div style={ERROR_TEXT_STYLE}>
            Sorry, something went wrong. Try again, or try a different zip code.
          </div>
        }
        { showingError && noReps &&
          <div style={ERROR_TEXT_STYLE}>
            Sorry, we couldn't find any legislators for you. Try a different zip code.
          </div>
        }
      </VLayout>
    );
  }

  _onKeyboardInput = (e) => {
    const value = e.target.value;
    if (value.length >= 5) {
      e.target.value = "";
      this.props.onSubmit(value.slice(0, 5));
    } else if (value.length >= 1) {
      this.setState({showingError: false});
    }
  }
}
