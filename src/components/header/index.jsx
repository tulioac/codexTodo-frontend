import React from 'react';
import './styles.css';

export default props => {

  const titulo = <h1>To<span class="sublinhado espesso">Do</span> List</h1>

  return <header>
    {titulo}
  </header>
}