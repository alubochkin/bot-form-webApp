(()=>{"use strict";var e={545:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,'*{box-sizing:border-box;padding:0;margin:0;outline:none;border:none;background:none}body{overflow:hidden;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;height:100vh;width:100%;background-color:var(--tg-theme-bg-color, rgb(36, 34, 49));color:var(--tg-theme-text-color, rgb(219, 214, 251));font-size:16px}html,body{-webkit-user-select:none;-webkit-touch-callout:none}*[contenteditable]{-webkit-user-select:auto !important}#root{padding:15px;overflow-y:auto;height:100%;padding:20px 20px 30px 20px;max-width:560px;margin:0 auto}.form-wrapper{margin-top:20px}#form{gap:15px}#form,#form>label{display:flex;flex-direction:column;pointer-events:none}#form>div,#form>label>div{display:flex;gap:10px;align-items:center}#form label{gap:10px}#form .field{color:color-mix(in srgb, var(--tg-theme-button-color, darkslateblue) 70%, #fff 40%);border-radius:4px;padding:12px 8px;pointer-events:all;flex:1;background:var(--tg-theme-bg-color, rgb(36, 34, 49));filter:brightness(85%)}#form .field.description{min-height:180px;pointer-events:all;display:flex;cursor:text;text-align:left;align-items:flex-start;justify-content:flex-start;flex-direction:column;position:relative}.btn{cursor:pointer;padding:12px;border-radius:4px;transition:.2s;border:1px solid var(--tg-theme-button-color, darkslateblue);color:var(--tg-theme-button-color, darkslateblue);pointer-events:all}.btn:disabled{cursor:not-allowed;color:#d3d3d3;border-color:#d3d3d3}.btn.select{background-color:var(--tg-theme-button-color, darkslateblue);color:var(--tg-theme-button-text-color, #fff);border-color:var(--tg-theme-button-color, darkslateblue)}.btn-submit{background-color:var(--tg-theme-button-color, darkslateblue);margin-top:20px;color:var(--tg-theme-button-text-color, #fff)}.hide{opacity:0;visibility:hidden}.people-tag{display:flex;gap:3px;font-size:13px}button.add-input{width:30px;margin-left:auto;height:30px;display:flex;padding:0;align-items:center;justify-content:center;font-size:20px}',""]);const l=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],l=0;l<e.length;l++){var s=e[l],d=o.base?s[0]+o.base:s[0],c=i[d]||0,u="".concat(d," ").concat(c);i[d]=c+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=l,t.splice(l,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var l=n(i[a]);t[l].references--}for(var s=o(e,r),d=0;d<i.length;d++){var c=n(i[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=function(){function e(){}return e.prototype.create=function(e,t,n,o){var r=document.createElement(e);return t.split(" ").forEach((function(e){return r.classList.add(e)})),(null==n?void 0:n.length)&&n.forEach((function(e){return r.setAttribute(e.key,e.value)})),o&&(r.textContent=o),r},e.prototype.addListener=function(e,t,n,o){var r="object"==typeof e?e:document.querySelector(e);null==r||r.addEventListener(t,n)},e.prototype.removeListener=function(e,t,n){var o="object"==typeof e?e:document.querySelector(e);null==o||o.removeEventListener(t,n)},e}(),t={psychology:'\n      <form id="form">\n        <h3>Форма для Психологии</h3>\n        <label>\n          Название:\n          <input class="field" required name="title" type="text" autocomplete="off" />\n        </label>\n\n        <label>\n          Ссылка на ГК:\n          <input class="field" required name="getCourse" type="text" autocomplete="off" />\n        </label>\n\n        <label>\n          Ссылка на Видео:\n          <div>\n            <input class="field first-field" required name="video" type="text" autocomplete="off" />\n            <button data-add-field="video" label="Добавить поле" type="button" class="add-input btn">+</button>\n          </div>\n        </label>\n\n        <label>\n          Ссылка на Презентацию:\n          <div>\n            <input class="field" required name="presentation" type="text" autocomplete="off" />\n            <button data-add-field="presentation" label="Добавить поле" type="button" class="add-input btn">+</button>\n          </div>\n\n        </label>\n\n        <label>\n          ТЗ, вырезки, комментарии:\n          <div contenteditable="plaintext-only" data-field="description" class="field description">\n  \n          </div>\n        </label>\n\n        <label>\n          Теги через пробел:\n          <input class="field" name="tags" type="text" />\n        </label>\n\n\n        <p class="errors"></p>\n\n      </div>\n',design:'\n      <form id="form">\n        <h3>Форма для Vill</h3>\n        <label>\n          Название:\n          <input class="field" required name="title" type="text" autocomplete="off" />\n        </label>\n\n        <label>\n          Ссылка на ГК:\n          <input class="field" required name="getCourse" type="text" autocomplete="off" />\n        </label>\n\n        <label>\n          Ссылка на Видео:\n          <div>\n            <input class="field first-field" required name="video" type="text" autocomplete="off" />\n            <button data-add-field="video" label="Добавить поле" type="button" class="add-input btn">+</button>\n          </div>\n        </label>\n\n        <label>\n          Ссылка на Презентацию(и):\n          <div>\n            <input class="field" required name="presentation" type="text" autocomplete="off" />\n            <button data-add-field="presentation" label="Добавить поле" type="button" class="add-input btn">+</button>\n          </div>\n\n        </label>\n\n        <label>\n          ТЗ, вырезки, комментарии:\n          <div contenteditable="plaintext-only" class="field description">\n          <span></span>\n          </div>\n        </label>\n\n        <label>\n          Теги через пробел:\n          <input class="field" name="tags" type="text" />\n        </label>\n\n        <p class="errors"></p>\n\n      </div>\n'};const o=["Мария","Ирина","Алексей","Виктория","Алиса"];var r,i=new e,a=function(){function e(e,t){this.root=document.getElementById(e),this.peopleTag=o,this.sendDataInbot=t,this.videoFieldCount=1,this.presFieldCount=1}return e.prototype.init=function(){var e=this;this.selectDepartmentCreate(),this.formRootElement=i.create("div","form-wrapper"),this.root.insertAdjacentElement("beforeend",this.formRootElement),this.selectRoot=i.create("div","select-wrapper"),this.root.insertAdjacentElement("beforeend",this.selectRoot),this.buttonSendCreate(),window.__form=this,this.root.addEventListener("click",(function(t){return t.stopPropagation(),e.eventListenersManager(t.target)}),!0)},e.prototype.eventListenersManager=function(e){var t=e.dataset;if(this.description&&this.cursorImit&&console.log(e),Object.values(t).length){if(t.addField){if("video"===t.addField){if(this.videoFieldCount>=6)return void e.setAttribute("disabled","true");this.videoFieldCount++}if("presentation"===t.addField){if(this.presFieldCount>=6)return void e.setAttribute("disabled","true");this.presFieldCount++}var n=i.create("input","field",[{key:"name",value:t.addField},{key:"autocomplete",value:"off"}]);e.parentElement.parentElement.appendChild(n)}if(t.form&&(this.buttonChangeFormHandler(e,t.form),this.description=this.formRootElement.querySelector(".description"),this.cursorImit=this.description.querySelector(".imitation-cursor")),t.send&&this.sendDataForm(),"description"===t.field){var o=document.createRange(),r=window.getSelection();o.setStart(this.description,0),console.log(o),o.collapse(!0),r.addRange(o),this.description.focus()}}},e.prototype.generateForm=function(e){this.formRootElement&&(this.formRootElement.innerHTML="");var n=t[e];n&&this.formRootElement.insertAdjacentHTML("beforeend",n)},e.prototype.createSelect=function(){var e=this,t='\n      <div class="people-tag">\n        '.concat(this.peopleTag.map((function(e){return"<div>"+e+"</div>"})).join(" "),"\n      </div>\n    ");this.selectRoot.insertAdjacentHTML("beforeend",t),i.addListener(".people-tag","click",(function(t){var n,o=t.target;console.log(o.textContent),o.classList.toggle("select");var r=null===(n=e.peopleTag)||void 0===n?void 0:n.indexOf(o.textContent);-1===r?e.peopleTag.push(o.textContent):e.peopleTag.splice(r,1)}))},e.prototype.selectDepartmentCreate=function(){this.topBlockBtnRoot=i.create("div","top-buttons"),this.topBlockBtnRoot.insertAdjacentHTML("afterbegin","\n      <button data-form='psychology' class='btn'>Психология</button>\n      <button data-form='design' class='btn'>Vill</button>\n    "),this.root.insertAdjacentElement("afterbegin",this.topBlockBtnRoot)},e.prototype.buttonSendCreate=function(){var e=this;this.buttonSubmit=i.create("button","btn btn-submit hide",[{key:"data-send",value:"send-form"}],"Отправить данные"),this.root.insertAdjacentElement("beforeend",this.buttonSubmit),i.addListener(this.buttonSubmit,"click",(function(){return e.sendDataForm()}))},e.prototype.sendDataForm=function(){this.formRootElement.querySelector("form");var e,t,n=this.formRootElement.querySelector(".description"),o={video:"",presentation:"",title:"",module:this.typeForm,getCourse:"",description:null!==(t=null===(e=n.textContent)||void 0===e?void 0:e.trim())&&void 0!==t?t:"",tags:""};this.formRootElement.querySelectorAll("input").forEach((function(e){var t=e.name;o[t]+=o[t]?"\n"+e.value:e.value})),this.sendDataInbot(o)},e.prototype.buttonChangeFormHandler=function(e,t){var n;this.topBlockBtnRoot.querySelectorAll("button").forEach((function(e){e.classList.remove("select")})),e.classList.add("select"),this.typeForm=t,this.generateForm(t),null===(n=this.buttonSubmit)||void 0===n||n.classList.remove("hide")},e.prototype.errorHandlerForm=function(e){},e}(),l=null===(r=window.Telegram)||void 0===r?void 0:r.WebApp,s=n(379),d=n.n(s),c=n(795),u=n.n(c),p=n(569),f=n.n(p),m=n(565),b=n.n(m),v=n(216),h=n.n(v),g=n(589),y=n.n(g),x=n(545),E={};E.styleTagTransform=y(),E.setAttributes=b(),E.insert=f().bind(null,"head"),E.domAPI=u(),E.insertStyleElement=h(),d()(x.Z,E),x.Z&&x.Z.locals&&x.Z.locals,new a("root",(function(e){try{console.log(e);var t=JSON.stringify(e);if(!l)throw new Error("Have not method sendData");l.sendData(t)}catch(e){console.log("Is error >>>",e)}})).init()})()})();