import React from 'react';

export default welcome => {
  const bemvindo = <p>Bem vindo ao gerenciador de tarefas da <span class="sublinhado">CodeX</span>.</p>;

  const login = <a href="#">Acesse</a>;
  const cadastro = <a href="#">Crie</a>;

  const acessar = <p>{login} sua conta ou {cadastro} uma para começar a utilizar!</p>;

  return <div>
    {bemvindo}

    {acessar}
  </div>

}