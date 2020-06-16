import React, { Component } from 'react';

import { HashRouter } from 'react-router-dom';

import Header from '../header';
import Routes from '../routes';

import api from '../../services';

export default class Controller extends Component {

  constructor(props) {
    super(props);

    let token = sessionStorage.getItem('token') || '';

    token ?
      this.state = {
        authenticated: true,
        token
      } :
      this.state = {
        authenticated: false,
        token
      }
  }

  setToken = (newToken) => {
    this.setState({ token: newToken });

    newToken ?
      this.setState({ authenticated: true }) :
      this.setState({ authenticated: false });
  }

  logout = () => {
    const token = sessionStorage.getItem('token');

    api.post('/auth/logout', {}, { headers: { Authorization: `Bearer ${token}` } })
      .then(console.log)
      .catch(console.log)

    sessionStorage.removeItem('token');
    this.setToken(null);
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header authenticated={this.state.authenticated} logout={this.logout.bind(this)} />
          <Routes setToken={this.setToken.bind(this)} {...this.state} />
        </div>
      </HashRouter>
    );
  }
}