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
const cellCount = width * height
 //creates an empty array called cells, where each individual 
    //cell created in the function startGame will be pushed
    //to create a grid
let eachCellinsideGrid = [];

//create a variable with the starting values of snake 
const snake = [32,31,30]
//create  a variable where we will update the values of snake 
let currentSnake = []

//function that creates each cell inside the grid according to the number
    //stored on cellcount function newGame() {for (let i = 0; i < eachCellinsideGrid; i++}
    //creates a variable called cell and creates a div
    //adds the index by adding text inside each div
    //same as above but attaches it as a dataset
    //calculates the height of the cell and styles it
    //calculates the width of the cell and styles it
    //appends each div to the grid to create a grid

    //pushes each cell inside the cell array

function startGame() {
    for (let i = 0; i < cellCount; i++) {
        // console.log(i)
      const cell = document.createElement("div");
      cell.innerText = i;
      cell.dataset.index = i;
      cell.style.height = `${100 / height}%`;
      cell.style.width = `${100 / width}%`;
      grid.appendChild(cell);
      console.log(cell);
      eachCellinsideGrid.push(cell);
      console.log(eachCellinsideGrid)
    }
    addSnake(snake, eachCellinsideGrid)
  }

//   console.log(eachCellinsideGrid)
  //const gridElements = document.querySelectorAll('grid>div')
//   console.log(gridElements)

//create addsnake function that takes as params the snake and cells arrays as params
//remove the class of snake on the entire grid by going through each div and removing the class 
//add the class of snake for each index of the snake array
//callback the function to position snake on the board

//function addSnake() {forEach grid div remove.classList"snake"" // foreach currentsnake.length add.classlist"snake""}

function addSnake(snake, eachCellinsideGrid) {
    console.log(snake)
    console.log(eachCellinsideGrid)
    const gridElements = document.querySelectorAll('grid>div')
    gridElements.forEach((cell) => cell.classList.remove("snake"))
    // for (let i = 0; i <=eachCellinsideGrid.length; i++){
    // eachCellinsideGrid.classList.remove("snake")

    for(let i = 0; i<snake.length; i++){
        console.log(eachCellinsideGrid[snake[i]])
    eachCellinsideGrid[snake[i]].classList.add("snake")
    }
}
//attach the keyevent to the keys
//if keyup is press

function handleMovement(event) {
    console.log(event);
    const key = event.keyCode;

    const up = 38;
    const down = 40;
    const left = 37;
    const right = 39;
    const spaceBar = 32;

    const newHead = snake[0]
    //check which key was pressed and execut the code/ check that the head of the snake
    if (key === up && newHead >+ width) { // something n the lines of && currentsnake[0}-{width}
      console.log("UP")

      snake.unshift(newHead-width) 
      snake.pop()

    } else if (key === down && newHead + width <= cellCount - 1) {
      console.log("DOWN")

      snake.unshift(newHead+width) 
      snake.pop()

    } else if (key === left && newHead % width !== 0) { 
        console.log("LEFT")

        snake.unshift(newHead - 1)
        snake.pop()
    } else if (key === right && newHead % width !== 9) {
      console.log("right")

      snake.unshift(newHead+1)
      snake.pop()
    //   const newHead = snake[0]
     //snake unshift to add a new sqare to the front
     
     //snake pop to delete the last square
     
    } else if (key === spaceBar) {
        console.log("space bar")
      }else {
      console.log("INVALID KEY")
    }
    addSnake(snake, eachCellinsideGrid)
  }

//place food at a random index but check that the snake isnt there
//create foodcell var with random Math.
//function addFood that will pass the var with the random number and eachCellInsideGRid
//use the method except(snake)? maybe contains and slice
//let foodCell = Math.floor((Math.random() * 99) +1)
//if currentsnake includes foodcell then find a new random number else place food in grid


//growsnake function will check that if the head of the snake matches a food cell
// a new classlist will be pushed or unshift to the snake


//! EVENTS-----------------------------------------------------------------------------------
//!------------------------------------------------------------------------------------------
  document.addEventListener('keyup', handleMovement)

startGame()

}
window.addEventListener("DOMContentLoaded", loadGame);