const OPERADOR = ['+', '-', '/', '*']
const INCOGNITA = ["x", "y"]
const TIPO_OPERADOR = 'OPERADOR'
const TIPO_INCOGNITA = 'INCOGNITA'

function analisadorLexico(txt_entrada){
    var array_tokens = txt_entrada.split(" ")
    var tipo_token = '-';
    var posicao_token = 0;
    var lista_tokens = [];
    for(token of array_tokens){
        if(eh_incognita(token)){
            tipo_token = TIPO_INCOGNITA
        }
        else if(eh_operador(token)){
            tipo_token = TIPO_OPERADOR
        }
        
        lista_tokens.push({token: token, identificador: tipo_token, posicao: posicao_token})
        posicao_token +=1
    }
    return lista_tokens
}

function eh_operador(token) {
    return OPERADOR.includes(token);
}

function eh_incognita(token){
    return INCOGNITA.includes(token);
}
  
function eh_numero(token) {
    var n = parseInt(token);
    return Number.isInteger(n);
}

module.exports = analisadorLexico