import React, { Component } from 'react';

import { HashRouter } from 'react-router-dom';

import Header from '../header';
import Routes from '../routes';

export default class Controller extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      token: ""
    }
  }

  setToken = (newToken) => {
    this.setState({ token: newToken });
    this.state.token ?
      this.setState({ authenticated: true }) :
      this.setState({ authenticated: false });
  }

  render() {
    console.log('Controller', this.state);

    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Routes setToken={this.setToken.bind(this)} {...this.state} />
        </div>
      </HashRouter>
    );
  }
}


