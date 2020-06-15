import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import api from '../../services';

export default class Header extends Component {

  logout = () => {
    console.log('Fazendo logout...');

    const token = sessionStorage.getItem('token');

    api.post('/auth/logout', {}, { headers: { Authorization: `Bearer ${token}` } })
      .then(console.log)
      .catch(console.log)

    sessionStorage.removeItem('token');
    this.props.setToken(null);

    // TODO: Enviar para o servidor o token invalidado
  }

  render() {
    const titulo = <h1>To<span className="sublinhado espesso">Do</span> List</h1>

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