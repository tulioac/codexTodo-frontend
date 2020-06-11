import React from 'react';
import './styles.css';

export default header => {

  const titulo = <h1>To<span class="sublinhado">Do</span> List</h1>

  return <header>
    {titulo}
  </header>
}