let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let randomChosenColour;
let level = 0;

$(document).one("keydown", function () {
  nextSequence();
  // $("#level-title").text("Level " + level);
});
$(".btn1").click(function () {
  nextSequence();
});

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  // console.log(randomChosenColour);
  // console.log(gamePattern);
  // return randomChosenColour;
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
  level++;
  $("#level-title").text("Level " + level);
}

// $(".btn").on("click", function () {
//   alert("Handler for `click` called.");
// });

$(".btn").click(function () {
  // alert("The button was clicked.");
  let userChosenColour = this.id;
  playSound(userChosenColour);
  animatePress(userChosenColour);
  // console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length);
  // console.log(userClickedPattern.length);

  // console.log(userClickedPattern);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel - 1] == userClickedPattern[currentLevel - 1]) {
    console.log("success");
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(() => {
        nextSequence();
        userClickedPattern = [];
      }, "1000");
    }
  } else {
    console.log("wrong");
    playSound("wrong");

    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart ");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

function playSound(name) {
  let audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  setTimeout(() => {
    location.reload();
  }, 1000);
}

// let buttonId = $("#" + randomChosenColour);
// $("button").click(function () {
//   alert("The button was clicked.");
// });

// function playSound(name) {
//   let audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
