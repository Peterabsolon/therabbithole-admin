import React from 'react'
import { pageWithoutLayout } from 'helpers/hoc/initPage'

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Page without layout</h1>
      </div>
    )
  }
}

export default pageWithoutLayout(Index)
