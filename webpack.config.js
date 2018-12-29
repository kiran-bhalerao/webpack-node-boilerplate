const NodemonPlugin = require('nodemon-webpack-plugin') // Ding
const nodeExternals = require('webpack-node-externals')

module.exports = {
  stats: 'errors-only',
  mode: 'development',
  entry: `./src/app.js`,
  target: 'node',
  plugins: [
    new NodemonPlugin({
      ext: 'js,handlebars'
    })
  ],
  externals: [nodeExternals()]
}
