import React from "react";
import ListForm from "./ListForm";

const ExibicaoListForm = () => {
    return(
        <div className="exibicaolist-form">
            <h3>Usuários Cadastrados</h3>
            <ul>
                <ListForm />
            </ul>
        </div>    
)};

export default ExibicaoListForm;
