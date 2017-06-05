import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <li className="product-list__item">
                <a href="#" className="product__image">
                    <img src="./public/images/products/chuteira-nike-hypervenomx-proximo-2-society.jpg" alt="Chuteira Nike HyperVenomX Proximo II Society" />
                </a>
                <a href="#" role="button" className="customize-button">
                    <img src="./public/images/personalize.jpg" alt="Personalize" className="customize-button__icon" />
                    <span className="customize-button__text">Personalize</span>
                </a>
                <div className="product__infos">
                    <h2 className="product__name">Chuteira Nike HyperVenomX Proximo II Society</h2>
                    <span className="product__type">Cano Alto</span>
                    <span className="product__price">R$ 499,90</span>
                    <span className="product__installments">ou 10X 49,90 sem juros</span>
                </div>
                <div className="product__actions">
                    <a href="#" role="button" className="button [ button--orange ]">Comprar</a>
                </div>
            </li>
        )
    }
}