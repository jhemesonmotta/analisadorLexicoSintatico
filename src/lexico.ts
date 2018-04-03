import {
  TIPO_OPERADOR, TIPO_INCOGNITA, TIPO_ABRE_PARENTESES,
  TIPO_FECHA_PARENTESES, ARR_INCOGNITAS, ARR_OPERADORES
  , DESC_TIPO_ABRE_PARENTESES, DESC_TIPO_FECHA_PARENTESES, TIPO_NUMERO
} from "./constants";



function analisadorLexico(txt_entrada) {
  var array_tokens = txt_entrada.split(" ")
  var tipo_token = '-';
  var posicao_token = 0;
  var lista_tokens = [];
  for (let token of array_tokens) {
    tipo_token = '-';
    if (eh_incognita(token)) {
      tipo_token = TIPO_INCOGNITA
    }
    else if (eh_operador(token)) {
      tipo_token = TIPO_OPERADOR
    }
    else if (eh_numero(token)) {
      tipo_token = TIPO_NUMERO
    }
    else if (eh_abre_parentese(token)) {
      tipo_token = DESC_TIPO_ABRE_PARENTESES
    }
    else if (eh_fecha_parentese(token)) {
      tipo_token = DESC_TIPO_FECHA_PARENTESES
    }

    lista_tokens.push({ token: token, identificador: tipo_token, posicao: posicao_token })
    posicao_token += 1
  }
  return lista_tokens
}

function eh_operador(token: String) {
  // return ARR_OPERADORES.includes(token);
  return ARR_OPERADORES.some(operador => operador === token);
}

function eh_incognita(token) {
  // return ARR_INCOGNITAS.includes(token);
  return ARR_INCOGNITAS.some(incognita => incognita === token);
}

function eh_numero(token) {
  token = Number(token)
  return token;
}

function eh_abre_parentese(token) {
  return token === TIPO_ABRE_PARENTESES
}

function eh_fecha_parentese(token) {
  return token === TIPO_FECHA_PARENTESES
}

export { analisadorLexico, eh_operador, eh_abre_parentese, eh_fecha_parentese }