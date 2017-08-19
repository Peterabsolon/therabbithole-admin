import { types } from 'mobx-state-tree'

export const RouterStore = types
  .model('Router', {
    pathname: types.optional(types.string, ''),
    params: types.optional(types.string, ''),
  })
  .actions(self => ({
    openContactPage() {
      self.pathname = '/contact'
    },
    init(pathname, params = '') {
      self.pathname = pathname
      self.params = params
    },
  }))
