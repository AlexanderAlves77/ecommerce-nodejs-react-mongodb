import React, { Component } from 'react'
import ButtonSimples from '../../components/Button/Simples'
import InputValor from '../../components/Inputs/InputValor'
import { TextoDados } from '../../components/Texto/Dados'
import Titulo from '../../components/Texto/Titulo'

class DetalhesProduto extends Component {
  state = {
    nome: 'Produto 1',
    disponibilidade: 'disponivel',
    descricao: '',
  }

  renderCabecalho() {
    return (
      <div className="flex">
        <div className="flex-1 flex">
          <Titulo tipo="h1" titulo={nome} />
        </div>
        <div className="flex-1 flex flex-end">
          <ButtonSimples
            type="success"
            label="Salvar"
            onClick={() => alert('Salvo')}
          />
        </div>
      </div>
    )
  }

  renderDados() {
    const { nome, disponibilidade, descricao } = this.state

    return (
      <div className="Dados-Produto">
        <TextoDados
          chave="Nome"
          valor={
            <InputValor
              value={nome}
              noStyle
              name="nome"
              onChange={evt => this.setState({ nome: evt.target.value })}
            />
          }
        />
      </div>
    )
  }

  render() {
    const { nome } = this.state
    return (
      <div className="Detalhes-do-Produto">
        {this.renderCabecalho()}
        <br />
        <div className="flex horizontal">
          <div className="flex-1 flex vertical">{this.renderDados()}</div>
        </div>
      </div>
    )
  }
}

export default DetalhesProduto
