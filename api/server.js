// PACOTES
const compression = require('compression')
const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

// START
const app = express()

// AMBIENTE
const isProduction = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 3000

// ARQUIVOS ESTATICOS
app.use('/public', express.static(__dirname + '/public'))
app.use('/public/images', express.static(__dirname + '/public/images'))

// SETUP MONGODB
const dbs = require('./config/database')
const dbURI = isProduction ? dbs.dbProduction : dbs.dbTeste
mongoose.connect(dbURI, { useNewUrlParser: true })

// SETUP EJS
app.set('view engine', 'ejs')

// CONFIGURAÇÔES
if (!isProduction) app.use(morgan('dev'))
app.use(cors())
app.disable('x-powered-by')
app.use(compression())

// SETUP BODY PARSER
app.use(express.urlencoded({ extended: false, limit: 1.5 * 1024 * 1024 }))
app.use(express.json({ limit: 1.5 * 1024 * 1024 }))

// MODELS
require('./models')
// ROTAS
app.use('/', require('./routes'))

// 404
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// ROTA - 402, 500, 401
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  if (err.status !== 404) console.warn('Error: ', err.message, new Date())
  res.json({ errors: { message: err.message, status: err.status } })
})

// ESCUTAR
app.listen(PORT, err => {
  if (err) throw err
  console.log(`Rodando na //localhost:${PORT}`)
})
