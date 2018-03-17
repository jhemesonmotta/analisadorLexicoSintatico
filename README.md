# analisadorLexicoSintatico
Implementação de um analisador léxico e sintático para a gramática de expressões aritméticas.
As regras da gramática devem ser definidas diretamente no código-fonte do programa.
O programa deve realizar as análises léxica e sintática.
A saída do programa deve ser uma indicação de que a sentença de entrada está correta ou incorreta (léxica ou sintaticamente).

Instruções para Utilização
1. Baixe os arquivos;
2. Abra o terminal / cmd na pasta que contém os dois arquivos; e
3. Execute o comando "node sintatico.js".

O analisador referente a este trabalho foi construído sobre uma gramática previamente definida. A mesma pode ser conferida a seguir:

```E        ::= E OPERADOR E | E | '(' E ')' | INCOGNITA | NUMERO
OPERADOR ::= '+' | '-' | '*' | '/'
INCOGNITA ::= 'x' | 'y'
NUMERO   ::= [0-9]+
```
