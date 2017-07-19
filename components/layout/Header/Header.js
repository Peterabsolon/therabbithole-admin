import React from 'react'
import { Link } from 'routes'
import { Toolbar, NavLink } from 'rebass'

const Header = () =>
  (<Toolbar color="white" bg="secondary" pr={0}>
    <Link route="/cs/">
      <NavLink>Feed</NavLink>
    </Link>
    <Link route="/cs/about">
      <NavLink>About</NavLink>
    </Link>
    <Link route="/cs/playground">
      <NavLink>Playground</NavLink>
    </Link>
  </Toolbar>)

export default Header
