import { AppStore } from '../AppStore'
import ApiClient from 'store/mocks/apiClient/apiClient'
import { when } from 'mobx'

const client = new ApiClient()

describe('🗄 App Store', () => {
  it('Init', done => {
    const store = AppStore.create({ title: 'Mobx Starter kit' }, { apiClient: client })
    store.sourcesStore.load()
    expect(store).toMatchSnapshot()
    when(
      () => !store.sourcesStore.isLoading,
      () => {
        expect(store).toMatchSnapshot()
        done()
      }
    )
  })
})
