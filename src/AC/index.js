import {
    INCREMENT,
    DECREMENT,
    ARTICLE_DELETE,
    FILTER_SELECT,
    FILTER_DATE_RANGE
} from '../constants'

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export const articleDelete = id => ({
    type: ARTICLE_DELETE,
    payload: {id}
});

export const filterSelect = selected => ({
    type: FILTER_SELECT,
    payload: { selected }
})

export const filterDateRange = dateRange => ({
    type: FILTER_DATE_RANGE,
    payload: { dateRange }
})