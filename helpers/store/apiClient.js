import superagent from 'superagent'

const methods = ['get', 'post', 'put', 'patch', 'del']

function formatUrl(path) {
  // const adjustedPath = path[0] !== '/' ? '/' + path : path;
  // if (__SERVER__) {
  //   // Prepend host and port of the API server to the path.
  //   return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath;
  // }
  // Prepend `/api` to relative URL, to proxy to API server.

  // eslint-disable-next-line no-process-env
  return process.env.API_URL + path
}

export default class ApiClient {
  // eslint-disable-next-line no-unused-vars
  constructor(req) {
    methods.forEach(
      // eslint-disable-next-line no-return-assign
      method =>
        this[method] = (path, { params, data } = {}) =>
          new Promise((resolve, reject) => {
            const request = superagent[method](formatUrl(path))

            if (params) {
              request.query(params)
            }

            if (data) {
              request.send(data)
            }

            request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body))
          })
    )
  }
  empty() {}
}
