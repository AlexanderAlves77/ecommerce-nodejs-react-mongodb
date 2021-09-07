import React, { Component } from 'react'

import Titulo from '../../components/Texto/Titulo'
import ListaDinamica from '../../components/Listas/ListaDinamicaSimples'
import InputValor from '../../components/Inputs/InputValor'

class DetalhesDaEntrega extends Component {
  state = {
    status: [
      'Preparando para o Envio',
      'Entrega Transportadora',
      'Em trânsito',
    ],
  }

  onAddListaDinamica = texto => {
    if (!texto) return false
    let { status } = this.state
    status.push(texto)
    this.setState({ status })
  }

  handleSubmit = value => {
    this.state({ codigoDeRastreamento: value })
    alert('SALVO!')
  }

  render() {
    const { status, codigoDeRastreamento } = this.state

    return (
      <div className="Detalhes-do-Entrega">
        <Titulo tipo="h3" titulo="Entrega" />
        <br />
        <label>Código de Rastreamento</label>
        <InputValor
          value={codigoDeRastreamento}
          handleSubmit={value => this.handleSubmit(value)}
          name={'codigoDeRastreamento'}
        />
        <br />
        <ListaDinamica
          dados={status}
          //  onRemove={this.onRemoveListaDinamica}
          onAdd={this.onAddListaDinamica}
        />
      </div>
    )
  }
}

export default DetalhesDaEntrega
