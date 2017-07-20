import React from 'react'
import { Link as RouterLink } from '~/routes'

const Link = props => {
  let language

  if (typeof window !== 'undefined') {
    language = window.location.pathname.slice(0, 3)
  }
  const route = language + props.route
  return <RouterLink {...props} route={route} />
}

export default Link
