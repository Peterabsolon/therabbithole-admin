import { types, getEnv } from 'mobx-state-tree'
import { SourcesStore } from './SourcesStore'
import { RouterStore } from './RouterStore'
import { ArticlesStore } from './ArticlesStore'
// import config from '~/config'

// import storage from 'store/helpers/storage'

export const AppStore = types
  .model('AppStore', {
    title: types.string,
    isLoading: types.optional(types.boolean, true),
    sourcesStore: types.optional(SourcesStore, {
      sources: [],
    }),
    articlesStore: types.optional(ArticlesStore, {
      list: [],
    }),
    router: types.optional(RouterStore, {
      pathname: '',
      params: '',
    }),
  })
  .views(self => ({
    get apiClient() {
      return getEnv(self).apiClient
    },
  }))
  .actions(self => ({
    markLoading(loading) {
      self.isLoading = loading
    },
    initPageIndex() {
      return self.sourcesStore.load()
    },
  }))
