# simonGame

STEP 1 - Create A New Pattern

1. Inside game.js create a new function called nextSequence()

2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber

You can use the Chrome console to verify that your code creates random numbers between the correct range.

3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.

5. At the top of the game.js file, create a new empty array called gamePattern.

6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.

   ////////////////////////////////////////////////////////////////

STEP 2 - Show the Sequence to the User with Animations and Sounds

7. Use jQuery to select the button with the same id as the randomChosenColour

8. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.

You should end up with an effect like this:

3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
