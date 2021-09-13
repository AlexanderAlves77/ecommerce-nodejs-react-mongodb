import React, { Component } from 'react'
import ButtonSimples from '../../components/Button/Simples'
import InputValor from '../../components/Inputs/InputValor'
import InputSimples from '../../components/Inputs/Simples'
import { TextoDados } from '../../components/Texto/Dados'
import Titulo from '../../components/Texto/Titulo'

class Perfil extends Component {
  state = {
    nome: 'Usuário Teste',
    email: 'usuario@teste.com',
    telefone: '11 1234-4321',

    senhaAntiga: '',
    novaSenha: '',
    confirmarNovaSenha: '',
  }

  renderCabecalho() {
    return (
      <div className="flex">
        <div className="flex-1 flex">
          <Titulo tipo="h1" titulo="Perfil" />
        </div>
        <div className="flex-1 flex flex-end">
          <ButtonSimples
            type="success"
            onClick={() => alert('salvo')}
            label={'Salvar'}
          />
        </div>
      </div>
    )
  }

  renderDadosConfiguracao() {
    const { nome, email, telefone } = this.state

    return (
      <div className="Dados-configuacao">
        <TextoDados
          chave="Nome"
          valor={
            <InputValor
              value={nome}
              name="nome"
              noStyle
              handleSubmit={valor => this.setState({ nome: valor })}
            />
          }
        />
        <TextoDados
          chave="E-mail"
          valor={
            <InputValor
              value={email}
              name="email"
              noStyle
              handleSubmit={valor => this.setState({ email: valor })}
            />
          }
        />
        <TextoDados
          chave="Telefone"
          valor={
            <InputValor
              value={telefone}
              name="telefone"
              noStyle
              handleSubmit={valor => this.setState({ telefone: valor })}
            />
          }
        />
      </div>
    )
  }

  renderDadosSenha() {
    const { senhaAntiga, novaSenha, confirmarNovaSenha } = this.state

    return (
      <div className="Dados-configuacao">
        <InputSimples
          type="password"
          name="senha-antiga"
          label="Senha Antiga:"
          value={senhaAntiga}
          onChange={evt => this.setState({ senhaAntiga: evt.target.value })}
        />
        <InputSimples
          type="password"
          name="nova-senha"
          label="Nova Senha"
          value={novaSenha}
          onChange={evt => this.setState({ novaSenha: evt.target.value })}
        />
        <InputSimples
          type="password"
          name="confirmar-nova-senha"
          label="Confirmar Nova Senha"
          value={confirmarNovaSenha}
          onChange={evt =>
            this.setState({ confirmarNovaSenha: evt.target.value })
          }
        />
      </div>
    )
  }

  render() {
    return (
      <div className="Configuracoes full-width">
        <div className="Card">
          {this.renderCabecalho()}
          <div className="flex horizontal">
            <div className="flex-1">{this.renderDadosConfiguracao()}</div>
            <div className="flex-1">{this.renderDadosSenha()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Perfil
