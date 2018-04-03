import { TIPO_ABRE_PARENTESES, TIPO_E, TIPO_FECHA_PARENTESES, TIPO_INCOGNITA, TIPO_NAO_TERMINAL, TIPO_NUMERO, TIPO_OPERADOR, TIPO_TERMINAL } from "../constants";

class InfoNode{
    valor: string
    tipo: string

    constructor(valor, tipo){
        this.valor = valor
        this.tipo = tipo
    }
}
class NaoTerminal extends InfoNode{
    constructor(valor){
        super(valor, TIPO_NAO_TERMINAL)
    }
}

class E extends NaoTerminal{
    constructor(){
        super(TIPO_E)
    }
}

class Numero extends NaoTerminal{
    constructor(){
        super(TIPO_NUMERO)
    }
}

class Incognita extends NaoTerminal{
    constructor(){
        super(TIPO_INCOGNITA)
    }
}

class Operador extends NaoTerminal{
    constructor(){
        super(TIPO_OPERADOR)
    }
}

class Terminal extends InfoNode{
    constructor(valor){
        super(valor, TIPO_TERMINAL)
    }
}

class AbreParenteses extends Terminal{
    constructor(){
        super(TIPO_ABRE_PARENTESES)
    }
}
class FechaParenteses extends Terminal{
    constructor(){
        super(TIPO_FECHA_PARENTESES)
    }
}

export {InfoNode, NaoTerminal, E, Operador, Incognita, Numero, AbreParenteses, FechaParenteses, Terminal}