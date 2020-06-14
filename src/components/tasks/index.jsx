import React, { Component } from 'react';

export default class Tasks extends Component {
  render() {
    return (
      <h1>{this.props.msg}</h1>
    );
  }
}