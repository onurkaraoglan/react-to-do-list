(this["webpackJsonpreact-to-do-list"]=this["webpackJsonpreact-to-do-list"]||[]).push([[0],{3:function(e,t,n){e.exports=n(9)},8:function(e,t,n){},9:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(2),c=n.n(l),r=function(){return o.a.createElement("form",{class:"",action:"index.html",method:"post",autocomplete:"off"},o.a.createElement("input",{type:"text",placeholder:"New task",name:"task",autocomplete:"off"}),o.a.createElement("button",{type:"submit"},o.a.createElement("strong",null,"+")))},s=function(){return o.a.createElement("div",{class:"tasksBoard"},o.a.createElement("ul",null),o.a.createElement("a",{href:" ",id:"clear"},"Clear"))},i=(n(8),function(){return Object(a.useEffect)((function(){document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector("input");""!==t.value&&function(e){var t=document.querySelector("ul"),n=document.createElement("li");n.innerHTML='<span class="delete">\xd7</span><input type="checkbox" class="cbox"><label>'.concat(e,"</label>"),t.appendChild(n),document.querySelector(".tasksBoard").style.display="block"}(t.value);t.value=""})),document.getElementById("clear").addEventListener("click",(function(e){document.querySelector(".tasksBoard").style.display="none"})),document.querySelector("ul").addEventListener("click",(function(e){"delete"===e.target.className?function(e){var t=e.target.parentNode;t.parentNode.removeChild(t),0===document.getElementsByTagName("li").length&&(document.querySelector(".tasksBoard").style.display="none")}(e):function(e){var t=e.target.nextSibling;e.target.checked?(t.style.textDecoration="line-through",t.style.color="#d3d3d3",t.style.transition="all .5s"):(t.style.textDecoration="none",t.style.color="#2f4f4f")}(e)}))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"main"},o.a.createElement("h1",null,"TO DO LIST"),o.a.createElement(r,null),o.a.createElement(s,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[3,1,2]]]);
//# sourceMappingURL=main.95af2713.chunk.js.map