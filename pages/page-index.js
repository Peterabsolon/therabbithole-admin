import React from 'react'

import initPage from 'helpers/hoc/initPage'

// UI
import SourceSelect from 'components/feed/SourceSelect'
import Feed from 'components/feed/Feed'

class Index extends React.Component {
  render() {
    return (
      <div>
        <SourceSelect />
        <Feed />
      </div>
    )
  }
}

export default initPage(Index)
