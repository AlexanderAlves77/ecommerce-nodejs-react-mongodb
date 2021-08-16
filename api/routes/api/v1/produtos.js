const router = require('express').Router()

const ProdutoController = require('../../../controllers/ProdutoController')

const {
  LojaValidation,
} = require('../../../controllers/validacoes/lojaValidation')
const Validation = require('express-validation')
const ProdutoValidation = require('../../../controllers/validacoes/produtoValidation')
const auth = require('../../auth')
const upload = require('../../../config/multer')

const produtoController = new ProdutosController()

// ADMIN
router.post(
  '/',
  auth.required,
  LojaValidation.admin,
  Validation(ProdutoValidation.store),
  produtoController.store
)
router.put(
  '/:id',
  auth.required,
  LojaValidation.admin,
  Validation(ProdutoValidation.update),
  produtoController.update
)
router.put(
  '/images/:id',
  auth.required,
  LojaValidation.admin,
  upload.array('files', 4),
  Validation(ProdutoValidation.updateImages),
  produtoController.updateImages
)
router.delete(
  '/',
  auth.required,
  LojaValidation.admin,
  Validation(ProdutoValidation.remove),
  produtoController.remove
)

// CLIENTE/VISITANTES
router.get('/', Validation(ProdutoValidation.index), produtoController.index)
router.get(
  '/disponiveis',
  Validation(ProdutoValidation.indexDisponiveis),
  produtoController.indexDisponiveis
)
router.get(
  '/search/:search',
  Validation(ProdutoValidation.search),
  produtoController.search
)
router.get('/:id', Validation(ProdutoValidation.show), produtoController.show)

// VARIACOES

// AVALIACOES
router.get('/:id/avaliacoes', produtoController.showAvaliacoes)

module.exports = router
