import React from "react";
import { useForm } from "react-hook-form";
import "./CadastroForm.css";

const CadastroForm = () => {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const result = {
        name: data.name,
        email: data.email,
        password: data.password
    };

    usuarios.push(result);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!')

  }

  return (
    <div className="cadastro-form">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="inputName">Nome</label>
        <input
          type="text"
          id="inputName"
          name="name"
          ref={register({ required: "Insira seu nome" })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}


        <label htmlFor="inputEmail">E-mail</label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          ref={register({
            required: "Insira seu e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Insira um e-mail válido",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label htmlFor="inputConfEmail">Confirme seu E-mail</label>
        <input
          type="email"
          id="inputConfEmail"
          name="confemail"
          ref={register({
            required: "Insira seu e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Insira um e-mail válido",
            },
          })}
        />
        {errors.confemail && <p className="error">{errors.confemail.message}</p>}

        <label htmlFor="inputPassword">Senha</label>
        <input
          type="password"
          id="inputPassword"
          name="password"
          ref={register({ required: "Insira sua senha" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <label htmlFor="inputConfPassword">Confirme sua Senha</label>
        <input
          type="password"
          id="inputConfPassword"
          name="confpassword"
          ref={register({ required: "Insira sua senha" })}
        />
        {errors.confpassword && <p className="error">{errors.confpassword.message}</p>}

        <button type="submit">Cadastro</button>
      </form>
    </div>
  );
};

export default CadastroForm;
