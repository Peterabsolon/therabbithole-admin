import { types, getParent } from 'mobx-state-tree'

export const Source = types.model('Source', {
  id: types.identifier(),
  category: types.string,
  name: types.string,
  description: types.string,
  url: types.string,
})

export const SourcesStore = types
  .model('SourcesStore', {
    isLoading: types.optional(types.boolean, true),
    sources: types.array(Source),
  })
  .views(self => ({
    get isEmpty() {
      return self.sources.length === 0
    },
    get app() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    load() {
      if (!self.isEmpty) {
        return Promise.resolve({})
      }
      self.markLoading(true)
      return self.app.apiClient.get('/sources?language=en').then(self.receiveJson)
    },
    receiveJson(json) {
      self.markLoading(false)
      self.updateSources(json.sources)
    },
    markLoading(loading) {
      self.isLoading = loading
    },
    updateSources(json) {
      self.sources = []
      json.map(item => self.sources.push(item))
    },
  }))
