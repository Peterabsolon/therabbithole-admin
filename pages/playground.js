import Layout from 'layouts/Main'

import React from 'react'
import initApp from 'helpers/hoc/initApp'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Playground</h1>
      </Layout>
    )
  }
}

export default initApp(Index)
