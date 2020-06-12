import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    api.post('/auth/authenticate', { ...this.state }, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      })


    // TODO: Tratar resposta do servidor
  }

  render() {
    return (
      <div>
        <h2>Login</h2>

        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" placeholder="Email" className="caixa" value={this.state.email} onChange={this.handleChange} />
          <input type="password" name="password" placeholder="Senha" className="caixa" value={this.state.password} onChange={this.handleChange} />
          <button>Acessar</button>
        </form>

        <div className="extra">
          <p>Não possui conta?</p>
          <Link to='/register'>Cadastre-se</Link>
        </div>
      </div >
    );
  }
} 