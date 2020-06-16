import React from 'react';
import check from '../../svg/check.svg';
import './styles.css';

export default props => {

  const prioridade = <div className="prioridade">Alta</div>;

  return (
    <div className="taskBox">
      <img src={check} alt="Finalizar tarefa" className="check" onClick={() => props.excluirTarefa(props._id)} />
      <p>{props.tarefa}</p>
      {props.alta ? prioridade : ""}
    </div>
  );
}