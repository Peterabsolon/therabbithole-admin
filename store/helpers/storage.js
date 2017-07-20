import { onSnapshot, applySnapshot } from 'mobx-state-tree'

const persist = (model, data, key = 'snap') => {
  if (typeof window === 'undefined') {
    return false
  }
  const received = localStorage[key]
  onSnapshot(model, snapshot => {
    localStorage.setItem(key, JSON.stringify(snapshot))
  })
  if (received) {
    model.markLoading(true)
    applySnapshot(model, JSON.parse(received))
  }
  model.markLoading(false)
  return true
}

export default {
  persist,
}
