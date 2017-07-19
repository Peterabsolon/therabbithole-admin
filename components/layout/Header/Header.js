import React from 'react'
import Link from 'next/link'
import { Toolbar, NavLink } from 'rebass'

const Header = () =>
  (<Toolbar color="white" bg="secondary" pr={0}>
    <Link href="/">
      <NavLink>Feed</NavLink>
    </Link>
    <Link href="/about">
      <NavLink>About</NavLink>
    </Link>
    <Link href="/playground">
      <NavLink>Playground</NavLink>
    </Link>
  </Toolbar>)

export default Header
