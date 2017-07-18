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
  server.use(express.static('storybook-static'))
  server.get('/storybook', (req, res) => {
    res.sendFile(path.join(__dirname, '.', '/storybook-static/index.html'))
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
