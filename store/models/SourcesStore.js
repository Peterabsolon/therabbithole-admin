import { types, getParent, onSnapshot } from 'mobx-state-tree'
import ApiClient from 'helpers/store/apiClient'

const client = new ApiClient()

export const Source = types.model('Source', {
  id: types.identifier(),
  category: types.string,
  name: types.string,
  description: types.string,
  url: types.string,
})

export const SourcesStore = types.model(
  'SourcesStore',
  {
    isLoading: types.optional(types.boolean, true),
    sources: types.array(Source),
    get app() {
      return getParent(this)
    },
  },
  {
    load() {
      this.markLoading(true)
      client.get('/sources?language=en').then(this.receiveJson)
    },
    receiveJson(json) {
      this.markLoading(false)
      this.updateSources(json.sources)
    },
    markLoading(loading) {
      this.isLoading = loading
    },
    updateSources(json) {
      this.sources = []
      json.map(item => {
        this.sources.push(item)
      })
    },
    afterCreate() {
      if (typeof window !== 'undefined') {
        this.load()
      }
    },
  }
)
