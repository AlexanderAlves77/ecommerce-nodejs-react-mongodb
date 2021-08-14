const router = require('express').Router()

const ClienteController = require('../../../controllers/ClienteController')
const {
  LojaValidation,
} = require('../../../controllers/validacoes/lojaValidation')
const {
  ClienteValidation,
} = require('../../../controllers/validacoes/clienteValidation')
const Validation = require('express-validation')
const auth = require('../../auth')

const clienteController = new ClienteController()

// ADMIN
router.get('/', auth.required, LojaValidation.admin, clienteController.index)
// router.get(
//   '/search/:search/pedidos',
//   auth.required,
//   LojaValidation.admin,
//   clienteController.searchPedidos
// )
router.get(
  '/search/:search',
  auth.required,
  LojaValidation.admin,
  clienteController.search
)
router.get(
  '/admin/:id',
  auth.required,
  LojaValidation.admin,
  clienteController.showAdmin
)
// router.get(
//   '/admin/:id/:pedidos',
//   auth.required,
//   LojaValidation.admin,
//   clienteController.showPedidosCliente
// )

router.put(
  '/admin/:id',
  auth.required,
  LojaValidation.admin,
  clienteController.updateAdmin
)

// CLIENTE
router.get('/:id', auth.required, clienteController.show)

router.post('/', clienteController.store)
router.put('/:id', auth.required, clienteController.update)
router.remove('/:id', auth.required, clienteController.remove)

module.exports = router