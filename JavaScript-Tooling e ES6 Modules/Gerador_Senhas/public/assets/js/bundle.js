(()=>{var n={958:(n,e,r)=>{(e=r(314)(!1)).push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),e.push([n.id,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.senha-gerada {\n  font-size: 2em;\n  color: var(--primary-color);\n  margin: 40px 0;\n}\n\ninput[type=number]::-webkit-inner-spin-button { \n  appearance: none;\n  \n}\n\ninput[type=\"checkbox\"] {\n  width: 15px;\n  height: 15px;\n  cursor: pointer;\n}\n\nbutton {\n  display: block;\n  margin: 40px 0;\n  font-size: 1em;\n}\n",""]),n.exports=e},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r,t,o,i=n[1]||"",a=n[3];if(!a)return i;if(e&&"function"==typeof btoa){var c=(r=a,t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(o," */")),u=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[i].concat(u).concat([c]).join("\n")}return[i].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);t&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),e.push(u))}},e}},779:(n,e,r)=>{var t=r(72),o=r(958);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.id,o,""]]);t(o,{insert:"head",singleton:!1}),n.exports=o.locals||{}},72:(n,e,r)=>{"use strict";var t,o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function a(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},t=[],o=0;o<n.length;o++){var c=n[o],u=e.base?c[0]+e.base:c[0],s=r[u]||0,d="".concat(u," ").concat(s);r[u]=s+1;var l=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:d,updater:h(f,e),references:1}),t.push(d)}return t}function u(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=r.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,d=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function l(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,m=0;function h(n,e){var r,t,o;if(e.singleton){var i=m++;r=p||(p=u(e)),t=l.bind(null,r,i,!1),o=l.bind(null,r,i,!0)}else r=u(e),t=f.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=a(r[t]);i[o].references--}for(var u=c(n,e),s=0;s<r.length;s++){var d=a(r[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}r=u}}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.nc=void 0,(()=>{"use strict";var n=function(n,e){return Math.floor(Math.random()*(e-n)+n)},e=function(){return"!#$%&()*+,-./:;<=>?@[]^_`{|}~"[n(0,29)]},t=document.querySelector(".senha-gerada"),o=document.querySelector(".qtd-caracteres"),i=document.querySelector(".chk-maiusculas"),a=document.querySelector(".chk-minusculas"),c=document.querySelector(".chk-numeros"),u=document.querySelector(".chk-simbolos"),s=document.querySelector(".gerar-senha");r(779),s.addEventListener("click",(function(){t.innerHTML=function(r,t,o,i,a){var c=[];r=Number(r);for(var u=0;u<r;u++)t&&c.push(String.fromCharCode(n(65,91))),o&&c.push(String.fromCharCode(n(97,123))),i&&c.push(String.fromCharCode(n(48,58))),a&&c.push(e());return c.sort((function(){return.5-Math.random()})),c.join("").slice(0,r)}(o.value,i.checked,a.checked,c.checked,u.checked)||"Nada selecionado."}))})()})();
//# sourceMappingURL=bundle.js.map