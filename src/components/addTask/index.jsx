import React from 'react';
import './styles.css';

export default props => {
  return <div id="addTask">
    <input type="text" placeholder="Nova tarefa" className="textLike"></input>
    <button className="vazio">
      Criar
    </button>
  </div>
}