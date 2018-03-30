import { DESC_TIPO_ABRE_PARENTESES, DESC_TIPO_FECHA_PARENTESES, TIPO_NUMERO, TIPO_INCOGNITA } from "./constants";
import index = require("./index")
import { InfoNode, Numero, Operador } from "./classes/infoNode";
import { Tree, Node } from "./classes/tree";
import { AbreParenteses, FechaParenteses, E, Incognita, Terminal } from "./classes/infoNode";
import { eh_operador } from "./lexico";


export function fillTree(entrada: any[]){
    var tree: Tree = new Tree();    
    
    tree.raiz = getNodes(entrada, tree.raiz);
    tree.raiz.visitInOrdem();
    
}

function getNodes(entrada: any[], node: Node){
    if(matchNumero(entrada)){
        let numero = entrada[0].token
        node.centro = new Node(new Numero())
        let infoNumero = new Terminal(numero)
        infoNumero = new InfoNode(infoNumero.valor, infoNumero.tipo);
        
        node.centro.centro = new Node(infoNumero)
        return node;
    }
    else if(matchIncognita(entrada)){
        let incognita = entrada[0].token
        node.centro = new Node(new Incognita())
        let infoIncognita = new Terminal(incognita)
        infoIncognita = new InfoNode(infoIncognita.valor, infoIncognita.tipo);
        
        node.centro.centro = new Node(infoIncognita)
        return node;
    }
    else if(matchParentes(entrada)){
        let nova_entrada = entrada.slice(1, entrada.length-1);
        
        node.esquerdo = new Node(new AbreParenteses());
        node.direito = new Node(new FechaParenteses());
        node.centro = getNodes(nova_entrada, new Node(new E()))
        return node
    }
    else if(matchOperacao(entrada) > 0){
        let index = matchOperacao(entrada)
                
        let esqOperador = entrada.slice(0, index)
        let dirOperador = entrada.slice(index+1, entrada.length)
        let nodeOperador = new Node(new Operador())
        nodeOperador.centro = new Node(new Terminal('+'))

        node.centro = nodeOperador
        node.esquerdo = getNodes(esqOperador, new Node(new E()))
        node.direito = getNodes(dirOperador, new Node(new E()))
        
        return node
    }
}

function matchNumero(entrada: any[]){
    // Regra NUMERO
    if (entrada.length === 1){
        if(entrada[0].identificador === TIPO_NUMERO){
            return true;
        }
    }

    return false;
}
function matchIncognita(entrada: any[]){
    // Regra INCOGNITA
    if (entrada.length === 1){
        if(entrada[0].identificador === TIPO_INCOGNITA){
            return true;
        }
    }
    return false;
}
function matchParentes(entrada: any[]){
    // Regra '(' E ')'
    return entrada[0].identificador === DESC_TIPO_ABRE_PARENTESES && entrada[entrada.length - 1].identificador === DESC_TIPO_FECHA_PARENTESES;
}
function getStrEntrada(entrada: any[], separator = ""){
    return entrada.map(token => token.token).join(separator)
}

function matchOperacao(entrada: any[]){
    // Regra  E OPERADOR E
    let entradaStr = getStrEntrada(entrada);
    let index = 0
    for(let char of entradaStr){
        if(eh_operador(char)){
            // console.log(`Operador= ${char}; pos=${index}`);
            return index;           
        }
        index++;
    }
    console.log(entradaStr);
    return 0;
}
