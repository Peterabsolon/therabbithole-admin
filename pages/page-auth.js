import React, { Component } from 'react'
import store from 'store'
// import PropTypes from 'prop-types'

import Login from '../components/pages/page-auth/Login'
import Signup from '../components/pages/page-auth/Signup'

export default class PageAuth extends Component {
  // static propTypes = {
  //   something: PropTypes.any,
  // }

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isLoggedIn: false,
    isOnSignup: false,
  }

  componentDidMount() {
    const isLoggedIn = store.get('token')

    // eslint-disable-next-line
    isLoggedIn && this.setLoggedIn()
  }

  setLoggedIn = () => this.setState({ isLoggedIn: true })

  handleInputChange = (name, event) =>
    this.setState({
      [name]: event.target.value,
    })

  handleToggleSignup = () =>
    this.setState({ isOnSignup: !this.state.isOnSignup })

  handleLogout = () => {
    store.remove('token')

    this.setState({ isLoggedIn: false })
  }

  render() {
    const { firstName, lastName, email, password, isOnSignup } = this.state
    const isLoggedIn = store.get('token')

    const commonProps = {
      email,
      password,
      firstName,
      lastName,
      handleInputChange: this.handleInputChange,
      setLoggedIn: this.setLoggedIn,
    }

    return (
      <div>
        {isLoggedIn
          ? <div style={{ width: '100%', height: '5px', background: 'red' }} />
          : null}

        {isOnSignup ? <Signup {...commonProps} /> : <Login {...commonProps} />}

        <button
          style={{ display: 'block', marginTop: '30px' }}
          type="button"
          onClick={this.handleToggleSignup}
        >
          {isOnSignup ? 'Login' : 'Signup'}
        </button>

        <button
          style={{ display: 'block', marginTop: '100px' }}
          type="button"
          onClick={this.handleLogout}
        >
          Logout
        </button>
      </div>
    )
  }
}
