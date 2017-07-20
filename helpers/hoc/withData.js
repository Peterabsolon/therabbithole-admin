import React, { Component } from 'react'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import { applySnapshot, getSnapshot } from 'mobx-state-tree'
import makeUrl from '~/helpers/makeurl'
import { Provider } from 'mobx-react'
import { initStore } from '~/store/create'
import DevTools from 'mobx-react-devtools'
import camelCase from 'lodash/camelCase'

export default ComposedComponent =>
  class WithData extends Component {
    static async getInitialProps(ctx) {
      const page = camelCase(`init-${makeUrl(ctx.pathname)}`)
      const subProps = await loadGetInitialProps(ComposedComponent, ctx)
      const isServer = Boolean(ctx.req)
      const { pathname, query } = ctx

      console.log('new init', subProps)
      const store = initStore(isServer)
      if (typeof store.appStore[page] === 'function') {
        await store.appStore[page]().catch(err => {
          console.log('err', err)
        })
      }
      return { snapshot: getSnapshot(store.appStore), url: { query, pathname }, ...subProps }
    }

    constructor(props) {
      super(props)
      console.log(props.snapshot)
      this.store = initStore(false, props.snapshot)
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
