const expect = require('chai').expect
const analisador = require('../dist/index')


describe('Analisador Léxico e Sintático', () => {
  describe('Smoke Testes', () => {
    it('Retorno deve possuir propriedade "msg"'), () => {
      const sentenca = "x"
      const result = analisador.verificaSentenca(sentenca)
      expect(result.msg).to.be.not(undefined);
    }
    it('Retorno deve possuir propriedade "status"'), () => {
      const sentenca = "x"
      const result = analisador.verificaSentenca(sentenca)
      expect(result.status).to.be.not(undefined);
    }
  });

  it('Deve retornar sucesso quando sentença = "( x )"', () => {
    const sentenca = "( x )"
    const result = analisador.verificaSentenca(sentenca)
    expect(result.status).to.equal("ok");
  });

  it('Deve retornar erro quando sentença = "( x "', () => {
    const sentenca = "( x "
    const result = analisador.verificaSentenca(sentenca)
    expect(result.status).to.equal("erro");
  });

  it('Deve retornar erro quando sentença = "x1 "', () => {
    const sentenca = "x1 "
    const result = analisador.verificaSentenca(sentenca)
    expect(result.status).to.equal("erro");
  });

  it('Deve retornar erro quando sentença = ""', () => {
    const sentenca = ""
    const result = analisador.verificaSentenca(sentenca)
    expect(result.status).to.equal("erro");
  });

  it('Deve retornar erro quando sentença = "(x)"', () => {
    const sentenca = "(x)"
    const result = analisador.verificaSentenca(sentenca)
    expect(result.status).to.equal("erro");
  });

  it('Deve retornar sucesso quando sentença = "x + ( y - x - y )"', () => {
    const sentenca = "x + ( y - x - y )"
    const result = analisador.verificaSentenca(sentenca)
    expect(result.status).to.equal("ok");
  });

  it('Deve retornar sucesso quando sentença = " ( y - x - y ) + ( 2 - y ) "', () => {
    const sentenca = " ( y - x - y ) + ( 2 - y ) "
    const result = analisador.verificaSentenca(sentenca)
    expect(result.status).to.equal("ok");
  });

  it('Deve retornar sucesso quando sentença = "( y - x - y ) + x"', () => {
    const sentenca = "( y - x - y ) + x"
    const result = analisador.verificaSentenca(sentenca)
    expect(result.status).to.equal("ok");
  });

  it('Deve retornar sucesso quando sentença = "( y + ( 2 ) ) - ( 2 - 1 )"', () => {
    const sentenca = "( y + ( 2 ) ) - ( 2 - 1 )"
    const result = analisador.verificaSentenca(sentenca)
    expect(result.status).to.equal("ok");
  });
});