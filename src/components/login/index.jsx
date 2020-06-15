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
      }
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
        const token = response.data.token;
        localStorage.setItem('token', token);
        this.props.setToken(token);
      })
      .catch(error => {
        console.log(error);
        if (error.status !== 200) {
          this.errorMessage();
        }
      })
  }

  errorMessage = () => {
    const p = document.querySelector("p.errorMessage");

    p.style.opacity = '1';
    p.style.visibility = 'visible';

    p.innerHTML = 'Erro ao acessar sua conta. Verifique suas credencias.';

    setTimeout(() => {
      p.style.opacity = '0';
      p.style.visibility = 'hidden';
    }, 5000)
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

        <p className="errorMessage">Erro ao acessar sua conta. Verifique suas credencias.</p>

        <div className="extra">
          <p>Não possui conta?</p>
          <Link to='/register'>Cadastre-se</Link>
        </div>
      </div >
    );
  }
} 