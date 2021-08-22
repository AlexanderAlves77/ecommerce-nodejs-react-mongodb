module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'live' : 'sandbox',
  sandbox: process.env.NODE_ENV === 'production' ? false : true,
  sandbox_email:
    process.env.NODE_ENV === 'production'
      ? null
      : 'c76673888583346706123@sandbox.pagseguro.com.br',
  email: '*************@gmail.com',
  token: '*****************************',
  notificationURL:
    'https://api.loja-teste.com.br/v1/api/pagamentos/notificacao',
}
