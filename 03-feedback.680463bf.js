function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var i,r,o,u,a,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,a=setTimeout(T,t),l?y(e):u}function O(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function T(){var e=p();if(O(e))return j(e);a=setTimeout(T,function(e){var n=t-(e-f);return s?m(n,o-(e-c)):n}(e))}function j(e){return a=void 0,v&&i?y(e):(i=r=void 0,u)}function x(){var e=p(),n=O(e);if(i=arguments,r=this,f=e,n){if(void 0===a)return S(f);if(s)return a=setTimeout(T,t),y(f)}return void 0===a&&(a=setTimeout(T,t)),u}return t=b(t)||0,g(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=r=a=void 0},x.flush=function(){return void 0===a?u:j(p())},x}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const y={emailInput:document.querySelector("[name=email]"),textareaInput:document.querySelector("[name=message]"),submitButton:document.querySelector("form")};y.emailInput.addEventListener("input",e(t)((function(e){const t=e.currentTarget.value;O.email=t,T()}),500)),y.textareaInput.addEventListener("input",e(t)((function(e){const t=e.currentTarget.value;O.message=t,T()}),500)),y.submitButton.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state")))}));let S=localStorage.getItem("feedback-form-state"),O={};function T(){localStorage.setItem("feedback-form-state",JSON.stringify(O))}S&&(y.emailInput.value=JSON.parse(S).email,y.textareaInput.value=JSON.parse(S).message);
//# sourceMappingURL=03-feedback.680463bf.js.map
