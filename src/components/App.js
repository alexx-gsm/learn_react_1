import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import './App.css';
import './ArticleList'
import ArticleList from "./ArticleList";
import Filters from './Filters'
import Counter from './Counter'

import './App.css';

class App extends Component {
  render() {
    const { articles, filters } = this.props

    const filteredArticles = this.getFilteredArticles()
    console.log('filtered', filteredArticles)
    

    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
            <Counter />
            <hr/>
            <Filters />
            <ArticleList articles = {filteredArticles.length > 0 ? filteredArticles : articles} />
        </main>
      </div>
    );
  }

  getSelectedArticleIds = (selectedFilter=[]) => selectedFilter.map(filter => filter.value)

  getFilteredArticles = () => {
    const { articles, filters } = this.props
    
    return articles.filter(article => (
      this.getSelectedArticleIds(filters.selected).includes(article.id))
    )
  }
}

export default connect(
  ({articles, filters}) => ({articles, filters})
)(App);