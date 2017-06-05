import React from 'react'
import FilterItem from './FilterItem.jsx'
import { ButtonFilter } from './ButtonFilter.jsx'

export default props => (
    <section className="filter">
        <h4 className="filter__title">Chuteiras HyperVenom:</h4>
        <div className="filter__wrapper">
            <ul className="filter__list">
                <FilterItem filterName="high-top" filterLabel="Cano alto" />
                <FilterItem filterName="low-top" filterLabel="Cano baixo" />
                <FilterItem filterName="campo" filterLabel="Futebol Campo" />
                <FilterItem filterName="society" filterLabel="Futebol Society" />
            </ul>
            <ButtonFilter />
        </div>
    </section>
)
