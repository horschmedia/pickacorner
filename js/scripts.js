// var spin = setInterval(function() {
//
// }, 1000);

var endDegree = 1750;
var currentDegree = 0;
var change = 5;
var step = 2;
spin();

function spin() {
  if(currentDegree != endDegree) {
    $('#hand-spinner').css({'transform': 'rotate(' + currentDegree + 'deg)'});
  }

  change = endDegree / (endDegree - currentDegree);

  timer = setTimeout(function() {
    if(currentDegree == endDegree) {
      clearInterval(timer);
      return;
    }
    else {
      currentDegree += step;
      spin();
    }
  }, change);
}
