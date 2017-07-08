import { onSnapshot, applySnapshot } from 'mobx-state-tree'

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
    applySnapshot(model, JSON.parse(received))
  }
  model.markLoading(false)
}

export default {
  persist,
}
