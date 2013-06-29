// http://developer.chrome.com/extensions/samples.html
// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.selectionText;
  var url = createUrl(sText);  
  
  window.open(url, '_blank');
  addHistory(sText);  
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Lookup Online";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});  
});

// dictionary url
function createUrl(sText) {
  var url;
  var dict = getDictionary();  
  
  if (dict == "google") {
    url = createGoogleUrl(sText + " meaning"); 
  } else if (dict == "eijiro") {
    url = createEijiroUrl(sText); 
  } else if (dict == "weblio") {
    url = createWeblioUrl(sText); 
  } else {
    console.log("non-supported dictionary constant found: " + dict);
  }
  return url;
}

function createGoogleUrl(query) {
  var url = "https://www.google.com/search?q=" + encodeURIComponent(query);  
  return url;
}

function createEijiroUrl(query) {
  var url = "http://eow.alc.co.jp/search?q=" + encodeURIComponent(query);  
  return url;
}

function createWeblioUrl(query) {
  var url = "http://ejje.weblio.jp/content/" + encodeURIComponent(query);  
  return url;
}
