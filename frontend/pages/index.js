import React from 'react';

export default function HomeScreen() {
  const [values, setValues] = React.useState({
    usuario: 'omariosouto',
    senha: 'safepassword',
  });

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          placeholder="Usuário" name="usuario"
          defaultValue={values.usuario}
        />
        <input
          placeholder="Senha" name="senha" type="password"
          defaultValue={values.senha}
        />
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
