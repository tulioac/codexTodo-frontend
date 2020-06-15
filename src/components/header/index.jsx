import React, { Component } from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

export default class Header extends Component {

  logout = () => {
    console.log('Saindo da conta...');
  }

  render() {
    const titulo = <h1>To<span className="sublinhado espesso">Do</span> List</h1>

    const sair = this.props.authenticated ? "Sair" : "";

    return <header>
      <Link to='/'>
        {titulo}
      </Link >
      <button className="vazio" id="user" onClick={this.logout}>
        {sair}
      </button>
    </header >
  }
}