// import { when } from 'mobx'
import { AppStore } from '../AppStore'

// const bookFetcher = () => Promise.resolve(JSON.parse(fs.readFileSync("./public/books.json")))

// it('bookstore fetches data', () => {
//   const store = AppStore.create({ title: 'App title' })
//   console.log('created store', store.sourcesStore.sources.length)
//   expect(store.sourcesStore.sources.length).toBe(0)
//   //   when(
//   //     () => store.isLoading === false,
//   //     () => {
//   //       expect(store.sourcesStore.sources.length).toBe(0)
//   //       done()
//   //     }
//   //   )
// })
describe('🗄 App Store', () => {
  it('Init', () => {
    const store = AppStore.create({ title: 'Mobx Starter kit' })
    expect(store).toMatchSnapshot()
  })
})
