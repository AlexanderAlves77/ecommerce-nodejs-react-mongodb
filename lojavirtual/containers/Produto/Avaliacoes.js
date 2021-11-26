import React, { Component } from 'react'

class Avaliacoes extends Component {
  renderAvaliacoes() {
    return (
      <div className="avaliacoes-items flex horizontal wrap no-wrap-mb">
        <div className="avaliacao flex-1 flex vertical wrap-3">
          <div className="avaliacao-texto flex-3 flex texto">
            <p>
              Ótimo produto, gostei muito do mouse, utilizo para minhas
              livestreams.
            </p>
          </div>
          <div className="avaliacao-dados flex">
            <div className="avaliacao-nome flex-1 flex">
              <small>João Paulo</small>
            </div>
            <div className="avaliacao-pontuacao flex-1 flex">
              <span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="avaliacao flex-1 flex vertical wrap-3">
          <div className="avaliacao-texto flex-3 flex texto">
            <p>Produto de boa qualidade, gostei da velocidade da entrega.</p>
          </div>
          <div className="avaliacao-dados flex">
            <div className="avaliacao-nome flex-1 flex">
              <small>Maria Aparecida</small>
            </div>
            <div className="avaliacao-pontuacao flex-1 flex">
              <span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="avaliacao flex-1 flex vertical wrap-3">
          <div className="avaliacao-texto flex-3 flex texto">
            <p>O produto não durou um m~es comigo, o cachorro devorou.</p>
          </div>
          <div className="avaliacao-dados flex">
            <div className="avaliacao-nome flex-1 flex">
              <small>Vitor Cesar</small>
            </div>
            <div className="avaliacao-pontuacao flex-1 flex">
              <span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderFormularioDeAvaliacoes() {
    return (
      <div className="avaliacoes-form">
        <h4>Envia sua avaliação para o produto:</h4>
        <div className="flex vertical">
          <div className="flex horizontal">
            <label>Pontuação:&nbsp;</label>
            <select>
              <option valur="1">1 estrela</option>
              <option valur="2">2 estrelas</option>
              <option valur="3">3 estrelas</option>
              <option valur="4">4 estrelas</option>
              <option valur="5">5 estrelas</option>
            </select>
          </div>
          <div className="flex vertical">
            <label>Avaliação:</label>
            <br />
            <textarea
              rows="4"
              style={{ resize: 'none', width: '100%', maxWidth: '500px' }}
              placeholder="Digite aqui a sua avaliação..."
            ></textarea>
          </div>
          <div>
            <button
              onClick={() => alert('Avaliação enviada')}
              className="btn btn-primary btn-lg"
            >
              <span>Enviar Avaliação</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="Avaliacoes flex vertical">
        <h2>Avaliações</h2>
        <br />
        {this.renderAvaliacoes()}
        <br />
        {this.renderFormularioDeAvaliacoes()}
      </div>
    )
  }
}

export default Avaliacoes
