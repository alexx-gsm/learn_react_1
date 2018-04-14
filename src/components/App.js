import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'
import './ArticleList'
import ArticleList from "./ArticleList"
import Filters from './Filters'
import Counter from './Counter'

import './App.css';

class App extends Component {
  render() { 
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
            <ArticleList />
        </main>
      </div>
    )
  }
}

export default App