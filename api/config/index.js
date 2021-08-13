module.exports = {
  secret:
    process.env.NODE_ENV === 'production'
      ? process.env.SECRET
      : 'AW@KM4%3@6TM3T&M@K&%GM$QK#PN@G49#03$167',
  api:
    process.env.NODE_ENV === 'production'
      ? 'https://api.loja-teste.com.br'
      : 'http://localhost:3000',
  loja:
    process.env.NODE_ENV === 'production'
      ? 'https://loja-teste.com.br'
      : 'http://localhost:8000',
}
