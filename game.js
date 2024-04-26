let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  console.log(randomChosenColour);
  // return randomChosenColour;
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// $(".btn").on("click", function () {
//   alert("Handler for `click` called.");
// });

$(".btn").click(function () {
  alert("The button was clicked.");
});

// let buttonId = $("#" + randomChosenColour);
// $("button").click(function () {
//   alert("The button was clicked.");
// });


// function playSound(name) {
//   let audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
