
function setHistoryTextarea(text) {
  $("#historyTextarea").val(text);
}

function getHistoryTextarea() {
  return $("#historyTextarea").val();
}

function checkView() {
  var view = getView();
  
  if (view == C_WINDOW) {
    viewId = "newWindow";
  } else {
    viewId = "newTab";
  }
  $("#" + viewId).prop("checked", true);
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

function showNumHistory() {
  var n = getHistory().length;
  var str = "(" + n + ")";
  $("#numHistory").html(str);
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

// -- events

// http://www.w3schools.com/jsref/event_onclick.asp
function addClearEvent() {
  $("#clearButton").click(function(){
    clearHistory();
    update();
  });
}

function addViewSelectEvent() {
  $("#newTab").click(function(){
    setView(C_TAB);
  });
  $("#newWindow").click(function(){
    setView(C_WINDOW);
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
    update();
  });
}

// http://jsfiddle.net/MHDhT/
function addHoverEvent(hovId) {
  $(hovId).hover(function(){
    $(hovId + ' .hiddenMenu').slideDown();
  },function(){
    $(hovId + ' .hiddenMenu').slideUp();
  });
}

function update() {
  checkView();
  checkDictionary();
  showNumHistory();
  showHistory();
}

function addEvents() {
  addViewSelectEvent();
  addDictionarySelectEvent();  
  addUpdateEvent();
  addClearEvent();
  addClickLinkEvent();
  addHoverEvent("#viewHov");
  addHoverEvent("#dictionaryHov");
  addHoverEvent("#aboutHov");
}

$(document).ready(function(){
  // console.log("popup: $(document).ready");
  update();  
  addEvents();  
});
