import React from 'react'
import Link from 'next/link'

const DadosDaLoja = () => (
  <div className="flex-1 dados-da-loja">
    <div>
      <h2>Entre em Contato</h2>
      <br />
    </div>
    <p className="loja-nome">Nome: LOJA IT</p>
    <p className="loja-cnpj">CNPJ: 12.345.678/0001-00</p>
    <p className="loja-email">
      Email: <a href="mailto: email@lojait.com">email@lojait.com</a>
    </p>
    <p className="loja-telefones">Telefones:</p>
    <p className="loja-telefone">
      &nbsp;&nbsp;<a href="phone: (11) 1234-5678">(11) 1234-5678</a>
    </p>
    <p className="loja-telefone">
      &nbsp;&nbsp;<a href="phone: (11) 1234-5678">(11) 1234-5678</a>
    </p>
    <p className="loja-telefone">
      &nbsp;&nbsp;<a href="phone: (11) 1234-5678">(11) 1234-5678</a>
    </p>
    <p className="loja-endereco">Rua Teste, 123 - Bairro Centro</p>
    <p className="loja-cidade">São Paulo/SP - 01234-678</p>
  </div>
)

export default DadosDaLoja
