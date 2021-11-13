import React, { Component } from 'react'

import ItemBeneficio from '../../components/Item/Beneficio'

const Beneficios = () => (
  <div className="Beneficios">
    <div className="container flex horizontal hotrizontal-mb wrap-mb">
      <ItemBeneficio
        icone="fa-globe"
        texto="Em 12 vezes sem juros para o todo o site"
      />
      <ItemBeneficio icone="fa-truck" texto="Entregamos em todo o Brasil" />
      <ItemBeneficio
        icone="fa-windows"
        texto="Os melhores produtos em informática"
      />
      <ItemBeneficio icone="fa-apple" texto="Fornecedores oficiais" />
    </div>
  </div>
)

export default Beneficios
