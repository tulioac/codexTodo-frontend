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

  criarTarefa = (novoTitulo) => {
    console.log('Tarefa recebida', novoTitulo);

    // TODO: Criar tarefa básica para render e depois adicionar com informações do servidor 

    let novaTarefa = { title: novoTitulo, priority: "Baixa" };

    this.setState({ todos: [...this.state.todos, novaTarefa] })

    api.post('/todo', { title: novoTitulo, priority: "Baixa" }, {
      headers: { 'Authorization': `Bearer ${this.props.token}`, 'Content-Type': 'application/json' }
    })
      .then((response) => {
        const index = this.state.todos.indexOf(novaTarefa);

        const newTodos = this.state.todos;

        novaTarefa = { ...response.data };

        newTodos.splice(index, 1, novaTarefa);

        this.setState({
          todos: newTodos
        });
      })
      .catch(console.log);
  }

  excluirTarefa = (id) => {
    const newTodo = this.state.todos.filter(todo => todo._id !== id);

    this.setState({ todos: newTodo });

    api.delete(`/todo/${id}`, { headers: { 'Authorization': `Bearer ${this.props.token}`, 'Content-Type': 'application/json' } })
      .then(response => {

      })
      .catch(console.log);
  }

  editarTarefa = (novoTitulo, _id) => {
    const index = this.state.todos.findIndex(todo => todo._id === _id);

    const newTodos = this.state.todos;

    const novaTarefa = { ...this.state.todos[index], title: novoTitulo }

    newTodos.splice(index, 1, novaTarefa);

    this.setState({
      todos: newTodos
    });

    // TODO: Passar a prioridade quando for possível alterá-la -> priority: "Baixa / Alta" 

    api.put(`/todo/${_id}`, { title: novoTitulo }, {
      headers: { 'Authorization': `Bearer ${this.props.token}`, 'Content-Type': 'application/json' }
    })
      .then()
      .catch(console.log);
  }

  render() {

    // TODO: Criar opção para ordenar por prioridade ou por nome

    // TODO: Criar esqueleto enquanto carrega as tarefas

    // TODO: Editar tarefa -> Ao clicar nos ... do lado direito expandir card mostrando opções para renomear, e alterar prioridade

    const todos = this.state.todos.map(({ title, priority, _id }) => (
      <Task key={_id} _id={_id} tarefa={title} alta={priority === "Alta"} excluirTarefa={() => this.excluirTarefa(_id)} editarTarefa={this.editarTarefa.bind(this)} />
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