import { analisadorLexico } from "./lexico"
import { fillTree } from "./sintatico";

// var entrada = "x + ( y - x - y )"
// var entrada = "( x )" // ok
// var entrada = "( 1 )" // ok
// var entrada = "( x ) + 1" // ok

function analisador(entrada: string) {
  entrada = entrada.trim();

  var tabela_tokens: Array<any> = analisadorLexico(entrada)
  if (tabela_tokens) {
    let resultLexico = lexicamente(tabela_tokens)
    if (resultLexico.status === "erro") {
      return result(resultLexico.msg);
    }

    try {
      var tree = fillTree(tabela_tokens);
      var resultInOrdem = tree.raiz.visitInOrdem().trim();

      if (resultInOrdem === entrada) {
        return result("Sentença léxica e sintaticamente correta!", 1);
      } else {
        return result("Sentença sintaticamente incorreta!");
      }

    } catch (erro) {
      return result("Sentença sintaticamente incorreta!");
    }
  }
}


function lexicamente(tb_tokens: any[]) {
  for (const infoToken of tb_tokens) {
    if (infoToken.identificador === "-") {
      return { msg: `Erro léxico: Token '${infoToken.token}' não existe na gramática!`, status: 'erro' }
    }
  }
  return { msg: `Sentença lexicamente correta!`, status: 'ok' }
}

function result(mensagem: string, status: number = 0) {
  if (status === 0) {
    return { msg: mensagem, status: "erro" };
  } else {
    return { msg: mensagem, status: "ok" };
  }
}

function getChildrenAsJSON(entrada: string) {
  var tabela_tokens: Array<any> = analisadorLexico(entrada)
  if (tabela_tokens) {
    let resultLexico = lexicamente(tabela_tokens)
    if (resultLexico.status === "erro") {
      return result(resultLexico.msg);
    }

    try {
      var tree = fillTree(tabela_tokens);
      return tree.raiz.getJSON()
    } catch (err) {
      return { status: "erro" }
    }
  }
}

export { analisador as verificaSentenca, getChildrenAsJSON }