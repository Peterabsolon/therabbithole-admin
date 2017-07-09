/* eslint-disable no-process-env */

const environment = {
  development: {
    isProduction: false,
    localStorage: true,
  },
  test: {
    isProduction: false,
    localStorage: false,
  },
  production: {
    isProduction: true,
    localStorage: true,
  },
}[process.env.NODE_ENV || 'development']

module.exports = Object.assign(
  {
    port: process.env.PORT || 3000,
    app: {
      title: 'Mobx state tree',
      description: 'App description',
      head: {
        titleTemplate: '%s Starter kit',
        title: ' ',
        meta: [
          { name: 'description', content: 'Reinventing your IT job search.' },
          { charset: 'utf-8' },
          { property: 'og:site_name', content: 'Techloop.io' },
          { property: 'og:image', content: 'https://---' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:title', content: 'Techloop.io' },
          { property: 'og:description', content: 'Reinventing your IT job search.' },
          { property: 'og:card', content: '---' },
          { property: 'og:site', content: '---' },
          { property: 'og:creator', content: 'Techloop.io' },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' },
        ],
      },
    },
  },
  environment
)
