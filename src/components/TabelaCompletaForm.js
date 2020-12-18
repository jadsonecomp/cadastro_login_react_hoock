import React, { Component } from 'react';
import TabelaForm from './TabelaForm';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {usuarios: []};
    }

    componentDidMount(){
        if(!sessionStorage.getItem('logins')){
          return alert('Por favor, efetue o login para visualizar os usuários cadastrados');
        }else{
          const usuarioList = JSON.parse(localStorage.getItem('usuarios')) || [];
          this.setState({usuarios: usuarioList});    
        }
    }

    tabRow(){
      if(sessionStorage.getItem('logins')){
        return this.state.usuarios.map(function(object, i){
            return <TabelaForm obj={object} key={i} />;
        });
      }
    }

    render() {
      return (
        <div>
          <h3 align="center">Usuários Cadastrados</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }