import { analisadorLexico } from "./lexico"
import { fillTree } from "./sintatico";

// var entrada = "x + ( y - x - y )"
// var entrada = "( x )" // ok
// var entrada = "( 1 )" // ok
// var entrada = "( x ) + 1" // ok

export default function analisador(entrada:string) {
    entrada = entrada.trim();

    var tabela_tokens: Array<any> = analisadorLexico(entrada)
    if(tabela_tokens){    
        try{
            var tree =  fillTree(tabela_tokens);
            var resultInOrdem = tree.raiz.visitInOrdem().trim();
            
            if (resultInOrdem === entrada){
                return result("Entrada sintaticamente correta!", 1);
            }else{
                return result("Entrada sintaticamente incorreta!");
            }
            
        }catch(erro){
            return result("Entrada sintaticamente incorreta!");
        }
    }
}

function result(mensagem: string, status: number = 0){
    if(status === 0){
        return {msg: mensagem, status:"erro"};
    }else{
        return {msg: mensagem, status:"ok"};
    }
}
