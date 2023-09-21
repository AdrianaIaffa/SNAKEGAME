//initialize game with

function loadGame() {
  //create grid container where cells wil be created document.querySelector(.grid)

  const grid = document.querySelector(".grid");

  //draw grid inside grid container

  //creats a variable with the width
  const width = 10;
  //creates a variable with the length
  const height = 10;
  //creates a variable that multiplies width by length
  const cellCount = width * height;
  //creates an empty array called cells, where each individual
  //cell created in the function startGame will be pushed
  //to create a grid
  let eachCellinsideGrid = [];

  //create a variable with the starting values of snake
  const snake = [32, 31, 30];
  let foodCell = Math.floor(Math.random() * cellCount);
  let snakeTimer;
  let snakeDirection = 1;
  let score = 0
  let gameRunning = true;

  function startGame() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement("div");
      // cell.innerText = i;
      cell.dataset.index = i;
      cell.style.height = `${100 / height}%`;
      cell.style.width = `${100 / width}%`;
      grid.appendChild(cell);
      eachCellinsideGrid.push(cell);
    }
    addSnake(snake, eachCellinsideGrid);
    addFood(eachCellinsideGrid);
  }

  function addSnake(snake, eachCellinsideGrid) {
    const gridElements = document.querySelectorAll(".grid>div");
    gridElements.forEach((cell) => cell.classList.remove("snake"));
      for (let i = 0; i < snake.length; i++) {
        eachCellinsideGrid[snake[i]].classList.add("snake");
      }
  }

  function addFood(eachCellinsideGrid) {
    foodCell = Math.floor(Math.random() * cellCount);
      if (snake.includes(foodCell)) {
        foodCell = Math.floor(Math.random() * cellCount);
      } else {
        eachCellinsideGrid[foodCell].classList.add("food");
      }
    score += 10;
    displayScore();
  }

  function removeFood() {
    eachCellinsideGrid[foodCell].classList.remove("food");
  }

  function handleMovement(event) {
    const key = event.keyCode;
    const up = 38;
    const down = 40;
    const left = 37;
    const right = 39;
    const spaceBar = 32;
    //check which key was pressed and execut the code/ check that the head of the snake

    if (key === up && snakeDirection !== width) {
      snakeDirection = -width;
    } else if (key === down && snakeDirection !== -width) {
      snakeDirection = +width;
    } else if (key === left && snakeDirection !== 1) {
      snakeDirection = -1;
    } else if (key === right && snakeDirection !== -1) {
      snakeDirection = +1;
    } else if (key === spaceBar) {
      pauseGame()
      console.log("space bar");
    } else {
      console.log("GAME OVER");
    }
    addSnake(snake, eachCellinsideGrid);
  }

  function checkCollision() {
    const head = snake[0];
    for (let i = 1; i < snake.length; i++) {
      if (head === snake[i]) {
        return true; 
      }
    }
    return false; 
  }

  function startMovement() {
    clearInterval(snakeTimer)
     snakeTimer = setInterval(()=> {
      const currentX = snake[0] % width
      const currentY = Math.floor(snake[0] / width)
      if(
        currentX === 9 && snakeDirection === 1 || 
        currentX === 0 && snakeDirection === -1 || 
        currentY === 9 && snakeDirection === 10 || 
        currentY === 0 && snakeDirection === -10 ||
        checkCollision()
        ) {
          clearInterval(snakeTimer)
          clearInterval(valueCount)
          gameRunning = false;
          console.log('gameOver')
          displayGameOver();
          return
        }
        
      if(!eachCellinsideGrid[snake[0] + snakeDirection].classList.contains("food")) {
        snake.pop();
      } else {
        removeFood()
        addFood(eachCellinsideGrid)
      }  
      snake.unshift(snake[0] + snakeDirection)
        addSnake(snake, eachCellinsideGrid)
     }, 1000 ) 
    }
  startMovement()


  function displayGameOver() {
    const gameOver = document.createElement("p")
    const display= document.querySelector(".display")
    gameOver.classList.add("game-over-message")
    display.innerHTML = "<p>Game Over</p>"
  }

  function displayScore() {
    const scoreCount= document.querySelector(".scoring")
    scoreCount.innerHTML = score
  }

  const timer = document.querySelector(".timer")
  let startTimer = 0, clear;
  function valueCount() {
    if(gameRunning) {
      startTimer++
      timer.innerHTML =  startTimer;
    }
  }

  function pauseGame() {
    paused = !paused; 
    if (paused) {
      clearInterval(snakeTimer); 
    } else {
      startMovement(); 
    }
  }
  
  document.addEventListener("keyup", handleMovement);

  startGame();
  displayScore()
  setInterval(valueCount, 1000);
  displayScore();

}
window.addEventListener("DOMContentLoaded", loadGame);
