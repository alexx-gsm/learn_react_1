import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { articleDelete } from '../../AC'
import { CSSTransition } from 'react-transition-group'
import CommentList from '../CommentList'
import './style.css'

function Article(props)  {
    const {title, date, toggleOpen, isOpen, id} = props;
    return (
        <article className='article'>
            <h1
                className='article__title'
                onClick={toggleOpen}>
                {title}
                <button onClick={handleDelete(props)}>Delete</button>
            </h1>
            <small>{date}</small>
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
    )
}

function handleDelete({ id, articleDelete }) {
    return function () {
        articleDelete(id)
    }
}

function getBody({ text, comments }) {

    return (
        <div className='article__body'>
            <div className="article__body-wrap">
                <div className='article__text'>{text}</div>
                <CommentList comments={comments}/>
            </div>
        </div>
    )
}

Article.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array,
    clickDelete: PropTypes.func
}

export default connect(
    null, { articleDelete }
)(Article)