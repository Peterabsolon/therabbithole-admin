const nextRoutes = require('next-routes')

const routes = module.exports = nextRoutes()

routes.add('/:lang(en|cs)/', 'page-index')
routes.add({ pattern: '/:lang(en|cs)/about', page: 'page-about' })
routes.add({ pattern: '/:lang(en|cs)/auth', page: 'page-auth' })
routes.add({ pattern: '/:lang(en|cs)/playground', page: 'page-playground' })
