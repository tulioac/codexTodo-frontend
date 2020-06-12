import React from 'react';
import { Link } from 'react-router-dom';

export default props =>
  <div id="register">
    <h2>Cadastro</h2>

    <form action="">
      <input type="text" name="nome" placeholder="Nome" className="caixa" />
      <input type="email" name="email" placeholder="Email" className="caixa" />
      <input type="password" name="senha" placeholder="Senha" className="caixa" />
      <button>Criar Conta</button>
    </form>

    <div className="extra">
      <p>Já possui conta?</p>
      <Link to='/login'>Acesse-a</Link>
    </div>
  </div >