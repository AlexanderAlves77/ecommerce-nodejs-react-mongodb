import React, { Component } from 'react'

import Layout from '../components/Layout'
import Cabecalho from '../containers/Cabecalho'
import ProdutosPesquisa from '../containers/Lista/ProdutosCategoria'
import Rodape from '../containers/Rodape'

export default class Pesquisa extends Component {
  render() {
    return (
      <Layout title="Resultados para Mouse | Loja IT - Melhores produtos de tecnologia">
        <Cabecalho />
        <ProdutosPesquisa />
        <Rodape />
      </Layout>
    )
  }
}
