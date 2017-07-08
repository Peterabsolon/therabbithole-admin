//
import { AppStore } from './models/AppStore'

let store = null
const stores = {
  appStore: AppStore.create({ title: 'Mobx Starter kit' }),
}

if (process.env.NODE_ENV !== 'production') {
  const devtools = require('mobx-state-tree')
  devtools.connectReduxDevtools(require('remotedev'), stores.appStore)
}

export function initStore(isServer, pathname, query) {
  if (isServer && typeof window === 'undefined') {
    return stores
  }
  if (store === null) {
    store = stores
  }
  return store
}
