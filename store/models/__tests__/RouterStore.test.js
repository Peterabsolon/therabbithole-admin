import { RouterStore } from '../RouterStore'

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
