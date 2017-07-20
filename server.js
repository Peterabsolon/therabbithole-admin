/* eslint-disable no-process-env */
require('./helpers/dotenv')

const express = require('express')
const next = require('next')
const path = require('path')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()
  server.use('/storybook', express.static(`${__dirname}/storybook-static`))
  server.use(express.static(`${__dirname}/`))
  server.get('/storybook', (req, res) => {
    res.sendFile(path.join(__dirname, '/storybook-static/index.html'))
  })

  server.get('/', (req, res) => {
    let lang = 'en'

    if (req.headers['accept-language']) {
      lang = req.headers['accept-language'].slice(0, 2)
    }

    if (lang !== 'cs' && 'lang' !== 'en') {
      lang = 'en'
    }
    return res.redirect(301, `/${lang}/`)
  })

  server.use(handler)

  server.get('*', (req, res) => handle(req, res))

  server.listen(process.env.PORT || 3000, err => {
    if (err) {
      throw err
    }
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`)
  })
})
