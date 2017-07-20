import React from 'react'
import Link from '~/helpers/router/Link'
import { Toolbar, NavLink } from 'rebass'

const Header = () =>
  (<Toolbar color="white" bg="secondary" pr={0}>
    <Link route="/" prefetch>
      <NavLink>Feed</NavLink>
    </Link>
    <Link route="/about">
      <NavLink>About</NavLink>
    </Link>
    <Link route="/playground">
      <NavLink>Playground</NavLink>
    </Link>
  </Toolbar>)

export default Header
