import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LoadingIndicator from '../../loadingIndicator';

import api from '../../../services';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        email: "",
        password: ""
      },
      loading: false
    }
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ loading: true });

    api.post('/auth/register', { ...this.state.form }, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        const { token } = response.data;
        sessionStorage.setItem('token', token);
        this.props.setToken(token);
      })
      .catch(error => {
        if (error.status !== 200) {
          this.errorMessage();
        }
      })
      .finally(() => {
        this.setState({ loading: false });
      });;
  }

  errorMessage = () => {
    const p = document.querySelector("p.errorMessage");

    p.style.opacity = '1';
    p.style.visibility = 'visible';

    p.innerHTML = 'Erro ao cadastrar sua conta. Tente um email diferente.';

    setTimeout(() => {
      p.style.opacity = '0';
      p.style.visibility = 'hidden';
    }, 5000)
  }

  render() {
    const loading = this.state.loading ? <LoadingIndicator /> : "";
    return (
      <div>
        <h2>Cadastro</h2>

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Nome" className="caixa" value={this.state.name} onChange={this.handleChange} required />
          <input type="email" name="email" placeholder="Email" className="caixa" value={this.state.email} onChange={this.handleChange} required />
          <input type="password" name="password" placeholder="Senha" className="caixa" value={this.state.password} onChange={this.handleChange} required />
          <button type="submit">Criar Conta</button>
        </form>
        {loading}
        <p className="errorMessage"></p>

        <div className="extra">
          <p>Já possui conta?</p>
          <Link to='/login'>Acesse-a</Link>
        </div>
      </div >
    );
  }
}
