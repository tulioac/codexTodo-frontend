import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default props => {

  const titulo = <h1>To<span className="sublinhado espesso">Do</span> List</h1>

  const sair = props.authenticated ?
    <button className="vazio" id="userLogout" onClick={props.logout}>
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