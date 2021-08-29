import React, { Component } from 'react'
import moment from 'moment'

import Titulo from '../../components/Texto/Titulo'
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'

class Pedidos extends Component {
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
        Cliente: 'Cliente 1',
        'Valor Total': 89.99,
        Data: moment().toISOString(),
        Situação: 'Aguardando Pagamento',
        botaoDetalhes: '/pedidos/77WA45LML634D69',
      },
      {
        Cliente: 'Cliente 2',
        'Valor Total': 105.9,
        Data: moment().toISOString(),
        Situação: 'Aguardando Pagamento',
        botaoDetalhes: '/pedidos/54JTF40BJB5BL5',
      },
      {
        Cliente: 'Cliente 3',
        'Valor Total': 26.72,
        Data: moment().toISOString(),
        Situação: 'Pagamento Concluído',
        botaoDetalhes: '/pedidos/9D19DKSAD9AKSD',
      },
    ]

    return (
      <div className="Pedidos">
        <div className="Card">
          <Titulo tipo="h1" titulo="Pedidos" />
          <hr />
          <Pesquisa
            valor={pesquisa}
            placeholder={'Pesquise aqui pelo nome do cliente...'}
            onChange={env => this.onChangePesquisa()}
            onClick={() => alert('Pesquisar')}
          />
          <hr />
          <Tabela
            cabecalho={['Cliente', 'Valor Total', 'Data', 'Situação']}
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

export default Pedidos
