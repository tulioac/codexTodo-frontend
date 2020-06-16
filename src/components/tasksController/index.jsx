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

        console.log(this.state);
      })
      .catch(console.log());
  }

  criarTarefa = (tarefa) => {
    console.log('Tarefa recebida', tarefa);

    api.post('/todo', { title: tarefa, priority: "Baixa" }, {
      headers: { 'Authorization': `Bearer ${this.props.token}`, 'Content-Type': 'application/json' }
    })
      .then((response) => {
        this.setState({ todos: [...this.state.todos, response.data] });
        console.log(response);
      })
      .catch(console.log);
  }

  excluirTarefa = (id) => {
    console.log('Excluir tarefa de _id', id);

    api.delete(`/todo/${id}`, { headers: { 'Authorization': `Bearer ${this.props.token}`, 'Content-Type': 'application/json' } })
      .then(response => {
        const newTodo = this.state.todos.filter(todo => todo._id !== id);

        this.setState({ todos: newTodo });
      })
      .catch(console.log);
  }

  editaTarefa = (novaTarefa, _id) => {
    console.log(`Editando a tarefa ${_id} para: ${novaTarefa}`);

    // TODO: Editar tarefa no servidor
    // TODO: Editar tarefa no array
  }

  render() {

    // TODO: Criar opção para ordenar por prioridade ou por nome

    // TODO: Criar esqueleto enquanto carrega as tarefas

    // TODO: Editar tarefa -> Ao clicar nos ... do lado direito expandir card mostrando opções para renomear, e alterar prioridade

    const todos = this.state.todos.map(({ title, priority, _id }) => (
      <Task key={_id} _id={_id} tarefa={title} alta={priority === "Alta"} excluirTarefa={() => this.excluirTarefa(_id)} editaTarefa={this.editaTarefa.bind(this)} />
    ));

    return (
      <div>
        {/* TODO: Se possível assinalar a prioridade ao criar tarefa */}
        <AddTask criarTarefa={this.criarTarefa.bind(this)} />
        <section>
          {todos}
        </section>
      </div>
    );
  }
}