import { combineReducers } from 'redux'
import counter from './counter'
import articles from './article'
import comments from './comments'
import filters from './filter'

export default combineReducers({
    counter,
    articles,
    comments,
    filters
})