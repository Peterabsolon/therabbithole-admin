import React from 'react'
import { Provider } from 'mobx-react'
import { initStore } from 'store/create'

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
          <div>
            <Child {...this.props} />
            <DevTools />
          </div>
        </Provider>
      )
    }
  }
}

export default initApp
