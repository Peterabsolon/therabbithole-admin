import { AppStore } from './models/AppStore'
import { onAction, applySnapshot } from 'mobx-state-tree'
import config from '~/config'

import ApiClient from '~/helpers/store/apiClient'

const client = new ApiClient()

let store = null

const stores = (isServer, initialValues) => ({
  appStore: AppStore.create(initialValues || { title: 'Mobx Starter kit' }, { apiClient: client }),
})

// onAction(stores.appStore, action => {
//   if (action.name === 'reset') {
//     applySnapshot(stores.appStore, { title: 'restart' })
//   }
// })

if (!config.isProduction) {
  /* eslint-disable global-require */
  // const devtools = require('mobx-state-tree')
  // devtools.connectReduxDevtools(require('remotedev'), stores.appStore)
}

export function initStore(isServer, initialValues) {
  if (isServer && typeof window === 'undefined') {
    return stores(isServer, initialValues)
  }
  if (store === null) {
    store = stores(isServer, initialValues)
  }
  return store
}
