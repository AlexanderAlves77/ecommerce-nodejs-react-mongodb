import React, { Component } from 'react'

class BlocoImagem extends Component {
  render() {
    const { handleSubmit, imagens, onRemove } = this.props

    return (
      <div className="Bloco-Imagem">
        <div>
          <input type="file" onChange={handleSubmit} />
        </div>
        <div className="imagens-container">
          {imagens.map((src, idx) => (
            <div
              className="imagem-container"
              style={{ backgorundImage: `url("${src})` }}
              key={idx}
            >
              <div className="imagem-remove" onClick={id => onRemove(idx)}>
                <span>{'-'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default BlocoImagem
