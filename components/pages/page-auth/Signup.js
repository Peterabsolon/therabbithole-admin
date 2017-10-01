import React, { Component } from 'react'
import store from 'store'
// import PropTypes from 'prop-types'

export default class Login extends Component {
  // static propTypes = {
  //   something: PropTypes.any,
  // }

  handleSignup = () => {
    const { firstName, lastName, email, password, setLoggedIn } = this.props

    const payload = { email, password, firstName, lastName }

    fetch('http://localhost:8000/auth/signup', {
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
    const { firstName, lastName, email, password, handleInputChange } = this.props

    const inputStyle = {
      display: 'block',
      margin: '10px 0',
    }

    return (
      <div>
        <input
          style={inputStyle}
          name="firstName"
          placeholder="First name"
          value={firstName}
          onChange={event => handleInputChange('firstName', event)}
        />

        <input
          style={inputStyle}
          name="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={event => handleInputChange('lastName', event)}
        />

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

        <button type="button" onClick={this.handleSignup}>
          Submit
        </button>
      </div>
    )
  }
}
