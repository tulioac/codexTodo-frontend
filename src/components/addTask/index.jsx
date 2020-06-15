import React from 'react';
import './styles.css';

// TODO: Criar tarefa e passar para o TasksController

export default props => {

  let nomeDaTarefa;

  const criarTarefa = () => {
    console.log('Criar tarefa:', nomeDaTarefa);

    // TODO: Passar tarefa para TasksController
    // TODO: Limpar input
  }

  const handleChange = (e) => {
    nomeDaTarefa = e.target.value;
  }


  return <div id="addTask">
    <input type="text" placeholder="Nova tarefa" className="textLike" value={nomeDaTarefa} onChange={handleChange} />
    <button className="vazio" onClick={criarTarefa}>
      Criar
    </button>
  </div>
}