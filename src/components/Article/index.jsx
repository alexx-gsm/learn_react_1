import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import CommentList from '../CommentList';
import './style.css';

function Article(props)  {
    const {title, toggleOpen, isOpen, clickDelete} = props;
    return (
        <article className='article'>
            <h1
                className='article__title'
                onClick={toggleOpen}>
                {title}
                <button onClick={clickDelete}>Delete</button>
            </h1>
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
        </article>
    );
}

function getBody({ text, comments }) {

    return (
        <div className='article__body'>
            <div className="article__body-wrap">
                <div className='article__text'>{text}</div>
                <CommentList comments={comments}/>
            </div>
        </div>
    );
}

Article.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array,
    clickDelete: PropTypes.func
};

export default Article;