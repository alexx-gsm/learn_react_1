import { FILTER_SELECT, FILTER_DATE_RANGE } from '../constants'
import { Z_VERSION_ERROR } from 'zlib';

const dateRange = {
    from: null,
    to: null
}

export default (state = {dateRange}, action) => {
    const { type, payload } = action
    switch (type) {
        case FILTER_SELECT:
            return {
                ...state,
                ...payload.selected
            }
        case FILTER_DATE_RANGE:
            return {
                ...state,
                ...payload.dateRange
            }
        default:
            return state
    }
};