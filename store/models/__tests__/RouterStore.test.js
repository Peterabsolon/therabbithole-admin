// import { when } from 'mobx'
import { RouterStore } from '../RouterStore'

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
describe('🗄 Router Store', () => {
  it('Init', () => {
    const store = RouterStore.create()
    expect(store).toMatchSnapshot()
  })

  it('Create with pathname', () => {
    const store = RouterStore.create({ pathname: '/test' })
    expect(store).toMatchSnapshot()
  })

  it('Open page', () => {
    const store = RouterStore.create({ pathname: '/test' })
    store.openContactPage()
    expect(store).toMatchSnapshot()
  })
})
