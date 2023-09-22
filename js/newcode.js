// Create a Bootstrap modal 

const myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));

function loadGame() {
  const grid = document.querySelector(".grid");
  const width = 20;
  const height = 20;
  const cellCount = width * height;
  let eachCellinsideGrid = [];
  const snake = [146, 145, 144];
  let foodCell = Math.floor(Math.random() * cellCount);
  let snakeTimer;
  let snakeDirection = 1;
  let score = 0;
  let gameRunning = true;
  let speedLevel = 1;

  // Function to initialize the game grid

  function startGame() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement("div");
      cell.dataset.index = i;
      cell.style.height = `${100 / height}%`;
      cell.style.width = `${100 / width}%`;
      grid.appendChild(cell);
      eachCellinsideGrid.push(cell);
    }
    addSnake(snake, eachCellinsideGrid);
    addFood(eachCellinsideGrid);
  }

  // Function to add the snake to the grid
  function addSnake(snake, eachCellinsideGrid) {
    const gridElements = document.querySelectorAll(".grid>div");
    gridElements.forEach((cell) => cell.classList.remove("snake"));
    for (let i = 0; i < snake.length; i++) {
      eachCellinsideGrid[snake[i]].classList.add("snake");
    }
  }
  // Function to add food to the grid
  // function addFood(eachCellinsideGrid) {
  //   foodCell = Math.floor(Math.random() * cellCount);
  //   if (snake.includes(foodCell)) {
  //     foodCell = Math.floor(Math.random() * cellCount);
  //   }       
  //   eachCellinsideGrid[foodCell].classList.add("food");
  // }

  function addFood(eachCellinsideGrid) {
    let newFoodCell;
    do {
      newFoodCell = Math.floor(Math.random() * cellCount);
    } while (snake.includes(newFoodCell));
    
    foodCell = newFoodCell;
    eachCellinsideGrid[foodCell].classList.add("food");
  }

  // Function to remove food from the grid
  function removeFood() {
    eachCellinsideGrid[foodCell].classList.remove("food");
  }
  // Function to handle user keyboard input for snake movement
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

  // Function to check if the snake collides with itself
  function checkCollision() {
    const head = snake[0];
    for (let i = 1; i < snake.length; i++) {
      if (head === snake[i]) {
        return true;
      }
    }
    return false;
  }

  // Function to start the snake movement
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


  // Function to display a level up message
  function displayLevelUp() {
    const displayLevel = document.createElement("p");
    const display = document.querySelector(".display");
    displayLevel.classList.add("levelip-message");
    display.innerHTML = "<p>Level Up!</p>"
    setTimeout(() => {
      const display = document.querySelector(".display");
      display.innerHTML = "";
    }, 1000)
  }
  // Function to display a game over message
  function displayGameOver() {
    const gameOver = document.createElement("p");
    const display = document.querySelector(".display");
    gameOver.classList.add("game-over-message");
    display.innerHTML = "<p>Game Over</p>";
    const gameOverSound = new Audio("./media/videogame-death-sound-43894.mp3");
    gameOverSound.play();
    setTimeout(() => {
      myModal.show();
    }, 2000);
  }
  // Function to display the player's score
  function displayScore() {
    const scoreCount = document.querySelector(".scoring");
    scoreCount.innerHTML = score;
    const scorePoint = new Audio("./media/mario-coin-200bpm-82548.mp3");
    scorePoint.play();
  }

   // Function to count game time
  const timer = document.querySelector(".timer");
  let startTimer = 0;
  function valueCount() {
    if (gameRunning) {
      startTimer++;
      timer.innerHTML = startTimer;
    }
  }
  // Function to pause or resume the game
  function pauseGame() {
    const pauseGame = document.createElement("p");
    const display = document.querySelector(".display");
    pauseGame.classList.add("paused-message");
    if (gameRunning) {
      gameRunning = false;
      display.innerHTML = "<p>Game Paused</p>";
      clearInterval(snakeTimer);
    } else {
      gameRunning = true;
      display.innerHTML = "";
      startMovement();
    }
  }
  // Function to start a new game
  function startNewGame() {
    snake.length = 0;
    snake.push(32, 31, 30);
    foodCell = Math.floor(Math.random() * cellCount);
    snakeDirection = 1;
    score = 0;
    gameRunning = true;
    speedLevel = 1;
    const display = document.querySelector(".display");
    display.innerHTML = "";
    startTimer = 0;
    timer.innerHTML = startTimer;
    eachCellinsideGrid.forEach((cell) =>
      cell.classList.remove("snake", "food")
    );
    addSnake(snake, eachCellinsideGrid);
    addFood(eachCellinsideGrid);
    myModal.hide();
    const scoreCount = document.querySelector(".scoring");
    scoreCount.innerHTML = score;
    startMovement();
  }

  const newGameButton = document.getElementById("newGameButton");
  newGameButton.addEventListener("click", startNewGame);

  const noButton = document.getElementById("noButton");
  noButton.addEventListener("click", () => {
    myModal.hide();
  });

  document.addEventListener("keyup", handleMovement);

  startGame();
  displayScore();
  setInterval(valueCount, 1000);
  displayScore();
}

window.addEventListener("DOMContentLoaded", loadGame);