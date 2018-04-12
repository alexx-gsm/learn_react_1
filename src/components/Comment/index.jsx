import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({text}) => <span>{text}</span>;

Comment.propTypes = {
    text: PropTypes.string
};

export default Comment;
