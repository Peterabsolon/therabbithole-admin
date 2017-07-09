import { AppStore } from './models/AppStore'
import { onAction, getSnapshot, applySnapshot } from 'mobx-state-tree'
import config from 'config'

let store = null

const stores = {
  appStore: AppStore.create({ title: 'Mobx Starter kit' }),
}

const initialSnapshot = {}

onAction(stores.appStore, action => {
  if (action.name === 'reset') {
    console.log('run', initialSnapshot)
    applySnapshot(stores.appStore, { title: 'restart' })
  }
})

if (!config.isProduction) {
  /* eslint-disable global-require */
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
