import { analisadorLexico } from "./lexico"
import { fillTree } from "./sintatico";

var entrada = "x + ( y - x - y )"
// var entrada = "( x )" // ok
// var entrada = "( 1 )" // ok
// var entrada = "( x ) + 1" // ok

var tabela_tokens: Array<any> = analisadorLexico(entrada)
if(tabela_tokens){    
    console.log(tabela_tokens);
    
    fillTree(tabela_tokens)
}
