import React from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/Filter.jsx'
import ProductList from './components/ProductList.jsx'

require('./scss/style.scss')

ReactDOM.render(
    <div>
        <Filter />
        <ProductList listTitle="Mais Vendidos" />
        <ProductList listTitle="Lançamentos" />
    </div>
, document.getElementById('app'))