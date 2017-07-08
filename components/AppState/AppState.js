import React from 'react'
import { inject, observer } from 'mobx-react'

const AppState = ({ appStore: { sourcesStore }, appStore }) =>
  <div>
    <h1>Appstore:</h1>
    <div>
      <button onClick={() => sourcesStore.load()}>fetch sources</button>
    </div>
    <pre>
      {JSON.stringify(appStore, null, 2)}
    </pre>
    <p>
      Sources size: {sourcesStore.sources.size}
    </p>
  </div>
export default inject('appStore')(observer(AppState))
