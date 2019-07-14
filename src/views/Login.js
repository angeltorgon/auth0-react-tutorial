import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={() => this.props.auth.login()}> Login with Google </button>
            </div>
        )
    }
}
