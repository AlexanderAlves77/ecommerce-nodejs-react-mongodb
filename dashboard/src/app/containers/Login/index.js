import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Titulo from '../../components/Texto/Titulo'

import Input from '../../components/Inputs/Simples'
import Checkbox from '../../components/Inputs/Checkbox'

import Button from '../../components/Button/Simples'

class Login extends Component {
  state = {
    email: '',
    senha: '',
    opcaoLembrar: true,
  }

  onChangeInput = (field, evt) => this.setState({ [field]: evt.target.value })

  onChangeInput = field => this.setState({ [field]: this.state[field] })

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
              <Link to="recuperar-senha">
                <small>Esqueceu sua senha?</small>
              </Link>
            </div>
          </div>
          <br />
          <br />

          <div className="flex flex-center">
            <Button type="success" rota="/" label="ENTRAR" />
          </div>
        </div>
      </div>
    )
  }
}

export default Login
