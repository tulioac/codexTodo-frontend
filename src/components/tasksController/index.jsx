import React, { Component } from 'react';
import Task from '../task';

export default class Tasks extends Component {
  render() {
    return (
      <div>
        <Task tarefa={"Fazer café da manhã"} alta={true} />
        <Task tarefa={"Donec tempor nulla elit, sodales condimentum mi maximus sed. Curabitur vel mollis metus. Phasellus elit nulla, semper a nibh in."} alta={true} />
        <Task tarefa={"Comprar farofa"} alta={false} />
      </div>
    );
  }
}