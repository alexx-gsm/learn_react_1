import React, {Component} from 'react';
import './style.css';

const limits = {
    text: {
        min: 10,
        max: 50
    },
    user: {
        min: 5,
        max: 10
    }
};

class CommentForm extends Component {
    state = {
        text: '',
        user: '',
    };

    render() {
        return (
            <fieldset className='form-wrap'>
                <legend>add new comment</legend>
                <form action="#">
                    <div className={`form-group ${this.getClassName('text')}`}>
                        <label htmlFor="">text:</label>
                        <input
                            type='text'
                            value={this.state.text}
                            onChange={this.handleChange('text')}
                        />
                    </div>
                    <div className={`form-group ${this.getClassName('user')}`}>
                        <label htmlFor="">author:</label>
                        <input
                            type='text'
                            value={this.state.user}
                            onChange={this.handleChange('user')}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </fieldset>

        )
    }

    handleChange = type => ev => {
        const { value } = ev.target;
        if (value.length > limits[type].max) return;
        this.setState({
            [type]: value
        });
    };

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({
            text: '',
            user: ''
        });
    };

    getClassName = type => (this.state[type].length && this.state[type].length < limits[type].min)
        ? 'error'
        : ''
}

export default CommentForm;