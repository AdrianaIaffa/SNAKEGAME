**Timeframe**
5 days, solo project

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

![Snake-Design](https://github.com/AdrianaIaffa/SNAKEGAME/assets/100214999/14528cec-067a-49a7-9dc9-8836819cb2f7)

Day one
I started with the initial wireframe. I wanted to implement so many things! I was very ambitious with my project and I was being naive as to how much I could achieve in the time allocated. I started with the grid layout and I followed a tutorial from class for this. This was the base for my game. The grid at first contained 100 cells from 0 to 99. Selecting a cell from the 99 and with the implementation of the movement on my handleMovement function i got one piece to move around the grid and this was a very exciting moment

    function handleMovement(event) {
     const key = event.keyCode;
     const up = 38;
     const down = 40;
     const left = 37;
     const right = 39;
     const spaceBar = 32;
  
  
     if (key === up && snakeDirection !== width) {
       snakeDirection = -width;
     } else if (key === down && snakeDirection !== -width) {
       snakeDirection = +width;
     } else if (key === left && snakeDirection !== 1) {
       snakeDirection = -1;
     } else if (key === right && snakeDirection !== -1) {
       snakeDirection = +1;
     } else if (key === spaceBar) {
       pauseGame();
       console.log("space bar");
     } else {
       console.log("GAME OVER");
     }
     addSnake(snake, eachCellinsideGrid);
     }


Day two 
Snake movement was quite tricky to get my head around, but thinking about the snake as an array helped me realise how it could move forward by using the unshift and pop methods.
I also figured out how to place food on the grid by Implementing a random number generator with a `while` loop to ensure food placement doesn't collide with the snake.


Day 3
Once I managed to have the snake on the grid moving and having food randomly placed on the grid, I got on with having the snake eating the food. Realised i could get the snake growing by not using the pop method when the head of the snake[0] this the food.

Day 4
Added an interval so the snake moves by itself. My startMovement function now will handle most of the action. If the head hits food will add a new piece of food, 

    function startMovement() {
       clearInterval(snakeTimer);
       const speedInterval = 500 / speedLevel;
    
  
     snakeTimer = setInterval(() => {
       const horizontalPosition = snake[0] % width;
       const verticalPosition = Math.floor(snake[0] / width);
       if (
         (horizontalPosition === 19 && snakeDirection === 1) ||
         (horizontalPosition === 0 && snakeDirection === -1) ||
         (verticalPosition === 19 && snakeDirection === 20) ||
         (verticalPosition === 0 && snakeDirection === -20) ||
         checkCollision()
       ) {
         clearInterval(snakeTimer);
         clearInterval(valueCount);
         gameRunning = false;
         console.log("gameOver");
         displayGameOver();
         return;
       }


     if (!eachCellinsideGrid[snake[0] + snakeDirection].classList.contains("food")) {
       snake.pop();
     } else {
       removeFood();
       addFood(eachCellinsideGrid);
       score += 10;
       displayScore();
     
  
       if (score > 0 && score % 50 === 0) {
         speedLevel++;
         displayLevelUp();
         startMovement();
       }
     }
     snake.unshift(snake[0] + snakeDirection);
     addSnake(snake, eachCellinsideGrid);
     }, speedInterval);
     }
     startMovement();

Day 5
Did most of the styling, added some difficulty levels by speeding up the snake after eating 5 pieces of food. Added the banners for Game over/ game paused and for the modal to show up with a delay to play again. I created an empty div under the title of the game to display all messages, so when it displays it doesn’t mess up the styling.


This was a pretty challenging project, and although I had many ideas at the start I quickly realised things take much longer than expected. It really taught me to keep things really really basic and once the basics are in place, you can start scaling up. I would have loved to implement things like adding a name for your snake or, choosing different colours for snake or food.
Overall the hardest thing was to understand the movement of the snake and how to change f direction as I had to do this dynamically with the width and the height of the grid. 
But I found the css and the functions like pause and start much easier. This project was really hard but so rewarding. My first ever game!


![snake](https://github.com/AdrianaIaffa/SNAKEGAME/assets/100214999/7cd6a76e-5984-488f-b1f7-aa7c0959a99a)
![Screenshot 2023-11-27 at 09 18 30](https://github.com/AdrianaIaffa/SNAKEGAME/assets/100214999/310712d7-aa5c-491d-97ef-c717c6249327)
![Screenshot 2023-11-27 at 09 18 33 (2)](https://github.com/AdrianaIaffa/SNAKEGAME/assets/100214999/dfac0895-66b1-4413-b24e-054329fd2dd3)
![Screenshot 2023-11-27 at 09 18 30 (2)](https://github.com/AdrianaIaffa/SNAKEGAME/assets/100214999/1fa10143-b182-4289-8b3c-73d5f9a4d28e)

