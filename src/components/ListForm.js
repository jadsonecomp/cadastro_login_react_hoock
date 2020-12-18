import React from "react";

const ListForm = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  return usuarios.map(usuario => {
        return <li className="Usuário: ">Nome: {usuario.name} - E-mail: {usuario.email}</li>
    })
};

export default ListForm;
