import { AppStore } from '../AppStore'

describe('🗄 App Store', () => {
  it('Init', () => {
    const store = AppStore.create({ title: 'Mobx Starter kit' })
    expect(store).toMatchSnapshot()
  })
})
