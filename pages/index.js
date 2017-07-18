import Layout from 'layouts/Main'

import React from 'react'
import initApp from 'helpers/hoc/initApp'
import AppState from 'components/AppState/AppState'
import Feed from 'components/feed/Feed'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <AppState />
        <Feed />
      </Layout>
    )
  }
}

export default initApp(Index)
