const mongoose = require('mongoose')
const Cliente = mongoose.model('Cliente')
const Usuario = mongoose.model('Usuario')

class ClienteController {
  /**
   *
   * ADMIN
   */

  // GET / index
  async index(req, res, next) {
    try {
      const offset = Number(req.query.offset) || 0
      const limit = Number(req.query.limit) || 30
      const clientes = await Cliente.paginate(
        { loja: req.query.loja },
        { offset, limit, populate: 'usuario' }
      )
      return res.send({ clientes })
    } catch (error) {
      next(error)
    }
  }

  // GET /search/:search/pedidos
  searchPedidos(req, res, next) {
    return res.status(400).send({ error: 'Em desenvolvimento.' })
  }

  // GET /search/:search
  async search(req, res, next) {
    const offset = Number(req.query.offset) || 0
    const limit = Number(req.query.limit) || 30
    const search = new RegExp(req.params.search, 'i')

    try {
      const clientes = await Cliente.paginate(
        { loja: req.query.loja, nome: { $regex: search } },
        { offset, limit, populate: 'usuario' }
      )
      return res.send({ clientes })
    } catch (error) {
      next(error)
    }
  }

  // GET /admin/:id
  async showAdmin(req, res, next) {
    try {
      const cliente = await (
        await Cliente.findOne({ _id: req.params.id, loja: req.query.loja })
      ).populated('usuario')
      return res.send({ cliente })
    } catch (error) {
      next(error)
    }
  }

  // GET /admin/:id/pedidos
  showPedidosCliente(req, res, next) {
    return res.status(400).send({ error: 'Em desenvolvimento.' })
  }

  // PUT /admin/:id
  async updateAdmin(req, res, next) {
    const { nome, cpf, email, telefones, endereco, dataDeNascimento } = req.body
    try {
      const Cliente = await Cliente.findById(req.params.id).populate('usuario')
      if (nome) {
        cliente.usuario.nome = nome
        cliente.nome = nome
      }
      if (email) cliente.usuario.email = email
      if (cpf) cliente.usuario.cpf = cpf
      if (telefones) cliente.usuario.telefones = telefones
      if (endereco) cliente.usuario.endereco = endereco
      if (dataDeNascimento) cliente.usuario.dataDeNascimento = dataDeNascimento
      await cliente.save()
      return res.send({ cliente })
    } catch (error) {
      next(error)
    }
  }

  /**
   *
   * CLIENTE
   */
  async show(req, res, next) {
    try {
      const cliente = await Cliente.findOne({
        usuario: req.payload.id,
        loja: req.query.loja,
      }).populated('usuario')
      return res.send({ cliente })
    } catch (error) {
      next(error)
    }
  }

  async store(req, res, next) {
    const {
      nome,
      cpf,
      email,
      telefones,
      endereco,
      dataDeNascimento,
      passwrod,
    } = req.body
    const { loja } = req.query

    const usuario = new Usuario({ nome, email, loja })
    usuario.setSenha(password)
    const cliente = new Cliente({
      nome,
      cpf,
      email,
      telefones,
      endereco,
      loja,
      dataDeNascimento,
      usuario: usuario._id,
    })

    try {
      await usuario.save()
      await cliente.save()

      return res.send({
        cliente: Object.assign({}, cliente._doc, { email: usuario.email }),
      })
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    const {
      nome,
      cpf,
      email,
      telefones,
      endereco,
      dataDeNascimento,
      passwrod,
    } = req.body

    try {
      const cliente = await Cliente.findById(req.payload.id).populated(
        'usuario'
      )
      if (nome) {
        cliente.usuario.nome = nome
        cliente.nome = nome
      }
      if (email) cliente.usuario.email = email
      if (password) cliente.usuario.setSenha(password)
      if (cpf) cliente.usuario.cpf = cpf
      if (telefones) cliente.usuario.telefones = telefones
      if (endereco) cliente.usuario.endereco = endereco
      if (dataDeNascimento) cliente.usuario.dataDeNascimento = dataDeNascimento

      await cliente.save()
      return res.send({ cliente })
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      const cliente = await Cliente.findOne({
        usuario: req.payload.id,
      }).populated('usuario')

      await cliente.usuario.remove()
      cliente.deletado = true

      await cliente.save()
      return res.send({ cliente })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ClienteController
