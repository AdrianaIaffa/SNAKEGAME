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
  //create  a variable where we will update the values of snake
  let currentSnake = [];

  const gridElements = document.querySelectorAll(".grid>div")
  let foodCell = Math.floor(Math.random() * cellCount);
  const score = 0


  function startGame() {
    for (let i = 0; i < cellCount; i++) {
      
      const cell = document.createElement("div");
      cell.innerText = i;
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
  
    // const gridElements = document.querySelectorAll(".grid>div");
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
  }

  function removeFood() {
    eachCellinsideGrid[foodCell].classList.remove('food')
    }

const score = 0

    let snakeTimer

  function handleMovement(event) {
    console.log(event);
    const key = event.keyCode;

    const up = 38;
    const down = 40;
    const left = 37;
    const right = 39;
    const spaceBar = 32;

    const newHead = snake[0];

  //  let snakeTimer
    clearInterval(snakeTimer)

    //check which key was pressed and execut the code/ check that the head of the snake
   
      if (key === up && newHead > +width) {
        clearInterval(snakeTimer)
          snakeTimer = setInterval(()=> {
            
            if(!eachCellinsideGrid[snake[0]-width].classList.contains("food")) {
              snake.unshift(newHead - width)
              snake.pop();
              
            } else {
              snake.unshift(newHead - width)
              removeFood()
              addFood(eachCellinsideGrid)
            }  },1000)
         
             
           
          

    } else if (key === down && newHead + width <= cellCount - 1) {
      clearInterval(snakeTimer)
      snakeTimer = setInterval(()=> {
               if(!eachCellinsideGrid[snake[0]+width].classList.contains("food")) {
                snake.unshift(newHead + width);
                snake.pop();

              } else {
                snake.unshift(newHead + width)
                removeFood()
                addFood(eachCellinsideGrid)
              } }, 1000)
            // eachCellinsideGrid[snake[snake.length - 1]].classList.remove("snake");
            // addSnake(snake, eachCellinsideGrid);

    } else if (key === left && newHead % width !== 0) {
      clearInterval(snakeTimer)
      snakeTimer = setInterval(()=> {
              if( !eachCellinsideGrid[snake[0]-1].classList.contains("food") ) {
                snake.unshift(newHead - 1);
                snake.pop();

              }   else {
                snake.unshift(newHead - 1)
                removeFood()
                addFood(eachCellinsideGrid)
              } }, 1000)
            // eachCellinsideGrid[snake[snake.length - 1]].classList.remove("snake");
            // addSnake(snake, eachCellinsideGrid);

    } else if (key === right && newHead % width !== 9) {  
      clearInterval(snakeTimer)
          snakeTimer = setInterval(()=> {
            if(!eachCellinsideGrid[snake[0]+1].classList.contains("food")) {
              snake.unshift(newHead + 1);
              snake.pop();
            }  else {
              snake.unshift(newHead +1)
              removeFood()
              addFood(eachCellinsideGrid)
            }},1000)
            // eachCellinsideGrid[snake[snake.length - 1]].classList.remove("snake");
            // addSnake(snake, eachCellinsideGrid);

  
    } else if (key === spaceBar) {
      console.log("space bar");
    } 
    //else if () {
      //snakehead touches snake game over
    //} 
    else {
      console.log("GAME OVER");
    }
    addSnake(snake, eachCellinsideGrid);

  }



  //! EVENTS-----------------------------------------------------------------------------------
  //!------------------------------------------------------------------------------------------
  document.addEventListener("keyup", handleMovement);

  startGame();
  // setInterval(handleMovement, 1000)
}
window.addEventListener("DOMContentLoaded", loadGame);
