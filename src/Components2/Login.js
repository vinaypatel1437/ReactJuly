import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="email" placeholder="Type your Email" />
        <input type="password" placeholder="Type your password"/>
        <button type="submit">Login</button>
      </div>
    )
  }
}
