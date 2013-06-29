
// http://stackoverflow.com/questions/6064956/replace-all-occurrences-in-a-string
function showHistory() {
  var texts = getHistory();  
  var str = texts.replace(/\t/g, "\n") + "\n";
  setHistoryTextarea(str);
}

// http://www.w3schools.com/jsref/event_onclick.asp
function addClearEvent() {
  $("#clearButton").click(function(){
    clearHistory();
    setHistoryTextarea("");
  });
  /*
  document.getElementById('clearButton').onclick = function() {
    clearHistory();
    setHistoryTextarea("");
  };
  */
}

function setHistoryTextarea(text) {
  $("#historyTextarea").val(text);
//  document.getElementById('historyTextarea').innerHTML = text;
}

function addDictionarySelectEvent() {
  $("#google").click(function(){
    setDictionary("google");
  });
  $("#eijiro").click(function(){
    setDictionary("eijiro");
  });
  $("#weblio").click(function(){
    setDictionary("weblio");
  });
  /*
  document.getElementById("google").onclick = function() {
    setDictionary("google");
  };
  document.getElementById("eijiro").onclick = function() {
    setDictionary("eijiro");
  };
  document.getElementById("weblio").onclick = function() {
    setDictionary("weblio");
  };
  */
}

function checkDictionary() {
  var dict = getDictionary();
  $("#" + dict).prop("checked", true);
//  document.getElementById(dict).checked = true;
}

function addClickLinkEvent() {
  $("#gdictLinkButton").click(function(){
    var url = "https://github.com/tomabroad/gdict";
    window.open(url, '_blank');
  });
}

$(document).ready(function(){
  checkDictionary();
  addDictionarySelectEvent();  
  showHistory();
  addClearEvent();
  addClickLinkEvent();
});

// Run as soon as the document's DOM is ready.
// http://developer.chrome.com/extensions/getstarted.html
/*
document.addEventListener('DOMContentLoaded', function () {
  checkDictionary();
  addDictionarySelectEvent();
  showHistory();
  addClearEvent();
});
*/
