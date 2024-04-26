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

9. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.

Step 3 - Check Which Button is Pressed

10. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

11. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.

--> So if the Green button was clicked, userChosenColour will equal its id which is "green".


12. At the top of the game.js file, create a new empty array with the name userClickedPattern.

13. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern

At this stage, if you log the userClickedPattern you should be able to build up an array in the console by clicking on different buttons.
