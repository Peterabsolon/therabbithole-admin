const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const { ANALYZE } = process.env

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config

    // Important: return the modified config
    // config.resolve.modules = [path.resolve(__dirname, "components"), "node_modules"]
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        })
      )
    }

    if (dev) {
      return config
    }

    // config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')

    // config.plugins.push(
    //   new UglifyJsPlugin({
    //     compress: { warnings: false, drop_console: true, warnings: false },
    //     sourceMap: false,
    //     comments: false
    //   })
    // )

    config.resolve.alias = {
      react: 'preact-compat/dist/preact-compat',
      'react-dom': 'preact-compat/dist/preact-compat',
    }

    return config
  },
  webpackDevMiddleware: config =>
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    config,
}
