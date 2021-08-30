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
      <div className="Login">
        <div className="card">
          <Titulo tipo="h1" titulo="Loja IT" />
          <p>Faça o seu login abaixo</p>

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

          <div>
            <div>
              <Checkbox
                value={opcaoLembrar}
                onChange={() => this.onChangeCheckBox('opcaoLembrar')}
                label={'Lembrar?'}
              />
            </div>
            <div>
              <Link to="recuperar-senha">Esqueceu sua senha?</Link>
            </div>
          </div>

          <Button type="success" rota="/" label="ENTRAR" />
        </div>
      </div>
    )
  }
}

export default Login
