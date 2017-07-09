const methods = ['get', 'post', 'put', 'patch', 'del']

export default class ApiClient {
  constructor(req) {
    methods.forEach(
      method =>
        this[method] = (path, { params, data } = {}) =>
          new Promise((resolve, reject) => {
            const filename = 'get-sources'

            import(`../${filename}.js`).then(module => {
              resolve(module.default)
            })
          })
    )
  }
  empty() {}
}
