import { DESC_TIPO_ABRE_PARENTESES, DESC_TIPO_FECHA_PARENTESES, TIPO_NUMERO, TIPO_INCOGNITA } from "./constants";
import { InfoNode, Numero } from "./classes/infoNode";
import { Tree, Node } from "./classes/tree";
import { AbreParenteses, FechaParenteses, E, Incognita, Terminal } from "./classes/infoNode";


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
    else if(matchOperacao(entrada)){
        console.log("operacao");
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
function matchOperador(entrada: any[]){
    // Regra OPERADOR
    return false;
}
function matchParentes(entrada: any[]){
    // Regra '(' E ')'
    return entrada[0].identificador === DESC_TIPO_ABRE_PARENTESES && entrada[entrada.length - 1].identificador === DESC_TIPO_FECHA_PARENTESES;
}
function matchOperacao(entrada: any[]){
    // Regra  E OPERADOR E
    return false;
}
