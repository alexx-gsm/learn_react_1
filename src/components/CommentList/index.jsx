import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Comment from '../Comment';
import CommentForm from '../CommentForm';
import toggleOpen from '../../decorators/toggleOpen';

function CommentList(props) {
    const {comments, isOpen, handleClick} = props;
    const btnTitle = comments.length === 0
        ? 'No'
        : isOpen
            ? 'Hide'
            : 'Show';

    return (
        <div>
            <button onClick={handleClick}>{btnTitle} comments</button>
            <CSSTransition
                in={isOpen}
                timeout={{
                    enter: 300,
                    exit: 100,
                }}
                classNames="item"
                unmountOnExit
            >
                {getBody(props)}
            </CSSTransition>
        </div>
    )
}

function getBody({comments}) {
    const commentElements = comments.map( id => (
        <li key={id}>
            <Comment id={id}/>
        </li>
    ));

    return (
        <div>
            <CommentForm/>
            <ul>{commentElements}</ul>
        </div>

    );
};


CommentList.defaultProps = {
    comments: []
};

CommentList.propTypes = {
    comments: PropTypes.array
};

export default toggleOpen(CommentList);
