import React, { Component } from 'react'
import Titulo from '../../../components/Texto/Titulo'

import { connect } from 'react-redux'
import * as actions from '../../../actions/variacoes'

class Variacoes extends Component {
  state = {
    variacaoSelecionada: 'C8J283J38',
    variacoes: [
      { nome: 'P', id: 'C8J283J38' },
      { nome: 'M', id: 'F93KC934K' },
    ],
  }

  getVariacoes(props) {
    const { produto, usuario, getVariacoes } = props

    if (!usuario || !produto) return null
    getVariacoes(produto._id, usuario.loja)
  }

  render() {
    const { variacoes, variacaoSelecionada } = this.state

    return (
      <div className="Variacoes flex vertical flex-center">
        <Titulo tipo="h2" titulo="Variações" />
        {variacoes.map((item, idx) => (
          <div
            onClick={() => this.setState({ variacaoSelecionada: item.id })}
            className={`flex flex-center variacao-item ${
              variacaoSelecionada === item.id ? 'variacao-item-ativa' : ''
            }`}
          >
            <span>{item.nome}</span>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
})

export default connect(mapStateToProps, actions)(Variacoes)
