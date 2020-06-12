import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();

    // TODO: Tratar resposta do servidor

    api.post('/auth/register', { ...this.state }, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        console.log(response)
      })
      .catch(error => {
        console.log(error.response)
      });

    // this.resetSubmit();
  }

  resetSubmit = () => {
    // FIXME
    this.setState = ({
      name: "",
      email: "",
      password: ""
    });

    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2>Cadastro</h2>

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Nome" className="caixa" value={this.state.name} onChange={this.handleChange} />
          <input type="email" name="email" placeholder="Email" className="caixa" value={this.state.email} onChange={this.handleChange} />
          <input type="password" name="password" placeholder="Senha" className="caixa" value={this.state.password} onChange={this.handleChange} />
          <button type="submit">Criar Conta</button>
        </form>

        <div className="extra">
          <p>Já possui conta?</p>
          <Link to='/login'>Acesse-a</Link>
        </div>
      </div >
    );
  }
}
