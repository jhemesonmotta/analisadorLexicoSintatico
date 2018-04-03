!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.analisador=e():n.analisador=e()}(window,function(){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e,t){"use strict";e.__esModule=!0;e.POS_ESQUERDA="Esquerda";e.POS_DIREITA="Direita";e.POS_CENTRO="Centro";e.TIPO_NAO_TERMINAL="NÃO TERMINAL";e.TIPO_TERMINAL="TERMINAL";e.TIPO_E="E";e.TIPO_NUMERO="NÚMERO";e.TIPO_INCOGNITA="INCÓGNITA";e.TIPO_OPERADOR="OPERADOR";e.TIPO_ABRE_PARENTESES="(";e.DESC_TIPO_ABRE_PARENTESES="ABRE PARÊNTESES";e.TIPO_FECHA_PARENTESES=")";e.DESC_TIPO_FECHA_PARENTESES="FECHA PARÊNTESES";e.ARR_OPERADORES=["+","-","/","*"];e.ARR_INCOGNITAS=["x","y"]},function(n,e,t){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])},function(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)});e.__esModule=!0;var i=t(0),u=function(){return function(n,e){this.valor=n,this.tipo=e}}();e.InfoNode=u;var c=function(n){function e(e){return n.call(this,e,i.TIPO_NAO_TERMINAL)||this}return o(e,n),e}(u);e.NaoTerminal=c;var a=function(n){function e(){return n.call(this,i.TIPO_E)||this}return o(e,n),e}(c);e.E=a;var s=function(n){function e(){return n.call(this,i.TIPO_NUMERO)||this}return o(e,n),e}(c);e.Numero=s;var f=function(n){function e(){return n.call(this,i.TIPO_INCOGNITA)||this}return o(e,n),e}(c);e.Incognita=f;var E=function(n){function e(){return n.call(this,i.TIPO_OPERADOR)||this}return o(e,n),e}(c);e.Operador=E;var l=function(n){function e(e){return n.call(this,e,i.TIPO_TERMINAL)||this}return o(e,n),e}(u);e.Terminal=l;var _=function(n){function e(){return n.call(this,i.TIPO_ABRE_PARENTESES)||this}return o(e,n),e}(l);e.AbreParenteses=_;var d=function(n){function e(){return n.call(this,i.TIPO_FECHA_PARENTESES)||this}return o(e,n),e}(l);e.FechaParenteses=d},function(n,e,t){"use strict";e.__esModule=!0;var r=t(0);function o(n){return r.ARR_OPERADORES.some(function(e){return e===n})}function i(n){return r.ARR_INCOGNITAS.some(function(e){return e===n})}function u(n){return n=Number(n)}e.analisadorLexico=function(n){for(var e="-",t=0,c=[],a=0,s=n.split(" ");a<s.length;a++){var f=s[a];e="-",i(f)?e=r.TIPO_INCOGNITA:o(f)?e=r.TIPO_OPERADOR:u(f)?e=r.TIPO_NUMERO:f===r.TIPO_ABRE_PARENTESES?e=r.DESC_TIPO_ABRE_PARENTESES:f===r.TIPO_FECHA_PARENTESES&&(e=r.DESC_TIPO_FECHA_PARENTESES),c.push({token:f,identificador:e,posicao:t}),t+=1}return c},e.eh_operador=o},function(n,e,t){"use strict";e.__esModule=!0;var r=t(1),o=t(0),i=function(){return function(){this.raiz=new u(new r.E)}}();e.Tree=i;var u=function(){function n(n){this.esquerdo=null,this.centro=null,this.direito=null,this.info=null,this.info=new r.InfoNode(n.valor,n.tipo)}return n.prototype.visitInOrdem=function(n){return void 0===n&&(n=""),null!==this.esquerdo&&(n=this.esquerdo.visitInOrdem(n)),null!==this.centro&&(n=this.centro.visitInOrdem(n)),null!==this.direito&&(n=this.direito.visitInOrdem(n)),this.info.tipo===o.TIPO_TERMINAL&&(n=n+this.info.valor+" "),n},n}();e.Node=u},function(n,e,t){"use strict";e.__esModule=!0;var r=t(0),o=t(1),i=t(3),u=t(1),c=t(2);function a(n){for(var e=function(n,e){return void 0===e&&(e=""),n.map(function(n){return n.token}).join(e)}(n),t=0,r=0,o=e;r<o.length;r++){var i=o[r];if(c.eh_operador(i))return t;t++}return console.log(e),0}e.fillTree=function(n){var e=new i.Tree;return e.raiz=function n(e,t){if(function(n){return 1===n.length&&n[0].identificador===r.TIPO_NUMERO}(e)){var c=e[0].token;t.centro=new i.Node(new o.Numero);var s=new u.Terminal(c);return s=new o.InfoNode(s.valor,s.tipo),t.centro.centro=new i.Node(s),t}if(function(n){return 1===n.length&&n[0].identificador===r.TIPO_INCOGNITA}(e)){var f=e[0].token;t.centro=new i.Node(new u.Incognita);var E=new u.Terminal(f);return E=new o.InfoNode(E.valor,E.tipo),t.centro.centro=new i.Node(E),t}if(function(n){return n[0].identificador===r.DESC_TIPO_ABRE_PARENTESES&&n[n.length-1].identificador===r.DESC_TIPO_FECHA_PARENTESES}(e)){var l=e.slice(1,e.length-1);return t.esquerdo=new i.Node(new u.AbreParenteses),t.direito=new i.Node(new u.FechaParenteses),t.centro=n(l,new i.Node(new u.E)),t}if(a(e)>0){var _=a(e),d=e.slice(0,_),O=e.slice(_+1,e.length),T=new i.Node(new o.Operador),I=e[_].token;return T.centro=new i.Node(new u.Terminal(I)),t.centro=T,t.esquerdo=n(d,new i.Node(new u.E)),t.direito=n(O,new i.Node(new u.E)),t}}(n,e.raiz),e}},function(n,e,t){"use strict";e.__esModule=!0;var r=t(2),o=t(4);function i(n,e){return void 0===e&&(e=0),0===e?{msg:n,status:"erro"}:{msg:n,status:"ok"}}e.verificaSentenca=function(n){n=n.trim();var e=r.analisadorLexico(n);if(e){var t=function(n){for(var e=0,t=n;e<t.length;e++){var r=t[e];if("-"===r.identificador)return console.log(r.identificador),{msg:"Token '"+r.token+"' não existe na gramática!",status:"erro"}}return{msg:"Sentença lexicamente correta!",status:"ok"}}(e);if("erro"===t.status)return i(t.msg);try{return o.fillTree(e).raiz.visitInOrdem().trim()===n?i("Sentença léxica e sintaticamente correta!",1):i("Sentença sintaticamente incorreta!")}catch(n){return i("Sentença sintaticamente incorreta!")}}}}])});