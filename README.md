**Timeframe**
5 days

**Goal**
To create a fully functioning browser based game of your choice using vanilla JavaScript

**Technologies Used**
HTML
HTML Audio
Bootstrap
GoogleFonts
JavaSCript

**Deployed Version**
https://adrianaiaffa.github.io/SNAKEGAME/

**Controls **
Use the arrow buttons to move the snake
Use the spacebar to pause the game

Day one
I layed out the grid for the game and tried to think about how the snake could move around the grid

Day two 
Snake movement was quite tricky to get my head around, but thinking about the snake as an array helped me realise how it could move forward by using the unshift and pop methods.
I also figured out how to place food on the grid by Implementing a random number generator with a `while` loop to ensure food placement doesn't collide with the snake.

Day 3
Once I managed to have the snake on the grid moving and having food randomly placed on the grid, I got on with having the snake eating the food. Realised i could get the snake growing by not using the pop method when the head of the snake[0] this the food.

Day 4
Implement the hard limits of the grid so if it hits a wall within my ’ handleMovement’ function with the `checkForHits with a `while` loop to ensure food placement doesn't collide with the snake.

Day 5
Did most of the styling, added some difficulty levels by speeding up the snake after eating 5 pieces of food. Added the banners for Game over/ game paused and for the modal to show up with a delay to play again. I created an empty div under the title of the game to display all messages, so when it displays it doesn’t mess up the styling.

![snake](https://github.com/AdrianaIaffa/SNAKEGAME/assets/100214999/7cd6a76e-5984-488f-b1f7-aa7c0959a99a)
![Screenshot 2023-11-27 at 09 18 30](https://github.com/AdrianaIaffa/SNAKEGAME/assets/100214999/310712d7-aa5c-491d-97ef-c717c6249327)
![Screenshot 2023-11-27 at 09 18 33 (2)](https://github.com/AdrianaIaffa/SNAKEGAME/assets/100214999/dfac0895-66b1-4413-b24e-054329fd2dd3)
![Screenshot 2023-11-27 at 09 18 30 (2)](https://github.com/AdrianaIaffa/SNAKEGAME/assets/100214999/1fa10143-b182-4289-8b3c-73d5f9a4d28e)

