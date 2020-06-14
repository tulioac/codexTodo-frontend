import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        password: ""
      },
      showModal: false
    }
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ form: { ...this.state.form, [name]: value } });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state.form;

    api.post('/auth/authenticate', { email, password }, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        localStorage.setItem('token', response.data.token);

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