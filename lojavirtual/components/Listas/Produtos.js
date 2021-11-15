import React, { Component } from 'react'

import Produto from '../Item/Produto'

class Produtos extends Component {
  componentDidMount() {
    var highest = 0
    document.querySelectorAll('.produto-title').forEach(function (item) {
      if (highest < item.clientHeight) highest = item.clientHeight
    })
    document.querySelectorAll('.produto-title').forEach(function (item) {
      item.style.height = highest + 10 + 'px'
    })
  }

  render() {
    const { produtos, itensPorLinha } = this.props

    return (
      <div className="Produtos flex wrap">
        {produtos.map(item => (
          <Produto item={item} key={item.id} porLinha={itensPorLinha} />
        ))}
      </div>
    )
  }
}

export default Produtos
