import { Component } from 'react'
import { loadGetInitialProps } from 'next/dist/lib/utils'

import { Provider } from 'mobx-react'
import { initStore } from 'store/create'
import DevTools from 'mobx-react-devtools'

export default ComposedComponent =>
  class WithData extends Component {
    static async getInitialProps(ctx) {
      const subProps = await loadGetInitialProps(ComposedComponent, ctx)
      const isServer = Boolean(ctx.req)
      const { pathname, query } = ctx
      const store = initStore(isServer, ctx.pathname, ctx.query)
      return { store, url: { query, pathname }, ...subProps }
    }

    constructor(props) {
      super(props)
      this.store = initStore(false)
    }

    render() {
      return (
        <Provider {...this.store}>
          <div>
            <ComposedComponent {...this.props} />
            <DevTools />
          </div>
        </Provider>
      )
    }
  }
