import React from 'react'

export default props => {
        const productItem = () => {
            const productList = props.productList || []
            return productList.map((product, index) => (
                <li className="product-list__item" key={index}>
                    <a href="#" className="product__image">
                        <img src={product.image} alt={product.title} />
                    </a>
                    <a href="#" role="button" className="customize-button">
                        <img src="./public/images/personalize.jpg" alt="Personalize" className="customize-button__icon" />
                        <span className="customize-button__text">Personalize</span>
                    </a>
                    <div className="product__infos">
                        <h2 className="product__name">{product.title}</h2>
                        <span className="product__type">{ (product['high-top'] === true) ? 'Cano Alto' : 'Cano Baixo'}</span>
                        <span className="product__price">R$ {product.price}</span>
                        <span className="product__installments">ou {product.installments.number}X {product.installments.value} sem juros</span>
                    </div>
                    <div className="product__actions">
                        <a href="#" role="button" className="button [ button--orange ]">Comprar</a>
                    </div>
                </li>
            ))
        }

        return (
            <ul className="product-list">
                {productItem()}
            </ul>
        )
}