import { types, getParent, destroy, getEnv } from 'mobx-state-tree'
import { Source } from './SourcesStore'

export const FeedItem = types.model('FeedItem', {
  id: types.identifier(),
  author: types.maybe(types.string),
  publishedAt: types.maybe(types.string),
  description: types.string,
  title: types.string,
  url: types.string,
  urlToImage: types.string,
})

export const ArticleList = types
  .model('ArticleList', {
    isLoading: types.optional(types.boolean, true),
    source: types.reference(Source),
    feed: types.optional(types.array(FeedItem), []),
  })
  .actions(self => ({
    load() {
      self.markLoading(true)
      getEnv(self).apiClient
        .get(`/articles?source=${self.source.id}&apiKey=3c6b44553e654c14b9b6a00fe7ba2e0a`)
        .then(self.receiveJson)
    },
    remove() {
      console.log('remove', getEnv(self))

      destroy(self)
    },
    receiveJson(json) {
      self.markLoading(false)
      self.updateSources(json.articles)
    },
    markLoading(loading) {
      self.isLoading = loading
    },
    reset() {
      self.feed = []
    },
    updateSources(json) {
      self.reset()
      json.map(item => self.feed.push({ id: self.source.id, ...item }))
    },
    afterAttach() {
      self.load()
    },
  }))

export const ArticlesStore = types
  .model('ArticlesStore', {
    list: types.array(ArticleList),
  })
  .views(self => ({
    get app() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    addSource(source) {
      const entry = self.list.find(item => item.id === source)
      if (!entry) {
        self.list.push({ source })
      }
    },
  }))
