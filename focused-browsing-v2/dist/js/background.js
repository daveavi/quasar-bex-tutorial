(()=>{var o,e={562:()=>{var o,e={twitter:{focus:!0},linkedin:{focus:!0}},t=[];function n(o){return"https://twitter.com/home"===o||"https://twitter.com/"===o}function i(o){e[o].focus?(console.log("unfocus mode on "+o),s(o,"unfocus","toggle")):(console.log("focus mode on "+o),s(o,"focus","toggle")),e[o].focus=!e[o].focus}function s(o,e,n){try{console.log("sending status "+e+" on "+o),chrome.tabs.query({active:!0,currentWindow:!0},(function(o){var i=o[0].url,s=o[0].id,r=t[s],c={url:i,status:e,method:n};r.postMessage(c)}))}catch(o){console.log("background script hasn't initialized port")}}function r(o){e[o].focus&&(console.log("initializing focus"),s(o,"focus","initial"),console.log(e))}chrome.runtime.onConnect.addListener((function(e){console.assert("Focused Browsing"==e.name),t[e.sender.tab.id]=e,port=e,console.log(e),port.onMessage.addListener((function(e){console.log("here"),console.log(e),n(o=e.url)?(console.log("here about to initalize twitter"),r("twitter")):"https://www.linkedin.com/feed/"===o&&(r("linkedin"),console.log("here about to initalize linkedIn"))}))})),chrome.tabs.onActivated.addListener((function(e,t){chrome.tabs.getSelected(null,(function(e){o=e.url,console.log("activeURL is: "+o)}))})),chrome.tabs.onUpdated.addListener((function(t,i,r){var c=r.url;console.log(c),console.log(o),i&&"complete"===i.status&&c!=o&&(c.includes("twitter.com")?e.twitter.focus&&(n(c)&!n(o)?(console.log(c),console.log(o),s("twitter","focus","initial")):s("twitter","focus","removeIframe"),o=c):c.includes("linkedin.com")&&e.linkedin.focus&&s("linkedin","focus","tab"))})),chrome.commands.onCommand.addListener((function(e,t){chrome.tabs.get(t.id,(function(t){o=t.url,console.log(e),n(o)?(console.log("sending message to twitter"),i("twitter")):"https://www.linkedin.com/feed/"===o&&(console.log("sending message to linkedin"),i("linkedin"))}))})),chrome.runtime.onMessage.addListener((function(e,t,n){console.log(t.tab?"from a content script:"+t.tab.url:"from the extension");var s=(o=t.tab.url).includes("twitter.com")?"twitter":"linkedin";return"focus"==e.status&&i(s),n({enabled:"focus"}),!0}))},121:()=>{}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,o=[],n.O=(e,t,i,s)=>{if(!t){var r=1/0;for(u=0;u<o.length;u++){for(var[t,i,s]=o[u],c=!0,l=0;l<t.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((o=>n.O[o](t[l])))?t.splice(l--,1):(c=!1,s<r&&(r=s));c&&(o.splice(u--,1),e=i())}return e}s=s||0;for(var u=o.length;u>0&&o[u-1][2]>s;u--)o[u]=o[u-1];o[u]=[t,i,s]},n.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),(()=>{var o={248:0,338:0};n.O.j=e=>0===o[e];var e=(e,t)=>{var i,s,[r,c,l]=t,u=0;for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(l)var a=l(n);for(e&&e(t);u<r.length;u++)s=r[u],n.o(o,s)&&o[s]&&o[s][0](),o[r[u]]=0;return n.O(a)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),n.O(void 0,[338],(()=>n(562)));var i=n.O(void 0,[338],(()=>n(121)));i=n.O(i)})();