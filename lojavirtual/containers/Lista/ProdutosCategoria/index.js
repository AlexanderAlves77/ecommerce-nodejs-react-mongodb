import React, { Component } from 'react'

import Produtos from '../../../components/Listas/Produtos'

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
  render() {
    return (
      <div className="container Produtos-Inicial flex vertical">
        <Produtos produtos={PRODUTOS} itensPorLinha={4} />
      </div>
    )
  }
}

export default ProdutosCategoria
