import React, { Component } from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

export default class Header extends Component {

  logout = () => {
    console.log('Saindo da conta...');

    sessionStorage.removeItem('token');

    console.log('SessionStorage', sessionStorage.getItem('token'));

    this.props.setToken(null);

    // TODO: Enviar para o servidor o token invalidado
  }

  render() {
    const titulo = <h1>To<span className="sublinhado espesso">Do</span> List</h1>

    console.log('Header autenticado', this.props.authenticated);

    const sair = this.props.authenticated ?
      <button className="vazio" id="userLogout" onClick={this.logout}>
        Sair
      </button> :
      "";

    return (
      <header>
        <Link to='/'>
          {titulo}
        </Link >
        {sair}
      </header >
    );
  }
}