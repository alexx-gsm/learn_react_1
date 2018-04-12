import React from 'react';

export default (Original) => class ToggleOpen extends React.Component {
    state = {
        isOpen: false
    };
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return(
            <Original
                {...this.props}
                isOpen={this.state.isOpen}
                handleClick={this.handleClick}
            />
        )
    }
}