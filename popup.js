
// http://stackoverflow.com/questions/7838384/chrome-extension-official-docs-popup-can-invoke-functions-on-the-background-p
// http://stackoverflow.com/questions/6064956/replace-all-occurrences-in-a-string
function showHistory() {
  // var texts = "a	b	c";
  var texts = chrome.extension.getBackgroundPage().getHistory();  
  var str = texts.replace(/\t/g, "\n") + "\n";
  setMyTextarea(str);
}

// http://www.w3schools.com/jsref/event_onclick.asp
function addClearEvent() {
  document.getElementById('clearButton').onclick = function() {
    chrome.extension.getBackgroundPage().clearHistory();
    setMyTextarea("");
  };
}

function setMyTextarea(text) {
  document.getElementById('myTextarea').innerHTML = text;
}

function addDictionarySelectEvent() {
  document.getElementById("google").onclick = function() {
    chrome.extension.getBackgroundPage().setDictionary("google");
  };
  document.getElementById("eijiro").onclick = function() {
    chrome.extension.getBackgroundPage().setDictionary("eijiro");
  };
  document.getElementById("weblio").onclick = function() {
    chrome.extension.getBackgroundPage().setDictionary("weblio");
  };
}

function checkDictionary() {
  var dict = chrome.extension.getBackgroundPage().getDictionary();
  document.getElementById(dict).checked = true;
}

// Run as soon as the document's DOM is ready.
// http://developer.chrome.com/extensions/getstarted.html
document.addEventListener('DOMContentLoaded', function () {
  checkDictionary();
  addDictionarySelectEvent();
  
  showHistory();
  addClearEvent();
});
