import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services';

export default class Login extends Component {

  render() {
    return (
      <div>
        <h2>Login</h2>

        <form action="">
          <input type="email" name="email" placeholder="Email" className="caixa" />
          <input type="password" name="senha" placeholder="Senha" className="caixa" />
          <button>Acessar</button>
        </form>

        <div className="extra">
          <p>Não possui conta?</p>
          <Link to='/register'>Cadastre-se</Link>
        </div>
      </div >
    );
  }
} 