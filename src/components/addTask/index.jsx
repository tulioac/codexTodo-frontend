import React, { useState } from 'react';
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
      <input type="text" placeholder="Nova tarefa" className="textLike" value={nomeDaTarefa} onChange={handleChange} />
      <button className="vazio" onClick={criarTarefa}>
        Criar
    </button>
    </div>
  );
}