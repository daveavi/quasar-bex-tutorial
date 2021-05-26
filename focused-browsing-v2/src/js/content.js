const HOME_PAGE_CLASS = "self-focused ember-view";

var appIframe;

const DEFAULT_FRAME_HEIGHT = "100px";
const DEFAULT_FRAME_WIDTH = "120px";
const IFRAME_ID = "focus-card"

var port; 
import TwitterStrategy from './siteStrategy/TwitterStrategy'
var twitterStrategy;




;(function () {
  port = chrome.runtime.connect({name: "Focused Browsing"});
  port.onMessage.addListener(focusListener)
  appIframe = initIframe()
  twitterStrategy = new TwitterStrategy(appIframe)
})()

function focusListener(msg) {
  console.log(msg)
  let status = msg.status
  let method = msg.method
  let url = msg.url
  if (status == "focus"){
     if (url.includes("twitter")) {
          if(method == "initial"){
             twitterStrategy.focusTwitter();
          }else if(method == "hidePanels"){
             twitterStrategy.focusTwitterPanel();
          }else{
             twitterStrategy.toggleTwitterHomeDistractions(true);
          }
          startIframe();
      } else if (url.includes("linkedin")){
          console.log("about to focus on linkedin");
          startIframe();
          hideLinkedIn(true);
      }
  }else if(msg.status == "unfocus"){
      if (url.includes("twitter")) {
          if(url.includes("/home")){
            console.log("about to un-focus on Twitter");
            twitterStrategy.toggleTwitterHomeDistractions(false)
            removeIframe()
          }else{
            twitterStrategy.hideTwitterPanel(false)
          }
      } else if (url.includes("linkedin")) {
          console.log("about to un-focus on linkedin");
          hideLinkedIn(false);
      }
  }
}



function initIframe() {
    appIframe = document.createElement("iframe");
    appIframe.width = DEFAULT_FRAME_WIDTH;
    appIframe.height = DEFAULT_FRAME_HEIGHT;
    appIframe.id = IFRAME_ID;

    Object.assign(appIframe.style, {
        position: "fixed",
        border: "none",
        zIndex: "10000",
    });
    return appIframe
}

function startIframe() {
    appIframe.src = chrome.runtime.getURL("www/card.html");
}

function removeIframe(){
  try{
    document.getElementById(IFRAME_ID).remove()
  }catch(err){
    console.log("the iframe is not on the screen")
  }
   
}


function hideLinkedIn(hide) {
    console.log("here in this linkedIn function")
    try {
      if (hide) {
        console.log("about to hide linkedIn feed")
        document.getElementsByClassName(
          HOME_PAGE_CLASS
        )[0].style.visibility = VISIBILITY_HIDDEN;
        injectIframe()
      } else {
        console.log("about to make linkedIn feed visible")
        document.getElementsByClassName(
          HOME_PAGE_CLASS
        )[0].style.visibility = VISIBILITY_VISIBLE;
        removeIframe()
      }
    } catch (err) {
      console.log(err);
    }
}
  
