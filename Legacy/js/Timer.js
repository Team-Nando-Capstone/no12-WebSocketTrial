var t = null;
t = setTimeout(time, 1000); //start
function time() {
  clearTimeout(t); //Clear count
  dt = new Date();
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var h = dt.getHours(); //Hour
  var m = dt.getMinutes(); //Minute
  var s = dt.getSeconds(); //Second
  document.querySelector(".showTime").innerHTML =
    "Current Date:" +
    day +
    "." +
    mt +
    "." +
    y +
    "  " +
    h +
    ":" +
    m +
    ":" +
    s +
    " ";
  t = setTimeout(time, 1000); //loop again
}