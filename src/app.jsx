import React from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/Filter.jsx'
import ProductSlider from './components/ProductSlider.jsx'

require('./scss/style.scss')

ReactDOM.render(
    <div>
        <Filter />
        <ProductSlider listTitle="Mais Vendidos" listType="best-sellers" />
        <ProductSlider listTitle="Lançamentos" listType="releases" />
    </div>
, document.getElementById('app'))