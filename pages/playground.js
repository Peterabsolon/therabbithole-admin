import React from 'react'
import Layout from 'layouts/Main'
import initApp from 'helpers/hoc/initApp'

const Index = () =>
  (<Layout>
    <h1>Playground</h1>
  </Layout>)

export default initApp(Index)
