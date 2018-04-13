import React, {Component} from 'react'
import { connect } from 'react-redux'
import Article from '../Article'
import PropTypes from 'prop-types'
import accordion from '../../decorators/accordion'
import { articleDelete } from '../../AC'

class ArticlesList extends Component {
    render() {
        const {articles, toggleOpenItem, openItemId, articleDelete} = this.props
        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    {...article}
                    isOpen = {article.id === openItemId}
                    toggleOpen = {toggleOpenItem(article.id)}
                    clickDelete = { this.handleDelete(article.id) }
                />
            </li>
        ))
        return (
            <ul ref = {this.setContainerRef} >
                {articleElements}
            </ul>
        )
    }

    handleDelete = id => () => this.props.articleDelete(id)
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
};

export default connect(
    null,
    { articleDelete }
)(accordion(ArticlesList))