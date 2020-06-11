import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default props =>
  <Fragment>
    <h2>Login</h2>
    <input type="email" name="email" placeholder="Email" className="caixa" />
    <input type="password" name="senha" placeholder="Senha" className="caixa" />
    <button>Acessar</button>

    <div className="extra">
      <p>Não possui conta?</p>
      <Link to='/register'>Cadastre-se</Link>
    </div>
  </Fragment >