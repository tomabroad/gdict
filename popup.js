
// http://stackoverflow.com/questions/6064956/replace-all-occurrences-in-a-string
function showHistory() {
  var str = "";
  var arr = getHistory();
  
  for (var i=0; i<arr.length; i++) {
    str += arr[i] + "\n";
  }
  setHistoryTextarea(str);
}

// http://www.w3schools.com/jsref/event_onclick.asp
function addClearEvent() {
  $("#clearButton").click(function(){
    clearHistory();
    setHistoryTextarea("");
  });
}

function setHistoryTextarea(text) {
  $("#historyTextarea").val(text);
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
}

function checkDictionary() {
  var dict = getDictionary();
  $("#" + dict).prop("checked", true);
}

function addClickLinkEvent() {
  $("#gdictLinkButton").click(function(){
    var url = "https://github.com/tomabroad/gdict/releases";
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
