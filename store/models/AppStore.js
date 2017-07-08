import { types } from 'mobx-state-tree'
import { SourcesStore } from './SourcesStore'
import { RouterStore } from './RouterStore'
import ApiClient from 'helpers/store/apiClient'
import storage from 'store/helpers/storage'

const client = new ApiClient()

export const AppStore = types.model(
  'AppStore',
  {
    title: types.string,
    isLoading: types.optional(types.boolean, true),
    sourcesStore: types.optional(SourcesStore, {
      sources: {},
    }),
    router: types.optional(RouterStore, {
      pathname: '',
      params: '',
    }),
  },
  {
    markLoading(loading) {
      this.isLoading = loading
    },
    afterCreate() {
      storage.persist(this)
    },
  }
)
