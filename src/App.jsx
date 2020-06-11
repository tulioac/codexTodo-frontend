import React from 'react';

import './styles.css';

import Header from './components/header';
import Router from './components/router';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      {/* Header */}
      {/* Router:  
            Tarefas
            Login
            Cadastro
            Bem vindo
      */}
    </div>
  );
}

export default App;
