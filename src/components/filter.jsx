import React from 'react'

export default props => (
    <section className="filter">
        <h4 className="filter__title">Chuteiras HyperVenom:</h4>
        <div className="filter__wrapper">
            <ul className="filter__list">
                <li className="filter__list__item">
                    <input type="checkbox" id="high-top" name="high-top" value="" />
                    <label for="high-top">Cano alto</label>
                </li>
                <li className="filter__list__item">
                    <input type="checkbox" id="low-top" name="low-top" value="" />
                    <label for="low-top">Cano baixo</label>
                </li>
                <li className="filter__list__item">
                    <input type="checkbox" id="campo" name="campo" value="" />
                    <label for="campo">Futebol Campo</label>
                </li>
                <li className="filter__list__item">
                    <input type="checkbox" id="society" name="society" value="" />
                    <label for="society">Futebol Society</label>
                </li>
            </ul>
            <button type="button" role="button" className="button [ button--dark ] filter__button">Todos os Produtos</button>
        </div>
    </section>
)
