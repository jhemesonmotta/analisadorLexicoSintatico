import { InfoNode, E } from "./infoNode";
import { POS_CENTRO, POS_DIREITA, POS_ESQUERDA, TIPO_E, TIPO_TERMINAL } from "../constants";

class Tree {
  raiz = new Node(new E());
}

class Node {
  esquerdo: Node = null;
  centro: Node = null;
  direito: Node = null;
  info: InfoNode = null;

  constructor(object) {
    this.info = new InfoNode(object.valor, object.tipo)
  }

  visitInOrdem(result = '') {
    if (this.esquerdo !== null) {
      result = this.esquerdo.visitInOrdem(result)
    }
    if (this.centro !== null) {
      result = this.centro.visitInOrdem(result)
    }
    if (this.direito !== null) {
      result = this.direito.visitInOrdem(result)
    }
    if (this.info.tipo === TIPO_TERMINAL) {
      result = result + this.info.valor + " ";
    }
    return result

  }

  getJSON() {
    let filhoAtual = { text: { name: this.info.valor }, children: [] }
    console.log(this.info.valor);

    if (this.esquerdo !== null) {
      filhoAtual.children.unshift(this.centro.getJSON())
    }
    if (this.centro !== null) {
      filhoAtual.children.unshift(this.centro.getJSON())
    }
    if (this.direito !== null) {
      filhoAtual.children.unshift(this.centro.getJSON())
    }

    return filhoAtual
  }

}

export { Tree, Node }