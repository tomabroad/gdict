var C_DAYS = 365;
var C_HIST = "c_hist";
var C_DICT = "c_dict";

// http://www.w3schools.com/js/js_cookies.asp
function setCookie(c_name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie = c_name + "=" + c_value;
}

// http://www.w3schools.com/js/js_cookies.asp
function getCookie(c_name) {
  var c_value = document.cookie;
  var c_start = c_value.indexOf(" " + c_name + "=");
  if (c_start == -1) {
    c_start = c_value.indexOf(c_name + "=");
  }
  
  if (c_start == -1) {
    c_value = null;
  } else {
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    
    if (c_end == -1) {
      c_end = c_value.length;
    }
    c_value = unescape(c_value.substring(c_start,c_end));
  }
  return c_value;
}

// history

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
  setCookie(C_HIST, hs, C_DAYS);
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
  var tmp = getCookie(C_HIST);
  return tmp;
}

function clearHistory() {
  setCookie(C_HIST, "", C_DAYS);
}

// dictionary

function setDictionary(dict) {
  setCookie(C_DICT, dict, C_DAYS);
}

function getDictionary() {
  var tmp = getCookie(C_DICT);
  
  if ( isEmpty(tmp) ) {
    tmp = "google";
  }
  return tmp;
}
