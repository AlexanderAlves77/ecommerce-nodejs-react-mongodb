import React, { Component } from 'react'

import formatMoney from '../../utils'

const PRODUTOS = [
    {
      id: 69775244,
      fotos: ['/static/img/mouse-1.png'],
      titulo: 'Mouse Gamer 1 - M',
      precoUnitario: 35,
      quantidade: 1,
    },
    {
      id: 52446977,
      fotos: ['/static/img/mouse-2.png'],
      titulo: 'Mouse Gamer 2 - G',
      precoUnitario: 55,
      quantidade: 1,
    }
]

class ListaDeProdutos extends Component {
    renderCabecalhoCarrinho() {
        return (
            <div className='carrinho-cabecalho no-mb-flex flex'>
                <div className='flex-4'></div>
                <div className='headline flex-1 flex flex-center'>
                    <h3 className='text-center'>Quantidade</h3>
                </div>
                <div className='headline flex-1 flex flex-center'>
                    <h3 className='text-center'>Preço Unitário</h3>
                </div>
                <div className='headline flex-1 flex flex-center'>
                    <h3 className='text-center'>Preço Total</h3>
                </div>
                <div className='flex-1'></div>
            </div>
        )
    }

    renderProduto(item) {
        const foto =item.fotos[0]
        const nome = item.titulo
        const { quantidade, precoUnitario } = item

        return (
            <div key={item.id} className='carrinho-item flex'>
                <div className='flex-4 flex'>
                    <div className='produto-image flex-2 flex flex-center'>
                        <img src={foto} alt={nome} width='100px' />
                    </div>
                    <div className='produto-titulo flex-4 flex flex-start'>
                        <h3 className='text-center'>{nome}</h3>
                    </div>
                </div>
                <div className='flex-1 flex flex-center'>
                    <input type='number' defaultValue={quantidade} className='produto-quantidade' />
                </div>
                <div className='flex-1 flex flex-center'>
                    <span>{formatMoney(precoUnitario)}</span>
                </div>
                <div className='flex-1 flex flex-center'>
                    <span>{formatMoney(precoUnitario * quantidade)}</span>
                </div>
                <div className='flex-1 flex flex-center'>
                    <span className='btn-remover'>Remover</span>
                </div>
            </div>
        )
    }

    renderProdutos() {
        return PRODUTOS.map((item) => this.renderProdutos(item))
    }

    render() {
        return (
            <div className='Lista-De-Produtos flex vertical'>
                { this.renderCabecalhoCarrinho() }
                { this.renderProdutos() }
            </div>
        )
    }
}

export default ListaDeProdutos