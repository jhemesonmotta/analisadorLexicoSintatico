var analisadorLexico = require('./lexico.js')
var entrada = "x + ( y - x - y )"
console.log(analisadorLexico(entrada))