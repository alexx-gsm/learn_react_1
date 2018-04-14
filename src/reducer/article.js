import { ARTICLE_DELETE } from '../constants'
import { normalizedArticles as defaultArticles } from '../fixtures'

export default (state = defaultArticles, action) => {
    const { type, payload } = action
    
    switch (type) {
        case ARTICLE_DELETE:
            return state.filter(item => item.id !== payload.id)
        default:
            return state
    }
}