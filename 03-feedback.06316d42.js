function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return s.Date.now()};function v(e,t,n){var i,o,r,a,u,f,l=0,s=!1,c=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,u=setTimeout(O,t),s?y(e):a}function I(e){var n=e-f;return void 0===f||n>=t||n<0||c&&e-l>=r}function O(){var e=p();if(I(e))return x(e);u=setTimeout(O,function(e){var n=t-(e-f);return c?d(n,r-(e-l)):n}(e))}function x(e){return u=void 0,v&&i?y(e):(i=o=void 0,a)}function N(){var e=p(),n=I(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(c)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=g(t)||0,b(n)&&(s=!!n.leading,r=(c="maxWait"in n)?m(g(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),N.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},N.flush=function(){return void 0===u?a:x(p())},N}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const y={emailInput:document.querySelector("[name=email]"),textareaInput:document.querySelector("[name=message]"),submitForm:document.querySelector("form"),submitButton:document.querySelector("[type=submit]")};function S(){0!==y.emailInput.value.length&&0!==y.textareaInput.value.length?y.submitButton.disabled=!1:y.submitButton.disabled=!0}y.emailInput.addEventListener("input",e(t)((function(e){const t=e.target.value;I.email=t,x()}),500)),y.textareaInput.addEventListener("input",e(t)((function(e){const t=e.target.value;I.message=t,x()}),500)),y.submitForm.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.target.reset(),localStorage.removeItem("feedback-form-state"),I={},y.submitButton.disabled=!0}));let I,O=localStorage.getItem("feedback-form-state");function x(){localStorage.setItem("feedback-form-state",JSON.stringify(I)),S()}I=null===JSON.parse(O)?{}:JSON.parse(O),function(){if(y.submitButton.disabled=!0,O){if(void 0===JSON.parse(O).email)y.emailInput.value="";else y.emailInput.value=JSON.parse(O).email,S();if(void 0===JSON.parse(O).message)y.textareaInput.value="";else y.textareaInput.value=JSON.parse(O).message,S()}}();
//# sourceMappingURL=03-feedback.06316d42.js.map
