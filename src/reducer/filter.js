import { FILTER_SELECT, FILTER_DATE_RANGE, ARTICLE_DELETE } from '../constants'

const defaultFilters = {
    selected: [],
    dateRange: {
        from: null,
        to: null
    }
}

export default (filters = defaultFilters, action) => {
    const { type, payload } = action
    
    switch (type) {
        case FILTER_SELECT:
            return {
                ...filters,
                selected: payload.selected
            }
        case FILTER_DATE_RANGE:
            return {
                ...filters,
                dateRange: payload.dateRange
            }
        case ARTICLE_DELETE:
            return {
                ...filters,
                selected: filters.selected.filter(id => id !== payload.id)
            }
        default:
            return filters
    }
};