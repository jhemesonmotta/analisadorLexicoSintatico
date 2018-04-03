# Analisador Lexico e Sintatico

Implementação de um analisador léxico e sintático para a gramática de expressões aritméticas.
A lib realiza as análises léxica e sintática e provê uma indicação de que a sentença de entrada está correta ou incorreta (léxica ou sintaticamente).

## Suporte de Navegadores

Esta lib funciona nos seguintes navegadores:

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | 11.3+ ✔ |

## Dependências

Esta biblioteca não possui dependências.

## Instalação

```sh
$ npm install analisadorlexicosintatico --save
```

## Como Usar

### UMD no Navegador

```html
<!-- para importar a versão não-minificada -->
<script src="analisador-lex-sin.umd.js"></script>

<!-- para importar a versão minificada -->
<script src="analisador-lex-sin.umd.min.js"></script>
```

Depois disso, a lib estará disponível globalmente como `analisador`. Veja um exemplo:

```js
const sentenca = "( x )" //tokens separados por " "

console.log(analisador.verificaSentenca(sentenca))
```

## Métodos

> Métodos que a biblioteca provê:

### verificaSentenca(sentenca)

> Realiza as análises léxica e sintática e retorna um `JSON` contendo uma indicação de que a sentença de entrada está correta ou incorreta (léxica ou sintaticamente).

**Argumentos**

| Argumento    | Tipo    | Opções                                |
|--------------|---------|---------------------------------------|
|`sentenca`    |*string* | 'Entrada com tokens separados por " "'|


**Exemplo**

```js
const entrada = "( x + y )";

const result = analisador.verificaSentenca(entrada);
console.log(result)
```

## Autores

| ![Alexandre Kavalerski](https://avatars1.githubusercontent.com/u/25331207?s=150&v=3)|
|:---------------------:|
|  [Alexandre Kavalerski](https://github.com/alexandrekavalerski/)

| ![Jhemeson Mota](https://avatars3.githubusercontent.com/u/25598816?s=150&v=3)|
|:---------------------:|
|  [Jhemeson Mota](https://github.com/jhemesonmotta)

| ![Ian Maiwald]()|
|:---------------------:|
|  [Ian Maiwald](https://github.com/IanMaiwald)

Veja também a lista de [colaboradores](https://github.com/jhemesonmotta/analisadorLexicoSintatico/contributors) who participated in this project.


## Obs:

O analisador referente a este trabalho foi construído sobre uma gramática previamente definida. A mesma pode ser conferida a seguir:

```
E        ::= E OPERADOR E | E | '(' E ')' | INCOGNITA | NUMERO
OPERADOR ::= '+' | '-' | '*' | '/'
INCOGNITA ::= 'x' | 'y'
NUMERO   ::= [0-9]+
```

## Licença

Este projeto está licenciado sob a MIT License - Veja o arquivo [LICENSE.md](LICENSE.md) para detalhes