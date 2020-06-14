import React, { Component } from 'react';

import { HashRouter } from 'react-router-dom';

import Header from '../header';
import Routes from '../routes';

export default class Controller extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Routes />
          {/* Header */}
          {/* Router:  
            Tarefas
            Login
            Cadastro
            Bem vindo
          */}
        </div>
      </HashRouter>
    );
  }
}


