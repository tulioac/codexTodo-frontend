import React, { Component } from 'react';
import Task from '../task';
import AddTask from '../addTask';

import api from '../../services';

export default class Tasks extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    api.get('/todo', {
      headers: { 'Authorization': `Bearer ${this.props.token}`, 'Content-Type': 'application/json' }
    })
      .then(response => {
        const { todos } = response.data;
        this.setState({ todos });
      })
      .catch(console.log());
  }

  criarTarefa = (tarefa) => {

  }

  render() {

    // TODO: Criar opção para ordenar por prioridade ou por nome

    // TODO: Criar esqueleto enquanto carrega as tarefas

    // TODO: Deletar tarefa

    // TODO: Editar tarefa -> Ao clicar nos ... do lado direito expandir card mostrando opções para renomear, e alterar prioridade

    const todos = this.state.todos.map(({ title, priority, _id }) => (
      <Task key={_id} tarefa={title} alta={priority === "Alta"} />
    ));

    return (
      <div>
        {/* TODO: Se possível dar prioridade ao criar tarefa */}
        <AddTask criarTarefa={this.criarTarefa.bind(this)} />
        <section>
          {todos}
        </section>
      </div>
    );
  }
}