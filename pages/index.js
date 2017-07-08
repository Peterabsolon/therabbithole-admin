import Layout from 'layouts/Main'

import React from 'react'
import initApp from 'helpers/hoc/initApp'
import AppState from 'components/AppState/AppState'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <AppState />
      </Layout>
    )
  }
}

export default initApp(Index)
