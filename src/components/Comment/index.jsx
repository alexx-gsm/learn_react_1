import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Comment = ({ comment }) => (
    <div>
        <p>{comment.text}</p>
        <small>{comment.user}</small>
    </div>
)

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    // from connect
    text: PropTypes.string,
    user: PropTypes.string
}

export default connect((state, ownProps) => {
    return {
        comment: state.comments.find(comment => comment.id === ownProps.id)
    }
}
)(Comment)
