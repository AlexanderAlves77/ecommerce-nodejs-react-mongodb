import React, { Component } from 'react'

import Layout from '../components/Layout'
import Cabecalho from '../containers/Cabecalho'
import CarrinhoContainer from '../containers/CarrinhoContainer'
import Rodape from '../containers/Rodape'

export default class Carrinho extends Component {
  render() {
    return (
      <Layout title="Carrinho | LOJA IT - Melhores produtos de tecnologia">
        <Cabecalho />
        <CarrinhoContainer />
        <Rodape />
      </Layout>
    )
  }
}
