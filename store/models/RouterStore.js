import { types } from 'mobx-state-tree'

export const RouterStore = types.model(
  'Router',
  {
    pathname: types.optional(types.string, ''),
    params: types.optional(types.string, ''),
  },
  {
    openContactPage() {
      this.pathname = '/contact'
    },
    init(pathname, params = '') {
      this.pathname = pathname
      this.params = params
    },
  }
)
