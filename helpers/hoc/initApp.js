import React from 'react'
import { Provider } from 'mobx-react'
import { initStore } from 'store/create'
import { Provider as ThemeProvider } from 'rebass'
// TODO remove devtools from production
import DevTools from 'mobx-react-devtools'

function initApp(Child) {
  return class WrappedComponent extends React.Component {
    static getInitialProps(ctx) {
      const isServer = Boolean(ctx.req)
      const { pathname, query } = ctx
      const store = initStore(isServer, ctx.pathname, ctx.query)
      return { store, pathname, query }
    }

    constructor(props) {
      super(props)
      this.store = initStore(false)
    }

    render() {
      return (
        <Provider {...this.store}>
          <ThemeProvider>
            <div>
              <Child {...this.props} />
              <DevTools />
            </div>
          </ThemeProvider>
        </Provider>
      )
    }
  }
}

export default initApp
