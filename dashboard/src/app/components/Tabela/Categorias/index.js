import React, { Component } from 'react'

import Titulo from '../../components/Texto/Titulo'
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'

class Categorias extends Component {
  state = {
    pesquisa: '',
    atual: 0,
  }

  onChangePesquisa = env => this.setState({ pesquisa: env.target.value })

  changeNumeroAtual = atual => this.setState({ atual })

  render() {
    const { pesquisa } = this.state

    // DADOS
    const dados = [
      {
        Categoria: 'Acessórios',
        'Qtd. de Produtos': 15,
        botaoDetalhes: '/categorias/acessorios',
      },
      {
        Categoria: 'Computadores',
        'Qtd. de Produtos': 5,
        botaoDetalhes: '/categorias/computadores',
      },
      {
        Categoria: 'Fones de Ouvido',
        'Qtd. de Produtos': 7,
        botaoDetalhes: '/categorias/fones',
      },
      {
        Categoria: 'Gabinetes',
        'Qtd. de Produtos': 3,
        botaoDetalhes: '/categorias/gabinetes',
      },
      {
        Categoria: 'Processadores',
        'Qtd. de Produtos': 8,
        botaoDetalhes: '/categorias/processadores',
      },
    ]

    return (
      <div className="Categorias full-width">
        <div className="Card">
          <Titulo tipo="h1" titulo="Categorias" />
          <hr />
          <Pesquisa
            valor={pesquisa}
            placeholder={'Pesquise aqui pelo nome da categoria...'}
            onChange={env => this.onChangePesquisa()}
            onClick={() => alert('Pesquisar')}
          />
          <hr />
          <Tabela
            cabecalho={['Categorias', 'Qtd. de Produtos']}
            dados={dados}
          />
          <Paginacao
            atual={this.state.atual}
            total={120}
            limite={20}
            onClick={numeroAtual => this.changeNumeroAtual(numeroAtual)}
          />
        </div>
      </div>
    )
  }
}

export default Categorias
