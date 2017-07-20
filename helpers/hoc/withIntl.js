import React, { Component } from 'react'
import t from 'prop-types'
import { addLocaleData, IntlProvider } from 'react-intl'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import localeData from '~/locales/localeData'

const intlCache = new Map()
let locale
let messages

export default ComposedComponent =>
  class WithIntl extends Component {
    static propTypes = {
      isServer: t.bool.isRequired,
      locale: t.string.isRequired,
      messages: t.object.isRequired,
    }

    static async getInitialProps(ctx) {
      const isServer = Boolean(ctx.req)
      if (!process.browser) {
        locale = ctx.query.lang || 'en'
        if (!intlCache.has(locale)) {
          const messageFile = require.resolve(`../../locales/${locale}.json`)
          // eslint-disable-next-line global-require, no-sync
          messages = JSON.parse(require('fs').readFileSync(messageFile, 'utf8'))
          intlCache.set(locale, messages)
        }
        messages = intlCache.get(locale)
      }
      console.log('sub', await loadGetInitialProps(ComposedComponent, ctx))
      return {
        locale,
        messages,
        ...loadGetInitialProps(ComposedComponent, ctx),
        isServer,
      }
    }

    constructor(props) {
      super(props)
      locale = props.locale
      messages = props.messages
      if (props.isServer) {
        addLocaleData([...localeData[locale]])
      }
    }

    render() {
      return (
        <IntlProvider locale={locale} messages={messages}>
          <ComposedComponent {...this.props} />
        </IntlProvider>
      )
    }
  }
