import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class LoggedRoute extends Component {

  render() {
    const { component: Component, authenticated, ...props } = this.props;

    const comp = <Component {...props} />

    return (
      <Route render={props => (authenticated ? comp : <Redirect to="/welcome" />)} />
    );
  }
}