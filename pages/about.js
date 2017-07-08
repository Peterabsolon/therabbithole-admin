import Layout from 'layouts/Main'

import React from 'react'
import initApp from 'helpers/hoc/initApp'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Mobx-state-tree starter kit</h1>
      </Layout>
    )
  }
}

export default initApp(Index)
