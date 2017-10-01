import React, { Component } from 'react'
import store from 'store'
// import PropTypes from 'prop-types'

export default class Login extends Component {
  // static propTypes = {
  //   something: PropTypes.any,
  // }

  handleLogin = () => {
    const { email, password, setLoggedIn } = this.props

    const payload = { email, password }

    fetch('http://localhost:8000/auth/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then(({ accessToken }) => {
        store.set('token', accessToken)

        setLoggedIn()
      })
  }

  render() {
    const { email, password, handleInputChange } = this.props

    const inputStyle = {
      display: 'block',
      margin: '10px 0',
    }

    return (
      <div>
        <input
          style={inputStyle}
          name="email"
          placeholder="Email"
          value={email}
          onChange={event => handleInputChange('email', event)}
        />

        <input
          style={inputStyle}
          name="password"
          placeholder="Password"
          value={password}
          onChange={event => handleInputChange('password', event)}
        />

        <button type="button" onClick={this.handleLogin}>
          Submit
        </button>
      </div>
    )
  }
}
