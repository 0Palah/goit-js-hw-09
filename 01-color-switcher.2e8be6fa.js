const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]");let o=document.querySelector("body"),d=null;function l(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.disabled=!0,e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,o.style.backgroundColor=l(),d=setInterval((()=>{o.style.backgroundColor=l()}),1e3)})),t.addEventListener("click",(()=>{e.disabled=!1,t.disabled=!0,clearInterval(d)})),console.log(o);
//# sourceMappingURL=01-color-switcher.2e8be6fa.js.map
