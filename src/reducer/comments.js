import {normalizedComments as defaultComments} from '../fixtures'

export default (comments = defaultComments, action) => {
    const { type, payload } = action
    // switch (type) {
    //     case :
            
    //     default:
    //         return comments;
    // }
    return comments;
};