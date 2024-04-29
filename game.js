let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

$(document).one("keydown", function () {
  nextSequence();
  $("h1").text("Level " + level);
});

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  console.log(randomChosenColour);
  // return randomChosenColour;
  animatePress(randomChosenColour);
  playSound(randomChosenColour);
  level++;
  $("h1").text("Level " + level);
}

// $(".btn").on("click", function () {
//   alert("Handler for `click` called.");
// });

$(".btn").click(function () {
  // alert("The button was clicked.");
  let userChosenColour = this.id;
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// let buttonId = $("#" + randomChosenColour);
// $("button").click(function () {
//   alert("The button was clicked.");
// });

// function playSound(name) {
//   let audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
