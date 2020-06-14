import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Welcome from '../welcome';
import Login from '../login';
import Register from '../register';
import Tasks from '../tasksController';
import LoggedRoute from '../loggedRoute';

export default class Routes extends Component {
  render() {
    return (
      <div id="dashboard" >
        <Switch>
          {/* Se tiver logado só redirecionar para Tasks, caso contrário oferecer as outras urls */}
          {/* Bloco if */}
          <Route exact path='/' component={this.props.authenticated ? Tasks : Welcome} />

          {/* Bloco else */}
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    );
  }
}