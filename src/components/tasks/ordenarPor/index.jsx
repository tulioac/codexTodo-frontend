import React, { useState } from 'react';
import './styles.css';

export default props => {

  let [index, setIndex] = useState(0);
  const [criterio, setCriterio] = useState(props.criterios[index]);

  const trocarCriterio = () => {
    const newIndex = (++index) % props.criterios.length;

    props.trocarCriterio(props.criterios[newIndex]);

    setIndex(newIndex);
    setCriterio(props.criterios[newIndex]);
  }

  const botao =
    <button className="vazio" onClick={trocarCriterio}>
      {criterio}
    </button>

  const divisoria =
    <div id="orderBy">
      <div>
        Ordenar por {botao}
      </div>
    </div>

  return (
    divisoria
  );
}