import React, { useState } from 'react';
import './styles.css';

// TODO: Criar tarefa e passar para o TasksController

export default props => {

  const [nomeDaTarefa, setNomeDaTarefa] = useState("");

  const criarTarefa = () => {
    console.log('Criar tarefa:', nomeDaTarefa);

    props.criarTarefa(nomeDaTarefa);
    // TODO: Passar tarefa para TasksController

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