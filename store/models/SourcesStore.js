import { types, getParent, onSnapshot } from 'mobx-state-tree'
import ApiClient from 'helpers/store/apiClient'

const client = new ApiClient()

export const Source = types.model('Source', {
  id: types.identifier(),
  category: types.string,
  name: types.string,
  description: types.string,
  url: types.string
})

export const SourcesStore = types.model(
  'SourcesStore',
  {
    isLoading: types.optional(types.boolean, true),
    sources: types.map(Source),
    get app() {
      return getParent(this)
    }
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
      json.map(item => {
        if (!this.sources.toJSON()[item.id]) {
          this.sources.put(item)
        }
      })
    },
    afterCreate() {
      if (typeof window !== 'undefined') {
        this.load()
      }
    }
  }
)
