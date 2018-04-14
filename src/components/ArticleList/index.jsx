import React, {Component} from 'react'
import { connect } from 'react-redux'
import Article from '../Article'
import PropTypes from 'prop-types'
import accordion from '../../decorators/accordion'
import { filtratedArticlesSelector } from '../../selectors'

class ArticlesList extends Component {
    render() {
        const {articles, toggleOpenItem, openItemId } = this.props
        const articleElements = articles.map(article => (
            <li key = {article.id}>
                <Article
                    {...article}
                    isOpen = {article.id === openItemId}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>
        ))
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
};

export default connect( state => ({ articles: filtratedArticlesSelector(state) })
)(accordion(ArticlesList))