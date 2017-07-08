import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button } from 'rebass'

const AppState = ({ appStore: { sourcesStore }, appStore }) =>
  <div>
    <h1>Appstore:</h1>
    <div>
      <Button
        disabled={sourcesStore.isLoading}
        onClick={() => sourcesStore.load()}
        children="fetch sources"
      />
    </div>
    <pre>
      {JSON.stringify(appStore, null, 2)}
    </pre>
    <p>
      Sources size: {sourcesStore.sources.size}
    </p>
  </div>

export default inject('appStore')(observer(AppState))
