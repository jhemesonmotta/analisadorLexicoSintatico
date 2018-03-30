import { InfoNode, E } from "./infoNode";
import { POS_CENTRO, POS_DIREITA, POS_ESQUERDA, TIPO_E, TIPO_TERMINAL } from "../constants";

class Tree{
    raiz = new Node(new E());
}

class Node{
    esquerdo: Node = null;
    centro: Node = null;
    direito: Node = null;
    info: InfoNode = null;

    constructor(object){
        this.info = new InfoNode(object.valor, object.tipo)
    }

    visitInOrdem(){
        if(this.esquerdo !== null){
            this.esquerdo.visitInOrdem()
        }
        if(this.centro !== null){
            this.centro.visitInOrdem()
        }
        if(this.direito !== null){
            this.direito.visitInOrdem()
        }
        if(this.info.tipo === TIPO_TERMINAL)
            console.log(`${this.info.valor}`)
    }

}

export { Tree, Node}