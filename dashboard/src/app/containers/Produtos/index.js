import React, { Component } from 'react'

import Titulo from '../../components/Texto/Titulo'
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'

class Produtos extends Component {
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
        Produto: 'Mouse 1',
        Categoria: 'acessorios',
        Disponivel: 'sim',
        botaoDetalhes: '/produto/69AW346546WA77GKDF',
      },
      {
        Produto: 'Mouse 2',
        Categoria: 'acessorios',
        Disponivel: 'sim',
        botaoDetalhes: '/produto/GKDF69AW346546WA77',
      },
      {
        Produto: 'Mouse 3',
        Categoria: 'acessorios',
        Disponivel: 'sim',
        botaoDetalhes: '/produto/WA77GKDF69AW346546',
      },
      {
        Produto: 'Mouse 4',
        Categoria: 'acessorios',
        Disponivel: 'sim',
        botaoDetalhes: '/produto/346546WA69AW77GKDF',
      },
      {
        Produto: 'Mouse 5',
        Categoria: 'acessorios',
        Disponivel: 'sim',
        botaoDetalhes: '/produto/546WA77GKDF69AW346',
      },
    ]

    return (
      <div className="Produtos full-width">
        <div className="Card">
          <Titulo tipo="h1" titulo="Produtos" />
          <hr />
          <div className="flex">
            <div className="flex">
              <Pesquisa
                valor={pesquisa}
                placeholder={
                  'Pesquise aqui pelo nome do produto, descrição ou categoria...'
                }
                onChange={env => this.onChangePesquisa()}
                onClick={() => alert('Pesquisar')}
              />
            </div>
            <div className="flex-1 flex vertical">
              <label>
                <small>Ordenar por</small>
              </label>
              <select defaultValue="">
                <option>Aleatório</option>
                <option value={'oaA-Z'}>Alfabética A-Z</option>
                <option value={'oaZ-A'}>Alfabética Z-A</option>
                <option value={'op-menor'}>Preço Menor</option>
                <option value={'op-maior'}>Preço Maoir</option>
              </select>
            </div>
            <div className="flex-1"></div>
          </div>

          <hr />
          <Tabela
            cabecalho={['Produto', 'Categoria', 'Disponibilidade']}
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

export default Produtos
