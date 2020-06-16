import React, { useState } from 'react';
import check from '../../svg/check.svg';
import edit from '../../svg/edit.svg';
import './styles.css';

export default props => {

  const prioridade = <div className="prioridade">Alta</div>;

  const [hover, setHover] = useState("");

  const editButton = <img src={edit} alt={"Editar tarefa"} className="edit" onClick={() => console.log('Expandir opções')} />;

  // TODO: Ao clicar transformar o título da tarefa em um input 

  const mouseEnters = () => {
    setHover(true);
  }

  const mouseOuts = () => {
    setHover(false)
  }

  return (
    <div className="taskBox" onMouseEnter={mouseEnters} onMouseLeave={mouseOuts}>
      <img src={check} alt="Finalizar tarefa" className="check" onClick={() => props.excluirTarefa(props._id)} />
      <p>{props.tarefa}</p>
      {props.alta ? prioridade : ""}
      {hover ? editButton : ""}
    </div >
  );
}