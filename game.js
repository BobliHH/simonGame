let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  console.log(randomChosenColour);
  // return randomChosenColour;
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
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
  let audio = new Audio("sounds/" + userChosenColour + ".mp3");
  audio.play();
});

// let buttonId = $("#" + randomChosenColour);
// $("button").click(function () {
//   alert("The button was clicked.");
// });

// function playSound(name) {
//   let audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
