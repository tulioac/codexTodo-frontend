import React, { useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import check from '../../svg/check.svg';
import edit from '../../svg/edit.svg';
import './styles.css';



export default props => {

  const [tarefa, setTarefa] = useState(props.tarefa);
  const [hover, setHover] = useState(false);
  const [editing, setEditing] = useState(false);

  const prioridade = <div className="prioridade">Alta</div>;

  const editarTarefa = () => {
    setEditing(true);
  }

  const confirmarEdicao = () => {
    setEditing(false);

    props.editaTarefa(tarefa, props._id);
  }

  const editButton = <img src={edit} alt={"Editar tarefa"} className="edit" onClick={editarTarefa} />;

  const confirmButton = <img src={edit} alt={"Confirmar edição"} className="edit" onClick={editarTarefa} />;

  const configButton = editing ? confirmButton : editButton;

  const handleChange = (e) => {
    setTarefa(e.target.value);
    console.log(tarefa);
  }

  const textArea = <TextareaAutosize className="textLike" value={tarefa} onChange={handleChange} placeholder="Nova tarefa" onBlur={confirmarEdicao} style={{
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '300',
    cursor: 'pointer',
    resize: 'none',
    color: 'var(--escuro)'
  }} />

  // TODO: Ao clicar transformar o título da tarefa em um input 

  // TODO: Passar alteração para o TaskController

  return (
    <div className="taskBox" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={check} alt="Finalizar tarefa" className="check" onClick={() => props.excluirTarefa(props._id)} />
      {editing ? textArea : <p>{props.tarefa}</p>}
      {props.alta ? prioridade : ""}
      {hover ? configButton : ""}
    </div >
  );
}