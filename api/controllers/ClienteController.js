const mongoose = require('mongoose')
const Cliente = mongoose.model('Cliente')
const Usuario = mongoose.model('Usuario')

class ClienteController {
  // GET / index
  async index(req, res, next) {
    try {
      const offset = Number(req.query.offset) || 0
      const limit = Number(req.query.limit) || 30
    } catch (error) {}
  }
}

module.exports = ClienteController
