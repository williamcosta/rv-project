import React, { Component } from 'react'
import ProductItem from './ProductListItem.jsx'

export default class ProductList extends Component {
    render() {
        return (
            <section className="product-grid">
                <h1 className="product-grid__title">{this.props.listTitle}</h1>
                <ul className="product-list">
                    <ProductItem />
                </ul>
            </section>
        )
    }
}