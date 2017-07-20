import React from 'react'
import defaultTheme from '~/styles/theme/defaultTheme'
import { Provider } from 'rebass'

export default ComposedComponent => props =>
  (<Provider theme={defaultTheme}>
    <ComposedComponent {...props} />
  </Provider>)
