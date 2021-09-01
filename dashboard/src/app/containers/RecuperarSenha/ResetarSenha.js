import React, { Component } from 'react'

import Titulo from '../../components/Texto/Titulo'
import Input from '../../components/Inputs/Simples'
import Button from '../../components/Button/Simples'
class ResetarSenha extends Component {
  state = {
    senha: '',
    confirmarSenha: '',
  }

  onChangeInput = (field, evt) => this.setState({ [field]: evt.target.value })

  render() {
    const { senha, confirmarSenha } = this.state

    return (
      <div className="Resetar-Senha">
        <Titulo tipo="h1" titulo="LOJA IT" />
        <br />
        <div>
          <p>Para reiniciar sua senha, digite o seu e-mail abaixo.</p>
        </div>
        <br />
        <div>
          e:
          <Input
            label="Senha"
            type="password"
            value={senha}
            onChange={evt => this.onChangeInput('senha', evt)}
          />
          <Input
            label="Confirmar Senha"
            type="password"
            value={confirmarSenha}
            onChange={evt => this.onChangeInput('confirmarSenha', evt)}
          />
        </div>
        <br />
        <div>
          <Button type="success" rota="/login" label="RESETAR SENHA" />
        </div>
      </div>
    )
  }
}

export default ResetarSenha
