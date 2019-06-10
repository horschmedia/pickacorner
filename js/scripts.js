// var spin = setInterval(function() {
//
// }, 1000);
var timer;
var currentDegree;
var change;
var step;
var endDegree;
var winner;
var score = 0;
var highScore = 0;
var userPicks = [];
var scoreIncriment = 100;
var picksLeft = 3;
var isSpinning = false;

$('.corner').on("click", function() {
  tempPick = $(this).children().html();

  if(isSpinning == true) {
    return;
  }

  if(userPicks.includes(tempPick)) {
    for( var i = 0; i < userPicks.length; i++){
       if ( userPicks[i] == tempPick) {
         userPicks.splice(i, 1);
         i--;
       }
    }
    $('#corner-' + tempPick).removeClass('picked');
    picksLeft += 1;
  }
  else if(picksLeft >= 1) {
    userPicks.push(tempPick);
    $('#corner-' + tempPick).addClass('picked');
    picksLeft -= 1;
    if(picksLeft == 0) {
      $('#start-button').show();
    }
  }
  else {
    $('#start-button').show();
  }
});

function resetPicks() {
  $('.corner').removeClass('picked');
  isSpinning = false;
  userPicks = [];
  picksLeft = 3;
  $('#start-button').hide();
}

function increaseScore() {
  score += scoreIncriment;
  $('.current-score').html(score);

  if(score > highScore) {
    highScore = score;
    $('.high-score').html(score);
  }
}


$('#start-button').on("click", function() {
  $('#start-button').hide();
  console.log(userPicks);
  isSpinning = true;
  currentDegree = 0;
  change = 5;
  step = 2;
  endDegree = getRandomNumber();

  // calculate winner
  switch (true) {
    case (endDegree < 1170):
      winner = 2;
      break;
    case (endDegree < 1260) :
      winner = 4;
      break;
    case (endDegree < 1350):
      winner = 3;
      break;
    case (endDegree < 1440):
      winner = 1;
      break;
  }

  clearTimeout(timer);
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
        if(userPicks.includes(winner.toString())) {
          increaseScore();
          resetPicks();
        }
        else {
          score = 0;
          $('.current-score').html(score);
          resetPicks();
        }
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
