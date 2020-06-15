import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Welcome from '../welcome';
import Login from '../login';
import Register from '../register';
import Tasks from '../tasksController';

export default class Routes extends Component {

  render() {
    let rota;

    if (this.props.authenticated) {
      rota =
        <Switch>
          <Route exact path='/' render={props => (<Tasks token={this.props.token} />)} />;
          <Redirect from='*' to='/' />;
        </Switch>
    } else {
      rota = <Switch>
        <Route exact path='/' component={Welcome} />;
        <Route path='/login' render={props => (<Login {...this.props} />)} />
        <Route path='/register' render={props => (<Register {...this.props} />)} />
        <Redirect from='*' to='/' />
      </Switch>
    }

    return (
      <div id="dashboard" >
        {rota}
      </div>
    );
  }
}