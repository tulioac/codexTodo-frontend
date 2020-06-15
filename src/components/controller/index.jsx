import React, { Component } from 'react';

import { HashRouter } from 'react-router-dom';

import Header from '../header';
import Routes from '../routes';

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

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header authenticated={this.state.authenticated} setToken={this.setToken.bind(this)} />
          {/* TODO: Criar logout */}
          <Routes setToken={this.setToken.bind(this)} {...this.state} />
        </div>
      </HashRouter>
    );
  }
}