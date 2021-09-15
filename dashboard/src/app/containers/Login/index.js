import React, { Component } from 'react'
//import { Link } from 'react-router-dom'

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
  }

  onChangeInput = (field, evt) => this.setState({ [field]: evt.target.value })

  onChangeInput = field => this.setState({ [field]: this.state[field] })

  handleLogin() {
    const { email, senha: password, opcaoLembrar } = this.state
    this.props.handleLogin({ email, password, opcaoLembrar }, () => {
      alert('aviso')
    })
  }

  render() {
    const { email, senha, opcaoLembrar } = this.state

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
            onChange={evt => this.onChangeInput('email', evt)}
          />

          <Input
            label="Senha"
            value={senha}
            type="password"
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
