import React, { Fragment } from 'react';

export default props =>
  <Fragment>
    <input type="email" name="email" placeholder="Email" className="caixa" />
    <input type="password" name="senha" placeholder="Senha" className="caixa" />
    <button>Acessar</button>
  </Fragment >