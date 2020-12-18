import React from "react";
import { useForm } from "react-hook-form";
import "./LoginForm.css";

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const result = usuarios.find(usuario => (usuario.email === data.email) && (usuario.password === data.password));
    
    if(!result){
        alert('Usuario não encontrado. Caso ainda não tenha feito cadastro no sistema, por favor ir na aba Cadastro para fazê-lo');
    }else{
        alert('Login realizado com sucesso!');
        const loginUser = {
            email: data.email,
            password: data.password    
        };
        sessionStorage.clear();
        sessionStorage.setItem('logins', loginUser);
    }
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="inputEmail">E-mail</label>
        <input
          type="email"
          id="inputLoginEmail"
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

        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          id="inputLoginPassword"
          name="password"
          ref={register({ required: "Insira sua senha" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
