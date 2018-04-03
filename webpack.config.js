var join = require('path').join;

module.exports = {
    entry: "./dist/index.js",
    output: {
        path: join(__dirname, 'lib'),
        filename: 'analisador-lex-sin.js',
        libraryTarget: "umd",
        library: "analisador"
    }
}