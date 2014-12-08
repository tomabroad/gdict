
function update() {
  showNumHistory();
  showHistory();
}

function showHistory() {
  var str = "";

  if (countHistory() != 0) {
    var jsonObj = getHistory();
    str = JSON.stringify(jsonObj, null, 2); 
  }
  $("#historyTextarea").val(str);
}

function showNumHistory() {
  var str = "(" + countHistory() + ")";
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

$(document).ready(function(){
  update();  
  addClearEvent();
  addClickLinkEvent();
});
