import { types, getParent, onSnapshot } from 'mobx-state-tree'
import ApiClient from 'helpers/store/apiClient'
import { Source } from './SourcesStore'

const client = new ApiClient()

export const FeedItem = types.model('FeedItem', {
  id: types.identifier(),
  author: types.string,
  publishedAt: types.string,
  description: types.string,
  title: types.string,
  url: types.string,
  urlToImage: types.string
})

export const ArticleList = types.model(
  'ArticleList',
  {
    isLoading: types.optional(types.boolean, true),
    source: types.reference(Source),
    feed: types.optional(types.array(FeedItem), [])
  },
  {
    load() {
      this.markLoading(true)
      console.log('fetch', this.source.id)
      client
        .get(`/articles?source=${this.source.id}&apiKey=3c6b44553e654c14b9b6a00fe7ba2e0a`)
        .then(this.receiveJson)
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
      json.map(item => {
        console.log('push item', item)
        this.feed.push({ id: this.source.id, ...item })
      })
    },
    afterCreate() {
      if (typeof window !== 'undefined') {
        this.load()
      }
    }
  }
)

export const ArticlesStore = types.model(
  'ArticlesStore',
  {
    list: types.array(ArticleList),
    get app() {
      return getParent(this)
    }
  },
  {
    addSource(source) {
      const entry = this.list.find(entry => entry.id === source)
      if (!entry) {
        this.list.push({ source })
      }
    }
  }
)