
function setHistoryTextarea(text) {
  $("#historyTextarea").val(text);
}

function getHistoryTextarea() {
  return $("#historyTextarea").val();
}

function checkDictionary() {
  var dict = getDictionary();
  $("#" + dict).prop("checked", true);
}

// http://stackoverflow.com/questions/6064956/replace-all-occurrences-in-a-string
function showHistory() {
  var str = "";
  var arr = getHistory();
  
  for (var i=arr.length-1; i>=0; i--) {
    str += arr[i] + "\n";
  }
  setHistoryTextarea(str);
}

// http://stackoverflow.com/questions/1726747/jquery-how-do-you-loop-through-each-newline-of-text-typed-inside-a-textarea
function getDisplayedHistory() {
  var lines = getHistoryTextarea().split('\n');
  var arr = [];
  
  for (var i = lines.length-1; i >= 0; i--) {
    var line = lines[i];
    
    if ( !isEmpty(line) ) {
      arr.push(line);
    }
  }
  return arr;
}

// http://www.w3schools.com/jsref/event_onclick.asp
function addClearEvent() {
  $("#clearButton").click(function(){
    clearHistory();
    setHistoryTextarea("");
  });
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

function addClickLinkEvent() {
  $("#gdictLinkButton").click(function(){
    var url = "https://github.com/tomabroad/gdict/releases";
    window.open(url, '_blank');
  });
}

// update history
function addUpdateEvent() {
  $("#updateButton").click(function(){
    var arr = getDisplayedHistory();
    setHistory(arr);
    showHistory();    
  });
}

$(document).ready(function(){
  // console.log("popup: $(document).ready");
  
  checkDictionary();
  showHistory();
  
  addDictionarySelectEvent();  
  addUpdateEvent();
  addClearEvent();
  addClickLinkEvent();
});
