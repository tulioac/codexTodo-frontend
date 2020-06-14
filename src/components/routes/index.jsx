import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Welcome from '../welcome';
import Login from '../login';
import Register from '../register';
import Tasks from '../tasks';
import ProtectedRoute from '../protectedRoute';


export default props =>
  <div id="dashboard">
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <ProtectedRoute path='/tasks' component={Tasks} msg={"Isso é um teste"} authenticated={false} />
      <Redirect from='*' to='/' />
    </Switch>
  </div>