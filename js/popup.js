
function update() {
  showNumHistory();
  showHistory();
}

function showHistory() {
  var jsonObj = getHistory();
  var str = JSON.stringify(jsonObj, null, 2); 
  $("#historyTextarea").val(str);
}

function showNumHistory() {
  var n = 123;
  var str = "(" + n + ")";
  $("#numHistory").html(str);
}

function getDisplayedHistory() {
  var str = $("#historyTextarea").val();
  var jsonObj = JSON.parse(str);
  return jsonObj;
}

// -- events

// http://www.w3schools.com/jsref/event_onclick.asp
function addClearEvent() {
  $("#clearButton").click(function(){
    clearHistory();
    update();
  });
}

function addClickLinkEvent() {
  $("#gdictLinkButton").click(function(){
    var url = "https://github.com/tomabroad/gdict";
    window.open(url, '_blank');
  });
}

// update history
function addUpdateEvent() {
  $("#updateButton").click(function(){
    var jsonObj = getDisplayedHistory();
    
    if (jsonObj) {
      setHistory(jsonObj);
      update();
    } else {
      alert("error");
    }
  });
}

function addEvents() {
  addUpdateEvent();
  addClearEvent();
  addClickLinkEvent();
}

$(document).ready(function(){
  update();  
  addEvents();  
});
