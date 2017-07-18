import React from 'react'
import t from 'prop-types'
import { Button as RebassButton } from 'rebass'

const Button = ({ children, disabled = false, onClick }) =>
  (<RebassButton
    onClick={() => onClick()}
    disabled={disabled}
    color="white"
    bg="action"
    children={children}
  />)

Button.propTypes = {
  children: t.string.isRequired,
  disabled: t.bool,
  onClick: t.func.isRequired,
}

Button.defaultProps = {
  disabled: false,
}

export default Button
