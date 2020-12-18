import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const LoginForm = () => {

    function handleClick(data) {
        sessionStorage.clear();  
    }
  
    return (
        
        <Link to={"/login"} className="alert alert-success" role="alert" onClick={handleClick()}>Logout realizado com sucesso!</Link>
    );
};

export default LoginForm;
