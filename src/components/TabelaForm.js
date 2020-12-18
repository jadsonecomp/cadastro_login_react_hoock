import React, { Component } from 'react';

class TabelaForm extends Component {

  constructor(props) {
        super(props);
    }
   
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.email}
          </td>
        </tr>
    );
  }
}

export default TabelaForm;