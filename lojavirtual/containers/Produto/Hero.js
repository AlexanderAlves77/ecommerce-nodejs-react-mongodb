import React, { Component } from 'react'

export default class Hero extends Component {
  renderPhotos() {}

  renderDetalhes() {}

  render() {
    return (
      <div className="flex horizontal">
        {this.renderPhotos()}
        {this.renderDetalhes()}
      </div>
    )
  }
}
