// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginForm from "./components/LoginForm";
import CadastroForm from "./components/CadastroForm";
import TabelaCompletaForm from "./components/TabelaCompletaForm";
import LogoutForm from "./components/LogoutForm";

function App() {
  
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">Sistema de Cadastro de Usuários</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/login'} className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to={'/cadastro'} className="nav-link">Cadastro</Link>
              </li>
              <li className="nav-item">
                <Link to={'/usuarios'} className="nav-link">Usuários Cadastrados</Link>
              </li>
              <li className="nav-item">
                <Link to={'/logout'} className="nav-link">Logout</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
            <Route exact path='/cadastro' component={ CadastroForm } />
            <Route path='/login' component={ LoginForm } />
            <Route path='/usuarios' component={ TabelaCompletaForm } />
            <Route path='/logout' component={ LogoutForm } />
        </Switch>
      </div>
    </Router>
  );


}

export default App;
