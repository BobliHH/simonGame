# simonGame

Step 1 - Add Javascript and jQuery
Our game logic will be created inside an external Javascript file.

1. Create a new file called game.js

2. Link to this new external JS file from your index.html

3. Add an alert to game.js and test that the alert gets triggered when you load up index.html in Chrome.


Once, you've confirmed that game.js is correctly linked, you can delete or comment out the alert.



4. Add jQuery to your website and test that it's successfully loaded by opening Chrome developer tools and typing $("h1")

If successful, you should get something like this printed:


If jQuery is not added, you will get this instead:

   ////////////////////////////////////////////////////////////////

STEP 2 - Create A New Pattern

1. Inside game.js create a new function called nextSequence()

2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber

You can use the Chrome console to verify that your code creates random numbers between the correct range.

3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .

4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.

5. At the top of the game.js file, create a new empty array called gamePattern.

6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.

   ////////////////////////////////////////////////////////////////

STEP 3 - Show the Sequence to the User with Animations and Sounds

7. Use jQuery to select the button with the same id as the randomChosenColour

8. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.

You should end up with an effect like this:

9. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.

////////////////////////////////////////////////////////////////

Step 4 - Check Which Button is Pressed

10. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

11. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.

--> So if the Green button was clicked, userChosenColour will equal its id which is "green".

12. At the top of the game.js file, create a new empty array with the name userClickedPattern.

13. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern

At this stage, if you log the userClickedPattern you should be able to build up an array in the console by clicking on different buttons.

////////////////////////////////////////////////////////////////

Step 5 - Add Sounds to Button Clicks 14. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played. e.g if the Green button is clicked, then green.mp3 should be played.

15. Create a new function called playSound() that takes a single input parameter called name.

16. Take the code we used to play sound in the nextSequence() function and move it to playSound().

17. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.

////////////////////////////////////////////////////////////////

Step 6 - Add Animations to User Clicks 18. Create a new function called animatePress(), it should take a single input parameter called currentColour.

19. Take a look inside the styles.css file, you can see there is a class called "pressed", it will add a box shadow and changes the background colour to grey.

20. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().

21. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.

////////////////////////////////////////////////////////////////

Step 7 - Start the Game 22. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().

You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.

23. Create a new variable called level and start at level 0.

24. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".

25. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.

26. Inside nextSequence(), update the h1 with this change in the value of level.

////////////////////////////////////////////////////////////////

Step 8 - Check the User's Answer Against the Game Sequence8
At this point, it might be worth reviewing how the Simon game works.

Firstly, the game shows the first colour in the sequence (blue). The user clicks on the blue button.

Next, the game shows the next colour (red), the user has to remember the sequence is blue, red and so on and so forth.

If the user messes up the sequence, then the game ends.

You can either try to figure out how to achieve this logic by trying to write the code yourself or you can follow the challenge steps below:

27. Create a new function called checkAnswer(), it should take one input with the name currentLevel

28. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.

e.g. If the user has pressed red, green, red, yellow, the index of the last answer is 3.

29. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".

You can now use these log statements along with logging the values of userClickedPattern and gamePattern in the Chrome Developer Tools console to check whether if your code is performing as you would expect and debug your code as needed. Once you're done, feel free to remove these log statements.

30. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.

31. Call nextSequence() after a 1000 millisecond delay.

32. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.

Now you should be able to play the game.

In the next few challenges, we'll address what happens when the user get's the pattern wrong and how to restart the game.

////////////////////////////////////////////////////////////////

Step 9 - Game Over 33. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.

34. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.

All going well, you should end up with a flash effect:

35. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.

////////////////////////////////////////////////////////////////

Step 10 - Restart the Game 36. Create a new function called startOver().

37. Call startOver() if the user gets the sequence wrong.

38. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
