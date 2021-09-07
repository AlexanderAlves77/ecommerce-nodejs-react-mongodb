import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Titulo from '../../components/Texto/Titulo'
import Input from '../../components/Inputs/Simples'
import Button from '../../components/Button/Simples'
class RecuperarSenha extends Component {
  state = {
    email: '',
  }

  onChangeInput = (field, evt) => this.setState({ [field]: evt.target.value })

  render() {
    const { email } = this.state

    return (
      <div className="Recuperar-Senha flex flex-center">
        <div className="Card">
          <div className="flex flex-center">
            <Titulo tipo="h1" titulo="LOJA IT" />
          </div>
          <br />
          <div>
            <p>Para reiniciar sua senha, digite o seu e-mail abaixo.</p>

            <p>
              Iremos enviar um link para você acessar e entrar uma nova senha.
            </p>
          </div>
          <br />
          <div>
            <Input
              label="E-mail"
              value={email}
              onChange={evt => this.onChangeInput('email', evt)}
              type="email"
            />
          </div>
          <br />
          <div className="flex flex-center">
            <Button
              type="success"
              rota="/resetar-senha/1"
              label="RESETAR SENHA"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default RecuperarSenha
