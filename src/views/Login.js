import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.auth.login()}> Login with Google </button>
                <button onClick={() => this.props.auth.logout()}> Logout with Google </button>
            </div>
        )
    }
}
