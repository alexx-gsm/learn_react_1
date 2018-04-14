import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterSelect } from '../../AC'

import 'react-select/dist/react-select.css';

class SelectFilter extends Component {

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }

    handleChange = selected => this.props.filterSelect(selected.map(option => option.value)) 
}

export default connect(state => ({
    selected: state.filters.selected,
    articles: state.articles
}), { filterSelect }
)(SelectFilter)