const path = require('path')

module.exports = {
  sassOptions: { includePaths: [path.resolve(__dirname, 'node_modules')] },
}
