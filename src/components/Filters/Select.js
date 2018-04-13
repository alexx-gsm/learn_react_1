import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterSelect } from '../../AC'

import 'react-select/dist/react-select.css';

class SelectFilter extends Component {

    render() {
        const { articles, filters, filterSelect } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={filters.selected}
            multi={true}
            onChange={this.handleChange}
        />
    }

    handleChange = selected => this.props.filterSelect({ selected }) 
}

export default connect(
    ({ articles, filters }) => ({ articles, filters }),
    { filterSelect }
)(SelectFilter)