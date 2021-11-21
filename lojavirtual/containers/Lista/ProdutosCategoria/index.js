import React, { Component } from 'react'

import Produtos from '../../../components/Listas/Produtos'
import Paginacao from '../../../components/Paginacao'

const PRODUTOS = [
  {
    id: 69775244,
    fotos: ['/static/img/mouse-1.png'],
    titulo: 'Mouse Gamer 1',
    preco: 35,
    promocao: 25,
  },
  {
    id: 52446977,
    fotos: ['/static/img/mouse-2.png'],
    titulo: 'Mouse Gamer 2',
    preco: 55,
    promocao: 45,
  },
  {
    id: 44697752,
    fotos: ['/static/img/mouse-3.png'],
    titulo: 'Mouse Gamer 3',
    preco: 65,
    promocao: 55,
  },
]

class ProdutosCategoria extends Component {
  state = { atual: 0 }

  render() {
    return (
      <div className="container Categoria-Produtos">
        <br />
        <br />
        <div className="flex flex-center">
          <h1>ACESSÓRIOS</h1>
        </div>
        <Produtos produtos={PRODUTOS} itensPorLinha={4} />
        <Paginacao
          atual={this.state.atual || 0}
          total={PRODUTOS.length * 4}
          limite={PRODUTOS.length}
          onClick={numeroAtual => this.setState({ atual: numeroAtual })}
        />
      </div>
    )
  }
}

export default ProdutosCategoria
