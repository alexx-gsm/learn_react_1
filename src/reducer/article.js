import { ARTICLE_DELETE } from '../constants'
import { articles } from '../fixtures'

export default (state = articles, action) => {
    const { type, payload } = action
    switch (type) {
        case ARTICLE_DELETE:
            return state.filter(item => item.id !== payload.id)
        default:
            return state
    }
};