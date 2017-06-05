import React from 'react'
import ProductItem from './ProductListItem.jsx'

export default props => (
    <section className="product-grid">
        <h1 className="product-grid__title">{props.listTitle}</h1>
        <ul className="product-list">
            <ProductItem />
        </ul>
    </section>
)