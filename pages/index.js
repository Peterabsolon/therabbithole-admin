import Layout from 'layouts/Main'

import React from 'react'
import initApp from 'helpers/hoc/initApp'
import AppState from 'components/AppState/AppState'
import ArticleList from 'components/articles/ArticleList/ArticleList'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <AppState />
        <ArticleList />
      </Layout>
    )
  }
}

export default initApp(Index)
