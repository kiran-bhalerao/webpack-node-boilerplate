const NodemonPlugin = require( 'nodemon-webpack-plugin' ) // Ding
module.exports = {
  stats: 'errors-only',
  mode: 'development',
  entry : `./src/app.js`,
  target: "node",
  plugins: [
    new NodemonPlugin(), // Dong
],
};