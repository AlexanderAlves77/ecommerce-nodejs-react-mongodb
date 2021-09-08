import React, { Component } from 'react'
import moment from 'moment'

import Titulo from '../../components/Texto/Titulo'
import Tabela from '../../components/Tabela/Simples'

class DetalhesDosPedidos extends Component {
  render() {
    const dados = [
      {
        ID: '77WA45LML634D69',
        'Valor Total': 89.99,
        Data: moment().toISOString(),
        Situação: 'Aguardando Pagamento',
        botaoDetalhes: '/pedido/77WA45LML634D69',
      },
      {
        ID: '54JTF40BJB5BL5',
        'Valor Total': 105.9,
        Data: moment().toISOString(),
        Situação: 'Aguardando Pagamento',
        botaoDetalhes: '/pedido/54JTF40BJB5BL5',
      },
      {
        ID: '9D19DKSAD9AKSD',
        'Valor Total': 26.72,
        Data: moment().toISOString(),
        Situação: 'Pagamento Concluído',
        botaoDetalhes: '/pedido/9D19DKSAD9AKSD',
      },
    ]

    return (
      <div className="Detalhes-dos-Pedidos">
        <Titulo tipo="h3" titulo="Pedidos Feitos" />
        <hr />
        <Tabela
          cabecalho={['ID', 'Valor Total', 'Data', 'Situação']}
          dados={dados}
        />
      </div>
    )
  }
}

export default DetalhesDosPedidos
