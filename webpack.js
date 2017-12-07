const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'notify',
        libraryTarget: 'umd'
    }
}