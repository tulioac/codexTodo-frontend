import React from 'react';
import './styles.css';
import plus from '../../svg/plus.svg';
import plusFilled from '../../svg/plusFilled.svg';

export default props => {
  return <div className="center">
    <img src={plus} />
    <input type="text" placeholder="Adicionar tarefa" className="textLike"></input>
  </div>
}