import React, { useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import check from '../../svg/check.svg';
import edit from '../../svg/edit.svg';
import chevronUp from '../../svg/up.svg';

import './styles.css';

export default props => {

  const [tarefa, setTarefa] = useState(props.tarefa);
  const [altaPrioridade, setAltaPrioridade] = useState(props.altaPrioridade);
  const [hover, setHover] = useState(false);
  const [editing, setEditing] = useState(false);

  const trocaPrioridade = () => {
    setAltaPrioridade(!altaPrioridade);

    props.trocaPrioridade(altaPrioridade, props._id);
  }

  const prioridade =
    <div className={`prioridade ${altaPrioridade ? "alta" : "baixa"}`} onClick={trocaPrioridade}>
      {altaPrioridade ? "Alta" : "Baixa"}
      {altaPrioridade ? <img src={chevronUp} alt="Chevron para cima" /> : ""}
    </div>;

  const editButton =
    <img src={edit} alt={"Editar tarefa"} className="edit" />;

  const editarTarefa = () => {
    setEditing(true);
  }

  const confirmarEdicao = () => {
    setEditing(false);

    props.editarTarefa(tarefa, props._id);
  }

  const handleChange = (e) => {
    setTarefa(e.target.value);
  }

  const paragraph =
    <p onClick={editarTarefa}>{props.tarefa}</p>

  const textArea =
    <TextareaAutosize className="textLike" value={tarefa} onChange={handleChange} placeholder="Nova tarefa" onBlur={confirmarEdicao} autoFocus style={{
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '300',
      cursor: 'pointer',
      resize: 'none',
      color: 'var(--escuro)'
    }} />

  return (
    <div className="taskBox" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={check} alt="Finalizar tarefa" className="check" onClick={() => props.excluirTarefa(props._id)} />
      {editing ? textArea : paragraph}
      {prioridade}
      {hover ? editButton : ""}
    </div >
  );
}