import React, { Component } from 'react';

export default class Callback extends Component {

    componentDidMount() {
        this.props.auth.handleAuthentication();
    }

    render() {
        return (
            <div>
                <h1>Callback</h1>
            </div>
        )
    }
}
