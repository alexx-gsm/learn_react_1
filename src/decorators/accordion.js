import React from 'react';

export default (Original) => class Accordion extends React.Component {
    state = {
        openItemId: null
    };

    toggleOpenItem = openItemId => () => {
        if (openItemId === this.state.openItemId) {
            this.setState({ openItemId: null });
        } else {
            this.setState({ openItemId });
        }
    };

    render() {
        return(
            <Original
                {...this.props}
                openItemId={this.state.openItemId}
                toggleOpenItem={this.toggleOpenItem}
            />
        )
    }
}