!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var i,o,a,u,l,f,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,s=t,u=e.apply(r,n)}function O(e){return s=e,l=setTimeout(w,t),c?y(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-s>=a}function w(){var e=p();if(h(e))return S(e);l=setTimeout(w,function(e){var n=t-(e-f);return m?g(n,a-(e-s)):n}(e))}function S(e){return l=void 0,d&&i?y(e):(i=o=void 0,u)}function T(){var e=p(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===l)return O(f);if(m)return l=setTimeout(w,t),y(f)}return void 0===l&&(l=setTimeout(w,t)),u}return t=j(t)||0,b(n)&&(c=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=f=o=l=void 0},T.flush=function(){return void 0===l?u:S(p())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var O="feedback-form-state",h=document.querySelector("form");function w(){var e={email:h.elements.email.value,message:h.elements.message.value};localStorage.setItem(O,JSON.stringify(e))}h.elements.email.addEventListener("input",e(t)(w,500)),h.elements.message.addEventListener("input",e(t)(w,500));var S=JSON.parse(localStorage.getItem(O));S&&S.email&&S.message&&(h.elements.email.value=S.email,h.elements.message.value=S.message),h.addEventListener("submit",(function(e){if(e.preventDefault(),""===h.elements.email.value||""===h.elements.message.value)return alert("Заполните все поля!");var t={email:h.elements.email.value,message:h.elements.message.value};console.log(t),h.reset(),localStorage.removeItem(O)}))}();
//# sourceMappingURL=03-feedback.227cd343.js.map