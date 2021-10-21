import React, { Component } from 'react'
import ButtonSimples from '../../components/Button/Simples'
import InputValor from '../../components/Inputs/InputValor'
import InputSimples from '../../components/Inputs/Simples'
import { TextoDados } from '../../components/Texto/Dados'
import Titulo from '../../components/Texto/Titulo'

import { connect } from 'react-redux'
import * as actions from '../../actions'
import AlertGeral from '../../components/Alert/Geral'

class Perfil extends Component {
  constructor(props) {
    super()
    this.state = {
      nome: props.usuario ? props.usuario.nome : '',
      email: props.usuario ? props.usuario.email : '',

      senhaAntiga: '',
      novaSenha: '',
      confirmarNovaSenha: '',

      aviso: null,
      erros: {},
    }
  }

  componentDidMount() {
    this.props.getUser()
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.usuario &&
      this.props.usuario &&
      prevProps.usuario.updatedAt !== this.props.usuario.updatedAt
    ) {
      this.setState({
        nome: this.props.usuario ? this.props.usuario.nome : '',
        email: this.props.usuario ? this.props.usuario.email : '',
      })
    }
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
            onClick={() => this.updateUsuario()}
            label={'Salvar'}
          />
        </div>
      </div>
    )
  }

  onChangeInput = (field, value) =>
    this.setState({ [field]: value }, () => this.validate())

  validate() {
    const { nome, email, senhaAntiga, novaSenha, confirmarNovaSenha } =
      this.state
    const erros = {}

    if (!nome) erros.nome = 'Preencha com o nome'
    if (!email) erros.email = 'Preencha com o email'

    if (senhaAntiga || novaSenha || confirmarNovaSenha) {
      if (!senhaAntiga) erros.senhaAntiga = 'Preencha aqui com a senha antiga'
      if (!novaSenha) erros.novaSenha = 'Preencha aqui com a nova antiga'
      if (!confirmarNovaSenha)
        erros.confirmarNovaSenha = 'Repita aqui a nova antiga'
      if (novaSenha !== confirmarNovaSenha)
        erros.confirmarNovaSenha = 'Digite novamente, as senhas não coincide'
    }

    this.setState({ erros })
    return !(Object.keys(erros).length > 0)
  }

  updateUsuario() {
    if (!this.validate()) return null
    const { nome, email, novaSenha, senhaAntiga } = this.state

    const dados = {}
    dados.nome = nome
    dados.email = email
    if (novaSenha) {
      dados.password = novaSenha
      dados.oldPassword = senhaAntiga
    }

    this.props.updateUser(dados, error => {
      if (!error) {
        this.setState({
          senhaAntiga: '',
          novaSenha: '',
          confirmarNovaSenha: '',
        })
      }
      this.setState({
        aviso: {
          status: !error,
          msg: error ? error.message : 'Dados atualizados com sucesso',
        },
      })
    })
  }

  renderDadosConfiguracao() {
    const { nome, email, erros } = this.state

    return (
      <div className="Dados-configuacao">
        <TextoDados
          chave="Nome"
          valor={
            <InputValor
              value={nome}
              name="nome"
              noStyle
              erros={erros.nome}
              handleSubmit={valor => this.onChangeInput('nome', valor)}
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
              erros={erros.email}
              handleSubmit={valor => this.onChangeInput('email', valor)}
            />
          }
        />
      </div>
    )
  }

  renderDadosSenha() {
    const { senhaAntiga, novaSenha, confirmarNovaSenha, erros } = this.state

    return (
      <div className="Dados-configuacao">
        <InputSimples
          type="password"
          name="senha-antiga"
          label="Senha Antiga:"
          value={senhaAntiga}
          erros={erros.senhaAntiga}
          onChange={evt => this.onChangeInput('senhaAntiga', evt.target.value)}
        />
        <InputSimples
          type="password"
          name="nova-senha"
          label="Nova Senha"
          value={novaSenha}
          erros={erros.novaSenha}
          onChange={evt => this.onChangeInput('novaSenha', evt.target.value)}
        />
        <InputSimples
          type="password"
          name="confirmar-nova-senha"
          label="Confirmar Nova Senha"
          value={confirmarNovaSenha}
          erros={erros.confirmarNovaSenha}
          onChange={evt =>
            this.onChangeInput('confirmarNovaSenha', evt.target.value)
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
          <AlertGeral aviso={this.state.aviso} />
          <div className="flex horizontal">
            <div className="flex-1">{this.renderDadosConfiguracao()}</div>
            <div className="flex-1">{this.renderDadosSenha()}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  usuario: state.auth.usuario,
})

export default connect(mapStateToProps, actions)(Perfil)
