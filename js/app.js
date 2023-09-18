function loadGame() {
  // ! VARIABLE & DOM ELEMENTS ----------------------------------------------------------------
  //!------------------------------------------------------------------------------------------

  // ? DOM ELEMENTS ---------------------------------------------------------------------------
  
  //*create grid-------------------------------------------------------------------------------

  const grid = document.querySelector(".grid");

  // ? VARIABLES -------------------------------------------------------------------------------
  
  //*board config

  const width = 10;
  const height = 10;
  const cellCount = width * height;
  let cells = [];

  //*character config

  //SNAKE
  const startSnake = [32]
  let currentSnake = [...startSnake]
  console.log(currentSnake)
  

    //*----------------------------------------------------

  //FOOD
  let foodCell = Math.floor((Math.random() * 99) +1)
  let startFood = foodCell 
//   - startSnake || currentSnake  //* is this ging to be an if statement?
//   let placeFood = [...startFood]
                //*----------------------------------------------------

  //!FUNCTIONS----------------------------------------------------------------------------------
  //!------------------------------------------------------------------------------------------

  //*this creates the board and sets in on the page
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
      cells.push(cell);
    }
    //*adds our character in its startong position
    // console.log(cells)
    addSnake(startSnake);
    addFood(startFood)
  }

//?ADD CHARACTERS ---------------------------------------------------------------------------

    //*add snake
    //*this will helps us add and remove characters depending on how the game progresses
  function addSnake(position) {
    console.log("SNAKE BEING ADDED TO THE FOLLLOWING CELL ->", position);
    cells[position].classList.add("snake");
  }
   //*remove snake
  function removeSnake(position) {
    console.log("SNAKE REMOVED")
    cells[currentSnake].classList.remove("snake");
  }
    //*remove snake once is moving
    function removeSnakeMotion() {
        console.log("SNAKE REMOVED")
        cells[currentSnake -1].classList.remove('snake')
      }
        //*---------------------------------------------------------------------

  //*add food
  function addFood(position) {
    console.log("FOOD BEING ADDED TO THE FOLLOWING CELL ->", position);
    cells[position].classList.add("food");
  }
  //*remove food
  function removeFood() {
    console.log("FOOD REMOVED")
    cells[currentSnake].classList.remove('food')
  }


  //? HANDLE MOVEMENT ---------------------------------------------------------------------------

  function handleMovement(event) {
    console.log(event);
    const key = event.keyCode;

    const up = 38;
    const down = 40;
    const left = 37;
    const right = 39;
    const spaceBar = 32;

    removeSnake();

    //check which key was pressed and execut the code
    if (key === up && currentSnake >+ width) {
      console.log("UP")
      currentSnake -= width
    } else if (key === down && currentSnake + width <= cellCount - 1) {
      console.log("DOWN")
      currentSnake += width
    } else if (key === left && currentSnake % width !== 0) { 
      console.log("left")
      currentSnake--
    } else if (key === right && currentSnake % width !== 9) {
      console.log("right")
      currentSnake++
    } else if (key === spaceBar) {
        console.log("space bar")
      }else {
      console.log("INVALID KEY")
    }
    //*add snake once snake position has been updated with the keypad
    addSnake(currentSnake)
  }
      //*---------------------------------------------------------------------
      const newHeadposition= []
      console.log(newHeadposition)

  //*snake automated movement once the game starts
  function automaticSnake() {
    const newHeadposition= []
    currentSnake++
    removeSnakeMotion()
    newHeadposition.push(addSnake(currentSnake))
} 
  setInterval(automaticSnake, 1000)


  //*snake growth when head hits food

      //*---------------------------------------------------------------------

// function growSnake() {//* this also needs to place food again on the board
//     if(currentSnake[0] === startFood) {
//     for(let i=0; i<snake.length; i++) {
//         currentSnake.push(cells[position].classList.add("snake"))
//         removeFood()
//           }
//           addFood(placeFood)
//         }
   
//     return currentSnake;
// }
// growSnake()

// function checkforhit(){}


  //! EVENTS-----------------------------------------------------------------------------------
  //!------------------------------------------------------------------------------------------
  document.addEventListener('keyup', handleMovement)

  //! PAGE LOAD----------------------------------------------------------------------------------
  //!--------------------------------------------------------------------------------------------
  startGame(); // create grid on page
}

window.addEventListener("DOMContentLoaded", loadGame);
