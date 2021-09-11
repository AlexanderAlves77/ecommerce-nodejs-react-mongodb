import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ButtonSimples from '../../components/Button/Simples'

import InputValor from '../../components/Inputs/InputValor'
import InputSelect from '../../components/Inputs/Select'

import { TextoDados } from '../../components/Texto/Dados'
import Titulo from '../../components/Texto/Titulo'

import BlocoImagem from '../../components/Imagens/Bloco'

import Voltar from '../../components/Links/Voltar'

class DetalhesProduto extends Component {
  state = {
    nome: 'Produto 1',
    disponibilidade: 'disponivel',
    descricao: '',
    imagens: [
      'https://dummyimage.com/100x100/ff9900/000222.jpg',
      'https://dummyimage.com/100x100/ff9900/000222.jpg',
      'https://dummyimage.com/100x100/ff9900/000222.jpg',
      'https://dummyimage.com/100x100/ff9900/000222.jpg',
      'https://dummyimage.com/100x100/ff9900/000222.jpg',
      'https://dummyimage.com/100x100/ff9900/000222.jpg',
    ],
  }

  renderCabecalho() {
    const { nome } = this.state
    return (
      <div className="flex">
        <div className="flex-1 flex vertical">
          <Titulo tipo="h1" titulo={nome} />
          <Link to="/avaliacoes/69AW346546WA77GKDF">
            <small>Ver Avaliações</small>
          </Link>
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
              handleSubmit={valor => this.setState({ nome: valor })}
            />
          }
        />
        <TextoDados
          chave="Disponibilidade"
          valor={
            <InputSelect
              name="disponibilidade"
              onChange={evt =>
                this.setState({ disponibilidade: evt.target.value })
              }
              value={disponibilidade}
              opcoes={[
                { label: 'Disponivel', value: 'disponivel' },
                { label: 'Indisponivel', value: 'indisponivel' },
              ]}
            />
          }
        />
        <TextoDados
          chave="Descrição"
          valor={
            <textarea
              name={descricao}
              onChange={evt => this.setState({ descricao: evt.target.value })}
              value={descricao}
              rows="10"
              style={{ resize: 'none' }}
            />
          }
        />
      </div>
    )
  }

  onRemove = id => {
    const { imagens } = this.state
    this.setState({ imagens: imagens.filter((i, idx) => idx !== id) })
  }

  renderImagens() {
    const { imagens } = this.state

    return (
      <div className="dados-de-imagens">
        <BlocoImagem
          imagens={imagens}
          handleSubmit={() => alert('enviado')}
          onRemove={this.onRemove}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="Detalhes-do-Produto">
        <Voltar path="/produtos" />
        {this.renderCabecalho()}
        <br />
        <div className="flex horizontal">
          <div className="flex-1 flex vertical">{this.renderDados()}</div>
          <div className="flex-1 flex vertical">{this.renderImagens()}</div>
        </div>
      </div>
    )
  }
}

export default DetalhesProduto
