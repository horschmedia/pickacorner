<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="author" content="name">
    <meta name="description" content="description here">
    <meta name="keywords" content="keywords,here">
    <title>Pick A Corner</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" integrity="sha256-BtbhCIbtfeVWGsqxk1vOHEYXS6qcvQvLMZqjtpWUEx8=" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha256-YLGeXaapI0/5IgZopewRJcFXomhRMlYYjugPLSyNjTY=" crossorigin="anonymous" />
    <link rel="stylesheet" href="css/styles.css" type="text/css">
  </head>
  <body>

    <div class="mobile-instructions">
      <div class="instructions-container">
        <h2>Instructions</h2>
        <p>Pick the corners you would like to win. If your corner is picked you move onto the next level. The number of picks will decrease as you get to higher levels.</p>
        <div class="close-instructions">
          Got it
        </div>
      </div>
    </div>

    <div class="top-container">
      <div class="row">

        <div class="col-3 col-md-3">
          <i class="fas fa-bars"></i>
        </div>

        <div class="col-6 col-md-6">
          <h1 style="text-align: center">Pick A Corner</h1>
        </div>

        <div class="col-3 col-md-3" style="text-align: right;">
          <i class="fas fa-user-alt"></i>
        </div>

      </div>
    </div>

    <div class="about-container">
      <div style="height: 100%" class="row align-items-center">

        <div class="desktop-instructions col-12 col-md-4">
          <div class="instructions-container">
            <h2>Instructions</h2>
            <p>Pick the corners you would like to win. If your corner is picked you move onto the next level. The number of picks will decrease as you get to higher levels.</p>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="picks-container">
            <div id="picks-left">3</div>
            <div>Picks Left</div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="scores">
            <i class="fas fa-trophy"></i>
            <div class="row">
              <div class="col-6">
                <div class="current-score">
                  0
                </div>
                <div class="current-score-label">
                  Current Score
                </div>
              </div>
              <div class="col-6">
                <div class="high-score">
                  0
                </div>
                <div class="high-score-label">
                  High Score
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>



    <div class="main-container">

      <div id="start-button">Start</div>
      <div id="hand-spinner"></div>

      <div class="row">

        <div id="corner-1" class="col-6 corner">
          <p>1</p>
        </div>

        <div id="corner-2" class="col-6 corner">
          <p>2</p>
        </div>

        <div id="corner-3" class="col-6 corner">
          <p>3</p>
        </div>

        <div id="corner-4" class="col-6 corner">
          <p>4</p>
        </div>

      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha256-CjSoeELFOcH0/uxWu6mC/Vlrc1AARqbm/jiiImDGV3s=" crossorigin="anonymous"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>
