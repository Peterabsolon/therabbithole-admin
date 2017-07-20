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

export const ArticleList = types.model(
  'ArticleList',
  {
    isLoading: types.optional(types.boolean, true),
    source: types.reference(Source),
    feed: types.optional(types.array(FeedItem), []),
  },
  {
    load() {
      this.markLoading(true)
      getEnv(this).apiClient
        .get(`/articles?source=${this.source.id}&apiKey=3c6b44553e654c14b9b6a00fe7ba2e0a`)
        .then(this.receiveJson)
    },
    remove() {
      console.log('remove', getEnv(this))

      destroy(this)
    },
    receiveJson(json) {
      this.markLoading(false)
      this.updateSources(json.articles)
    },
    markLoading(loading) {
      this.isLoading = loading
    },
    updateSources(json) {
      this.feed = []
      json.map(item => this.feed.push({ id: this.source.id, ...item }))
    },

    afterAttach() {
      if (typeof window !== 'undefined') {
        this.load()
      }
      // setInterval(() => this.load(), 10000)
    },
    afterCreate() {
      // if (typeof window !== 'undefined') {
      //   this.load()
      // }
      // setInterval(() => this.load(), 10000)
    },
  }
)

export const ArticlesStore = types.model(
  'ArticlesStore',
  {
    list: types.array(ArticleList),
    get app() {
      return getParent(this)
    },
  },
  {
    addSource(source) {
      const entry = this.list.find(item => item.id === source)
      if (!entry) {
        this.list.push({ source })
      }
    },
  }
)
