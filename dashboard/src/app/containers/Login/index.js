import React, { Component } from 'react'

import Titulo from '../../components/Texto/Titulo'

import Input from '../../components/Inputs/Simples'
import Checkbox from '../../components/Inputs/Checkbox'

import Button from '../../components/Button/Simples'

import { connect } from 'react-redux'
import * as actions from '../../actions'
import { api, versao } from '../../config'

class Login extends Component {
  state = {
    email: '',
    senha: '',
    opcaoLembrar: true,
    erros: {},
  }

  onChangeInput = (field, evt) => {
    this.setState({ [field]: evt.target.value })
    this.validate()
  }

  onChangeInput = field => this.setState({ [field]: this.state[field] })

  handleLogin() {
    const { email, senha: password, opcaoLembrar } = this.state
    if (!this.validate()) return

    this.props.handleLogin({ email, password, opcaoLembrar }, () => {
      alert('aviso')
    })
  }

  validate() {
    const { email, senha } = this.state
    const erros = {}

    if (!email) erros.email = 'Preencha aqui com o seu e-mail'
    if (!senha) erros.senha = 'Preencha aqui com o seu senha'

    this.setState({ erros })
    return !(Object.keys(erros).length > 0)
  }

  render() {
    const { email, senha, opcaoLembrar, erros } = this.state

    return (
      <div className="Login flex flex-center">
        <div className="Card">
          <div className="flex vertical flex-center">
            <Titulo tipo="h1" titulo="LOJA IT" />

            <p>Faça o seu login abaixo</p>
          </div>
          <br />
          <br />

          <Input
            label="E-mail"
            value={email}
            type="email"
            error={erros.email}
            onChange={evt => this.onChangeInput('email', evt)}
          />

          <Input
            label="Senha"
            value={senha}
            type="password"
            error={erros.senha}
            onChange={evt => this.onChangeInput('senha', evt)}
          />

          <div className="flex">
            <div className="flex-1">
              <Checkbox
                value={opcaoLembrar}
                onChange={() => this.onChangeCheckBox('opcaoLembrar')}
                label={'Lembrar?'}
              />
            </div>
            <div className="flex-1 flex flex-center">
              {/*  <Link to="recuperar-senha">
                <small>Esqueceu sua senha?</small>
    </Link> */}
              <a href={`${api}/${versao}/api/usuarios/recuperar-senha`}>
                <small>Esqueceu sua senha?</small>
              </a>
            </div>
          </div>
          <br />
          <br />

          <div className="flex flex-center">
            <Button
              type="success"
              label="ENTRAR"
              onClick={() => this.handleLogin()}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(Login)
