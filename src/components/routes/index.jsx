import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Welcome from '../welcome';
import Login from '../login';
import Register from '../register';
import Tasks from '../tasks';

export default props =>
  <div id="dashboard">
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/tasks' component={Tasks} />
      <Redirect from='*' to='/' />
    </Switch>
  </div>