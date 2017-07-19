const nextRoutes = require('next-routes')

const routes = module.exports = nextRoutes()

routes.add('/:lang(en|cs)/', 'index')
routes.add('/:lang(en|cs)/about', 'about')
routes.add('/:lang(en|cs)/playground', 'playground')
