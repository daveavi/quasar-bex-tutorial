(()=>{var e,o="100px",n="120px";chrome.runtime.connect({name:"Focused Browsing"}).postMessage({url:window.location.toString()}),console.log("welcome to the content script"),e=document.createElement("iframe"),console.log(e),e.src=chrome.runtime.getURL("www/card.html"),console.log(e),e.width=n,e.height=o,Object.assign(e.style,{position:"fixed",border:"none",zIndex:"10000"}),document.body.prepend(e),console.log(e)})();