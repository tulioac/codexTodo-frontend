import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
export default props => {

  const titulo = <h1>To<span class="sublinhado espesso">Do</span> List</h1>

  return <header>
    <Link to='/'>
      {titulo}
    </Link>
  </header>
}