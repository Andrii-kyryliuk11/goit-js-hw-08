function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return c.Date.now()};function g(e,t,n){var o,i,r,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,u=setTimeout(O,t),c?y(e):a}function I(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function O(){var e=p();if(I(e))return x(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?d(n,r-(e-l)):n}(e))}function x(e){return u=void 0,g&&o?y(e):(o=i=void 0,a)}function T(){var e=p(),n=I(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=b(t)||0,v(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},T.flush=function(){return void 0===u?a:x(p())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const y={emailInput:document.querySelector("[name=email]"),textareaInput:document.querySelector("[name=message]"),submitButton:document.querySelector("form")};y.emailInput.addEventListener("input",e(t)((function(e){const t=e.currentTarget.value;I.email=t,localStorage.setItem("feedback-form-state",JSON.stringify(I))}))),y.textareaInput.addEventListener("input",e(t)((function(e){const t=e.currentTarget.value;I.message=t,localStorage.setItem("feedback-form-state",JSON.stringify(I))}))),y.submitButton.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state")))}));let S=localStorage.getItem("feedback-form-state"),I={};S&&(y.emailInput.value=JSON.parse(S).email,y.textareaInput.value=JSON.parse(S).message),console.log(y.emailInput),console.log(y.textareaInput),console.log(y.submitButton);
//# sourceMappingURL=03-feedback.3b917c29.js.map