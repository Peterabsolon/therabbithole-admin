import { types, getParent, onSnapshot } from 'mobx-state-tree'

export const RouterStore = types.model(
  'Router',
  {
    pathname: types.optional(types.string, ''),
    params: types.optional(types.string, ''),
  },
  {
    openContactPage() {
      this.page = 'contact'
    },
    init(pathname, params = '') {
      this.pathname = pathname
      this.params = params
    },
  }
)
