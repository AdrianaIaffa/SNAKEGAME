const startSnake = [32, 31, 30]
let currentSnake = [...startSnake]
console.log(currentSnake)

let foodCell = Math.floor(Math.random() * cells.length)
let startFood = foodCell - currentSnake
// let newFood = [] - currentSnake

function growSnake() {//* this also needs to place food again on the board
    if(currentSnake[0] === startFood) {
      currentSnake.push(cells[position].classList.add("snake"))
        removeFood(startFood)
        addFood(startFood)
        }
   
    return currentSnake;
    
}
growSnake()



const array1 = [32]
const array2 = []
const random = Math.floor((Math.random() * 99) +1)
const newRandom = random-array2

when array1 === newRandom
push.newcellcolorendtail.toarray2
delete newRandom
add new random
update array2