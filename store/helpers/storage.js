import { onSnapshot, applySnapshot, getSnapshot } from 'mobx-state-tree'
import { AppStore } from '../models/AppStore'

const clear = model => {
  if (typeof window === 'undefined') {
    return false
  }

  const newStore = AppStore.create({ title: 'new app' })

  console.log(getSnapshot(newStore))
  // applySnapshot(model, getSnapshot(AppStore.create({ title: 'new app' })))
}

const persist = (model, data, key = 'app-snapshot') => {
  if (typeof window === 'undefined') {
    return false
  }
  const received = localStorage.getItem(key)
  onSnapshot(model, snapshot => {
    localStorage.setItem(key, JSON.stringify(snapshot))
  })
  if (received) {
    model.markLoading(true)
    // applySnapshot(model, JSON.parse(received))
  }
  model.markLoading(false)
}

export default {
  persist,
  clear,
}
