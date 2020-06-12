import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  const bemvindo = <p>Bem vindo ao gerenciador de tarefas da <a href="https://www.codexjr.com.br/" className="sublinhado" target="_blank" rel="noopener noreferrer">CodeX</a>.</p>;

  const login = <Link to="/login">Acesse</Link>;
  const cadastro = <Link to="/register">Crie</Link>;

  const acessar = <p>{login} sua conta ou {cadastro} uma para começar a utilizar!</p>;

  return <div>
    {bemvindo}

    {acessar}
  </div>
}