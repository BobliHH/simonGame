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

// let buttonId = $("#" + randomChosenColour);
// $(buttonId).click(function () {
//   $(this).fadeIn(100).fadeOut(100).fadeIn(100);
// });

// function playSound(name) {
//   let audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
