import React, { Component } from 'react'

export default class FilterItem extends Component {
    render() {
        return (
            <li className="filter__list__item">
                <input type="checkbox" id={this.props.filterName} name={this.props.filterName} value="" />
                <label htmlFor={this.props.filterName} >{this.props.filterLabel}</label>
            </li>
        )
    }
}
