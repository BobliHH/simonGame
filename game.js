let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}
randomChosenColour = buttonColours[randomNumber];
console.log(randomChosenColour);
gamePattern.push(randomChosenColour);

let buttonId = "#" + randomChosenColour;
$(buttonId).click(function () {
  $(this).animate(
    {
      backgroundColor: "#FF0000", // flash color
      color: "#FFFFFF", // text color
    },
    100,
    function () {
      $(this).delay(100).animate(
        {
          backgroundColor: "#FFFFFF", // original background color
          color: "#000000", // original text color
        },
        100
      );
    }
  );
});
