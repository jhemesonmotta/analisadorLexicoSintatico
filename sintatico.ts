import { analisadorLexico } from "./lexico"

var entrada = "x + ( y - x - y )"

console.log(analisadorLexico(entrada))