const path = require('path')

module.exports = {
  mode: 'production',
  entry: `./src/index.js`,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
}
