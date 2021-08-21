const mongoose = require('mongoose')
const { calcularFrete } = require('./integracoes/correios')

const Entrega = require('Entrega')
const Produto = require('Produto')
const Variacao = require('Variacao')
const { updateLocale } = require('moment')
const RegistroPedido = mongoose.model('RegistroPedido')

const EntregaController = {
  async show(req, res, next) {
    try {
      const entrega = await Entrega.findOne({
        _id: req.params.id,
        loja: req.query.loja,
      })
      const registros = await RegistroPedido.find({
        pedido: entrega.pedido,
        tipo: 'entrega',
      })

      return res.send({ entrega, registros })
    } catch (error) {
      next(error)
    }
  },

  // PUT /:id
  async updateLocale(req, res, next) {
    const { status, codigoRastreamento } = req.body
    const { loja } = req.query

    try {
      const entrega = await Entrega.findOne({ loja, _id: req.params.id })

      if (status) entrega.status = status
      if (codigoRastreamento) entrega.codigoRastreamento = codigoRastreamento

      const registroPedido = new RegistroPedido({
        pedido: entrega.pedido,
        tipo: 'entrega',
        situacao: status,
        payload: req.body,
      })
      await registroPedido.save()
      // Enviar email de aviso para o cliente - aviso de atualizacao na entrega

      await entrega.save()
      return res.send({ entrega })
    } catch (error) {
      next(error)
    }
  },

  // POST /calcular
  async calcular(req, res, next) {
    const { cep, carrinho } = req.body

    try {
      const _carrinho = await Promise.all(
        carrinho.map(async item => {
          item.produto = await Produto.findById(item.produto)
          item.variacao = await Variacao.findById(item.variacao)
          return item
        })
      )
      const resultados = await calcularFrete({ cep, produtos: _carrinho })
      return res.send({ resultados })
    } catch (error) {
      next(error)
    }
  },
}

module.exports = EntregaController
