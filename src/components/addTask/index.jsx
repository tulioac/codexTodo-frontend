import React, { useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import './styles.css';

export default props => {

  const [nomeDaTarefa, setNomeDaTarefa] = useState("");

  const criarTarefa = () => {
    console.log('Criar tarefa:', nomeDaTarefa);

    props.criarTarefa(nomeDaTarefa);

    setNomeDaTarefa("");
  }

  const handleChange = (e) => {
    setNomeDaTarefa(e.target.value);
  }

  return (
    <div id="addTask">
      <TextareaAutosize className="textLike" value={nomeDaTarefa} onChange={handleChange} placeholder="Nova tarefa" style={{
        backgroundColor: 'transparent',
        border: 'none',
        padding: '10px',
        fontSize: '1rem',
        cursor: 'pointer',
        minWidth: '275px',
        resize: 'none',
      }} />
      <button className="vazio" onClick={criarTarefa}>
        Criar
    </button>
    </div>
  );
}