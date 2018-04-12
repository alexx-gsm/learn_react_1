import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { increment, decrement } from '../AC'

export class Counter extends Component {
    static propTypes = {
        count: PropTypes.number,
        dispatch: PropTypes.func
    }

    render() {
        const { counter, increment, decrement } = this.props
        return (
            <div>
                <h1>{counter}</h1>
                <button onClick={increment}>increament me</button>
                <button onClick={decrement}>decrement me</button>
            </div>
        )
    }
}

export default connect( store => ({
    counter: store.counter
}), {
    increment, decrement
})(Counter)