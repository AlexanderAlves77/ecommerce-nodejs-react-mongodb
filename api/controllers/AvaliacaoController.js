const mongoose = require('mongoose')

const Avaliacao = mongoose.model('Avaliacao')
const Produto = mongoose.model('Produto')

class AvaliacaoController {
  // GET /
  async index(req, res, next) {
    try {
      const { loja, produto } = req.query
      const avaliacoes = await Avaliacao.find({ loja, produto })
      return res.send({ avaliacoes })
    } catch (error) {
      next(error)
    }
  }

  // SHOW /:id
  async show(req, res, next) {
    const { loja, produto } = req.query
    const { id: _id } = req.params
    try {
      const avaliacao = await Avaliacao.findOne({ _id, loja, produto })
      return res.send({ avaliacao })
    } catch (error) {
      next(error)
    }
  }

  // POST / -store
  async store(req, res, next) {
    const { nome, texto, pontuacao } = req.query
    const { loja, produto } = req.params
    try {
      const avaliacao = new Avaliacao({
        nome,
        texto,
        pontuacao,
        loja,
        produto,
      })
      const _produto = await Produto.findById(produto)
      if (!_produto) {
        return res.status(422).send({ error: 'Produto não existe.' })
      }
      _produto.avaliacoes.push(avaliacao._id)

      await _produto.save()
      await avaliacao.save()
      return res.send({ avaliacao })
    } catch (error) {
      next(error)
    }
  }

  // DELETE /:id - remove
  async remove(req, res, next) {
    try {
      const avaliacao = await Avaliacao.findById(req.params.id)
      const produto = await Produto.findById(avaliacao.produto)

      produto.avaliacoes = produto.avaliacoes.filter(
        item => item.toString() !== avaliacao._id.toString()
      )
      await produto.save()
      await avaliacao.remove()
      return res.send({ deletado: true })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = AvaliacaoController
