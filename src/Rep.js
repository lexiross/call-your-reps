import React, { Component } from 'react';
import { HLayout, HLayoutItem } from 'react-flexbox-layout';

export default class Rep extends Component {

  render() {
    const {first_name, last_name, phone} = this.props.rep;
    const link = `phone:${phone}`
    return (
      <HLayout alignItems="middle">
        <div>
          <div>{first_name} {last_name}</div>
          <div>{this._renderTitle()}</div>
        </div>
        <HLayoutItem flexGrow />
        <a href={link}>
          {phone}
        </a>
      </HLayout>
    );
  }

  _renderTitle () {
    const {chamber, district, state_name, party} = this.props.rep;
    if (chamber === "senate") {
      return `Senator (${party} ${state_name})`;
    } else {
      return `Representative (${party} ${state_name}-${district})`;
    }
  }
}

