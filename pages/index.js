import Layout from 'layouts/Main'

import React from 'react'
import initApp from 'helpers/hoc/initApp'
import SourceSelect from 'components/feed/SourceSelect'
import Feed from 'components/feed/Feed'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SourceSelect />
        <Feed />
      </Layout>
    )
  }
}

export default initApp(Index)
