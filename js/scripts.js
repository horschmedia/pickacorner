// var spin = setInterval(function() {
//
// }, 1000);
var timer;

$('h1').on("click", function() {
  var currentDegree = 0;
  var change = 5;
  var step = 2;
  clearTimeout(timer);
  var endDegree = getRandomNumber();
  console.log(endDegree);
  spin();

  function spin() {
    currentDegree += step;
    if(currentDegree <= endDegree) {
      $('#hand-spinner').css({'transform': 'rotate(' + currentDegree + 'deg)'});
    }

    change = (endDegree / (endDegree - currentDegree));

    timer = setTimeout(function() {
      if(currentDegree >= endDegree) {
        clearTimeout(timer);
        return;
      }
      else {
        spin();
      }
    }, change);
  }
});

var min = 1080;
var max = 1440;
var number;

function getRandomNumber() {
  number = Math.floor(Math.random() * (max-min) + min);
  while(!(number % 90)) {
    number = Math.floor(Math.random() * (max-min) + min);
  }
  return number;
}
