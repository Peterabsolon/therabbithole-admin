import { onSnapshot, applySnapshot, getSnapshot } from 'mobx-state-tree'

let initial = null

const clear = (model, key = 'app-snapshot') => {
  if (typeof window === 'undefined') {
    return false
  }

  localStorage.setItem(key, JSON.stringify({ title: 'app' }))

  applySnapshot(model, initial)
}

const persist = (model, data, key = 'app-snapshot') => {
  if (typeof window === 'undefined') {
    return false
  }

  initial = getSnapshot(model)

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
  clear,
}
