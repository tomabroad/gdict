// reference
// Context Menus Sample (with Event Page)
// http://developer.chrome.com/extensions/samples.html

// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.selectionText;
  var url = createUrl(sText);  
  
  open_in_new_tab(url);  
  addHistory(sText);  
};

// http://stackoverflow.com/questions/4907843/open-url-in-new-tab-using-javascript
function open_in_new_tab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Lookup Online";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});  
});

/*
dictionary url
*/

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
  // var query = sText + " meaning";
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

/*
cookie
*/
var days = 365;

// http://www.w3schools.com/js/js_cookies.asp
function setCookie(c_name,value,exdays)
{
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

// http://www.w3schools.com/js/js_cookies.asp
function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
  {
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start,c_end));
}
return c_value;
}

/*
cookie:history
*/
var ckey = "c_hist";

function addHistory(str) {
  var hs = getHistory();
  
  if ( isEmpty(hs) ) {
    hs = str;
    
  } else {
    var arr = hs.split("\t");
    
    if ( !contains(str, arr) ) {
      hs += "\t" + str;
    }
  }
  setCookie(ckey, hs, days);
}

function isEmpty(str) {
  return str == null || str == "";
}

function contains(target, arr) {

  for (var i=0; i<arr.length; i++) {  
    if (target == arr[i]) {
      return true;
    }
  }
  return false;
}

function getHistory() {
  var tmp = getCookie(ckey);
  return tmp;
}

function clearHistory() {
  setCookie(ckey, "", days);
}

/*
cookie:dictionary
*/

/*
var GOOGLE = "google";
var EIJIRO = "eijiro";
var WEBLIO = "weblio";
*/
var C_DICT = "c_dict";

function setDictionary(dict) {
  setCookie(C_DICT, dict, days);
}

function getDictionary() {
  var tmp = getCookie(C_DICT);
  
  if ( isEmpty(tmp) ) {
    tmp = "google";
  }
  return tmp;
}
