import React from 'react';
import { HashRouter } from 'react-router-dom';

import './styles.css';

import Header from './components/header';
import Routes from './components/routes';

function App() {
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

export default App;
