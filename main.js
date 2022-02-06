(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,"* {\n  font-family: 'Comic Shanns';\n  box-sizing: border-box;\n  font-size: 100%;\n  padding: 0;\n  margin: 0 0;\n}\n\nsection {\n  padding: 25px;\n  min-height: auto;\n  background: whitesmoke;\n}\n\nheader,\nfooter {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  height: max-content;\n  width: 100%;\n  padding: 10px;\n  background-color: aquamarine;\n}\n\n.copyright-info {\n  margin-top: 2em;\n  font-size: 1rem;\n}\n\n.github-link {\n  margin-top: 0.5em;\n  margin-bottom: 2em;\n  font-size: 1em;\n  text-decoration: none;\n  color: black;\n}\n\n.github-link:hover {\n  text-decoration: wavy underline;\n  text-underline-offset: 0.25em;\n  text-decoration-color: magenta;\n}\n\nh1 {\n  font-size: 3rem;\n  margin-bottom: 0.5em;\n}\n\n.nav-list {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 10px;\n}\n\nnav a {\n  font-size: 1.5rem;\n  padding: 10px 10px;\n  margin: 0 1em;\n  text-align: center;\n  color: black;\n  text-decoration: none;\n}\n\nli a.active {\n  text-decoration: wavy underline;\n  text-decoration-color: magenta;\n  text-decoration-thickness: 4px;\n  text-underline-offset: 0.25em;\n}\n\nnav a:hover {\n  text-decoration: wavy underline;\n  text-decoration-color: magenta;\n  text-decoration-thickness: 4px;\n  text-underline-offset: 0.25em;\n}\n\n.content-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh2 {\n  align-self: center;\n  font-size: 2rem;\n  margin: 1em 0;\n}\n\np {\n  font-size: 1.25rem;\n  align-self: flex-start;\n}\n\n.content-box a {\n  font-size: 2rem;\n  text-decoration: none;\n  color: rgb(255, 0, 179);\n  animation: animate 1s ease infinite;\n  margin: 1.5em 0;\n  align-self: center;\n}\n\n@keyframes animate {\n  50% {\n    opacity: 0;\n  }\n}\n\n.content-box a:hover {\n  text-decoration: wavy underline;\n  text-decoration-thickness: 4px;\n  text-underline-offset: 0.25em;\n  color: magenta;\n  animation: none;\n}\n\nimg {\n  margin-top: 3em;\n  margin-bottom: 0.25em;\n  border: 4px solid aqua;\n}\n\n.content-box figcaption {\n  align-self: center;\n}\n\n#map {\n  margin: 2em 2em;\n  height: 400px;\n  width: 100%;\n}\n\n.contact-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menu-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menu-box > img {\n  margin-bottom: 3em;\n}\n\n@media (max-width: 767px) {\n  .nav-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .nav-list li {\n    margin: 10px 0;\n  }\n\n  img {\n    width: 100%;\n    max-width: 484px;\n    height: auto;\n  }\n\n  h1 {\n    text-align: center;\n  }\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=r[l]||0,u="".concat(l," ").concat(d);r[l]=d+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=a(p,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var s=o(e,a),l=0;l<r.length;l++){var d=t(r[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),i=t.n(r),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),m=t.n(u),p=t(426),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const h=function(){const e=document.querySelector(".main-content");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.setAttribute("class","content-box");const n=document.createElement("h2");n.textContent="Welcome 🙇🏻‍♂️";const t=document.createElement("p");t.textContent="This is a 'Project: Restaurant Page' from The Odin Project. The objective was to create a fake restaurant page. But that sounded a bit boring, so I decided to have some fun and mess around while incorporating all the lesson objectives. Thank you for visiting 🧃.";const o=document.createElement("a");o.textContent="Click here for 🍞 !!!",o.setAttribute("href","http://motherfuckingwebsite.com/");const a=document.createElement("img");a.setAttribute("src","/src/img/harambe.gif"),a.setAttribute("alt","Harambe the Gorilla");const r=document.createElement("figcaption");return r.textContent="Fig.1 - Harambe shakes shake weight 🏋🏻",e.appendChild(n),e.appendChild(t),e.appendChild(a),e.appendChild(r),e.appendChild(o),e}())};function g(e){const n=document.createElement("p");return n.setAttribute("class","content-p"),n.textContent=e,n}function x(){const e=document.querySelectorAll(".nav-item");function n(n){e.forEach((e=>{console.log(e),e.classList.remove("active")})),n.classList.add("active")}e.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.textContent,o=e.target;"Home"===t?(h(),n(o)):"Menu"===t?(function(){const e=document.querySelector(".main-content");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.setAttribute("class","menu-box");const n=document.createElement("h2");n.textContent="Menu 🧋";const t=document.createElement("p");t.textContent="Proteyyn Drink 🥤: Chai flavored protein drink with ice - $7.00";const o=document.createElement("p");o.textContent="Proteyyn Bar 🍫: Chocolate Mint flavored protein bar - $5.00";const a=document.createElement("img");return a.setAttribute("src","/src/img/protein.gif"),a.setAttribute("alt","picture of protein kangaroo from agretsuko"),e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(a),e}())}(),n(o)):(function(){const e=document.querySelector(".main-content");e.textContent="",e.appendChild(function(){const e=document.createElement("contact-container");e.setAttribute("class","contact-box");const n=document.createElement("h2");n.setAttribute("class","contact-heading"),n.textContent="Contact Info 🎤",e.appendChild(n),e.appendChild(g("Email 📮: feelfreeto@shitonme.com")),e.appendChild(g("Phone Number 📞: +01-123-2021-2022")),e.appendChild(g("Address 🧭: Virunga National Park, Bulambo, Congo-Kinshasa"));const t=document.createElement("iframe");return t.setAttribute("id","map"),t.setAttribute("src",'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.267150694186!2d29.5142852!3d-0.050221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8582444c8bdb383f!2sVirunga%20National%20Park!5e0!3m2!1sen!2ssg!4v1644033501202!5m2!1sen!2ssg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"'),e.appendChild(t),e}())}(),n(o))}))}))}!function(){const e=document.querySelector("#content");e.appendChild(function(){const e=document.createElement("header");return e.setAttribute("class","header-section"),e.appendChild(function(){const e=document.createElement("h1");return e.setAttribute("id","heading-title"),e.textContent="My Restaurant",e}()),e.appendChild(function(){const e=document.createElement("nav");return e.appendChild(function(){const e=document.createElement("ul");e.setAttribute("class","nav-list");for(let n=0;n<3;n++){const t=document.createElement("a"),o=document.createElement("li");o.setAttribute("data-id",n+1),t.setAttribute("class","nav-item"),e.appendChild(o),"1"===o.dataset.id?(t.textContent="Home",o.appendChild(t)):"2"===o.dataset.id?(t.textContent="Menu",o.appendChild(t)):(t.textContent="Contact Us",o.appendChild(t))}return e}()),e}()),e}()),e.appendChild(function(){const e=document.createElement("section");return e.setAttribute("class","main-content"),e}()),e.appendChild(function(){const e=document.createElement("footer");e.setAttribute("class","header-section");const n=document.createElement("span");n.setAttribute("class","copyright-info"),e.appendChild(n);const t=document.createElement("a");return t.setAttribute("href","https://github.com/ts-oh/restaurant_page"),t.setAttribute("class","github-link"),t.textContent="Back to my Github💦",e.appendChild(t),setInterval((function(){let e=(new Date).toLocaleString();n.textContent=`Copyright by Tim Oh - ${e}`}),1e3),e}()),x(),h()}()})()})();