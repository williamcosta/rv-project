import React, { Component } from 'react'
import axios from 'axios';

import ProductList from './ProductList.jsx'

export default class ProductSlider extends Component {
     constructor(props) {
        super(props)

        this.state = { products: [] }

        return this.getProducts()
    }

    getProducts() {
        axios.get('../../data.json')
            .then(response =>  this.setState({...this.state, products: response.data[this.props.listType] }))
    }

    render() {
        return (
            <section className="product-grid">
                <h1 className="product-grid__title">{this.props.listTitle}</h1>
                <ProductList productList={this.state.products} />
            </section>
        )
    }
}