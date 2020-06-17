import React, { Component } from 'react';

import Task from '../task';
import AddTask from '../addTask';
import OrdernarPor from '../ordenarPor';
import Skeleton from '../skeleton';

import api from '../../services';

export default class Tasks extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      criterios: ["Mais Antiga", "Mais Nova", "Prioridade"],
      criterioAtual: "Prioridade",
      loading: true
    }
  }

  componentDidMount() {

    api.get('/todo', {
      headers: {
        'Authorization': `Bearer ${this.props.token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        const { todos } = response.data;
        this.setState({ todos });

        console.log(this.state);
      })
      .catch(console.log)
      .finally(() => this.setState({ loading: false }));
  }

  criarTarefa = (novoTitulo) => {
    let novaTarefa = { title: novoTitulo, priority: "Baixa" };

    this.setState({ todos: [...this.state.todos, novaTarefa] })

    api.post('/todo', {
      title: novoTitulo,
      priority: "Baixa"
    }, {
      headers: {
        'Authorization': `Bearer ${this.props.token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        const index = this.state.todos.indexOf(novaTarefa);

        const newTodos = this.state.todos;

        novaTarefa = { ...response.data };

        newTodos.splice(index, 1, novaTarefa);

        this.setState({ todos: newTodos });
      })
      .catch(console.log);
  }

  excluirTarefa = (id) => {
    const newTodo = this.state.todos.filter(todo => todo._id !== id);

    this.setState({ todos: newTodo });

    api.delete(`/todo/${id}`, {
      headers: {
        'Authorization': `Bearer ${this.props.token}`,
        'Content-Type': 'application/json'
      }
    })
      .then()
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

    api.put(`/todo/${_id}`, {
      title: novoTitulo
    }, {
      headers: {
        'Authorization': `Bearer ${this.props.token}`,
        'Content-Type': 'application/json'
      }
    })
      .then()
      .catch(console.log);
  }

  trocaPrioridade = (novaPrioridade, _id) => {

    const prioridade = novaPrioridade ? "Baixa" : "Alta";

    const index = this.state.todos.findIndex(todo => todo._id === _id);

    const newTodos = this.state.todos;

    const novaTarefa = { ...this.state.todos[index], priority: prioridade }

    newTodos.splice(index, 1, novaTarefa);

    this.setState({
      todos: newTodos
    });

    api.put(`/todo/${_id}`, { priority: prioridade }, {
      headers: { 'Authorization': `Bearer ${this.props.token}`, 'Content-Type': 'application/json' }
    })
      .then()
      .catch(console.log);
  }

  trocarCriterio = (novoCriterio) => {
    this.setState({ criterio: novoCriterio })
  }

  renderOrdenado = () => {
    const { criterio } = this.state;

    console.log('Ordenando por:', criterio);

    let tarefasOrdenadas;

    if (criterio === "Prioridade") {
      const comparaPrioridade = ({ priority: prioridadeA }, { priority: prioridadeB }) => {
        if (prioridadeA < prioridadeB)
          return -1;
        if (prioridadeA > prioridadeB)
          return 1;
        return 0;
      }

      tarefasOrdenadas = [...this.state.todos].sort(comparaPrioridade);
    } else if (criterio === "Mais Nova") {
      tarefasOrdenadas = [...this.state.todos].reverse();
    } else {
      tarefasOrdenadas = [...this.state.todos];
    }

    return tarefasOrdenadas;
  }

  render() {

    const tasksOrdenadas = this.renderOrdenado().map(({ title, priority, _id }, index) => (
      <Task key={_id} _id={_id} tarefa={title} altaPrioridade={priority === "Alta"} excluirTarefa={() => this.excluirTarefa(_id)} editarTarefa={this.editarTarefa.bind(this)} trocaPrioridade={this.trocaPrioridade.bind(this)} />
    ));

    const skeleton = <div>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>;

    const tasks = this.state.loading ? skeleton : tasksOrdenadas;

    return (
      <div id="tasksDash">
        <OrdernarPor criterios={this.state.criterios} trocarCriterio={this.trocarCriterio.bind(this)} />
        {/* TODO: Se possível assinalar a prioridade ao criar tarefa */}
        <AddTask criarTarefa={this.criarTarefa.bind(this)} />
        <section>
          {/* TODO: Colocar mensagem para caso não tenha nenhuma task */}
          {tasks}
        </section>
      </div>
    );
  }
}