const methods = ['get', 'post', 'put', 'patch', 'del']

export default class ApiClient {
  // eslint-disable-next-line no-unused-vars
  constructor(req) {
    methods.forEach(
      // eslint-disable-next-line no-return-assign
      method =>
        this[method] = (path, { params, data } = {}) =>
          new Promise(resolve => {
            const filename = 'get-sources'
            import(`../${filename}.js`).then(module => {
              resolve(module.default)
            })
          })
    )
  }
  empty() {}
}
