import React, { Component } from 'react'
import moment from 'moment'

import Titulo from '../../components/Texto/Titulo'
import Tabela from '../../components/Tabela/Simples'
import Voltar from '../../components/Links/Voltar'

class Avaliacoes extends Component {
  render() {
    // DADOS
    const dados = [
      {
        Cliente: 'Cliente 1',
        Data: moment().format('DD/MM/YYYY'),
        botaoDetalhes: '/avaliacao/F92K39wFKF329',
      },
      {
        Cliente: 'Cliente 2',
        Data: moment().format('DD/MM/YYYY'),
        botaoDetalhes: '/avaliacao/F92K39wFKF329',
      },
      {
        Cliente: 'Cliente 3',
        Data: moment().format('DD/MM/YYYY'),
        botaoDetalhes: '/avaliacao/FKF329F92K39w',
      },
      {
        Cliente: 'Cliente 4',
        Data: moment().format('DD/MM/YYYY'),
        botaoDetalhes: '/avaliacao/39wFKF92KF329',
      },
      {
        Cliente: 'Cliente 5',
        Data: moment().format('DD/MM/YYYY'),
        botaoDetalhes: '/avaliacao/F39wFK9wFK392',
      },
      {
        Cliente: 'Cliente 6',
        Data: moment().format('DD/MM/YYYY'),
        botaoDetalhes: '/avaliacao/F9KF322K39wF9',
      },
    ]

    return (
      <div className="Avaliacoes full-width">
        <div className="Card">
          <Voltar path="/produto/F39wFK9wFK392" />
          <Titulo tipo="h1" titulo="Avaliacoes - Produto 1" />
          <hr />
          <Tabela cabecalho={['Cliente', 'Data']} dados={dados} />
        </div>
      </div>
    )
  }
}

export default Avaliacoes
