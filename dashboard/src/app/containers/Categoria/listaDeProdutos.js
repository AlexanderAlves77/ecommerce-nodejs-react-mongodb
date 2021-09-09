import React, { Component } from 'react'

import Titulo from '../../components/Texto/Titulo'
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'

class ListaDeProdutos extends Component {
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
        Produto: 'Mouse',
        Estoque: 20,
        Disponibilidade: 'sim',
        botaoDetalhes: '/produto/45KN346KN345K',
      },
      {
        Produto: 'Mouse 2',
        Estoque: 20,
        Disponibilidade: 'não',
        botaoDetalhes: '/produto/77AW69WA21JNI',
      },
      {
        Produto: 'Mouse 3',
        Estoque: 20,
        Disponibilidade: 'não',
        botaoDetalhes: '/produto/365KNKO5N3655',
      },
      {
        Produto: 'Mouse 4',
        Estoque: 20,
        Disponibilidade: 'sim',
        botaoDetalhes: '/produto/KM45Y4OMOM4OM',
      },
      {
        Produto: 'Mouse 5',
        Estoque: 20,
        Disponibilidade: 'sim',
        botaoDetalhes: '/produto/JNMG4T34OM444',
      },
    ]

    return (
      <div className="Categorias">
        <br />
        <hr />
        <Titulo tipo="h3" titulo="Categorias" />
        <br />
        <Pesquisa
          valor={pesquisa}
          placeholder={'Pesquise aqui pelo nome do produto ou descrição...'}
          onChange={evt => this.onChangePesquisa(evt)}
          onClick={() => alert('Pesquisar')}
        />
        <br />
        <Tabela
          cabecalho={['Produto', 'Estoque', 'Disponibilidade']}
          dados={dados}
        />
        <Paginacao
          atual={this.state.atual}
          total={120}
          limite={20}
          onClick={numeroAtual => this.changeNumeroAtual(numeroAtual)}
        />
      </div>
    )
  }
}

export default ListaDeProdutos
