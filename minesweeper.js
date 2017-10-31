document.addEventListener('DOMContentLoaded', startGame)


//sounds

let cricket = new Audio(["audio/cricket.wav"])

// Define your `board` object here!
var board= {
  cells:[]
}
function makeBoard(size){
  for(i=0; i<=size; i++){
    for(j=0;j<=size;j++){
    board.cells.push(
      {row:i,
        col:j,
        isMine:Math.random() < 0.2,
        hidden:true,
        isMarked:false,
        surroundingMines:0
      })
    }
  }
}


function randomNumber(minimum, maximum){
    return Math.round( Math.random() * (maximum - minimum) + minimum);
}

function startGame () {

  makeBoard(randomNumber(2, 5))
  //count mines surrounding
  let cell = 0
    for (cell in board.cells) {
      board.cells[cell].surroundingMines = countSurroundingMines(cell)
  }


  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)




  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

//for each cell
  let cell = 0
    for (cell in board.cells) {
//if the cell is a mine but is not marked then start process again
if (board.cells[cell].isMine){
  if(!board.cells[cell].isMarked){
    return
  }
}

//if the cell is not a mine and is still not revealed then start again
if(board.cells[cell].hidden){
  if(!board.cells[cell].isMine){
    return
  }
}

}

  // if the cells all pass the above conditions then display =
 lib.displayMessage('You Win! Push up on Keyboard to restart with same board size! Push down to try a new size! ')



 function restartGameNew(){
   window.location.reload(true)
 }
 function restartGameSame(){
   window.location.reload(false)
 }

 document.addEventListener('keydown', restartGameNew)
 document.addEventListener('keyup', restartGameSame)
 cricket.play()


}


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding= lib.getSurroundingCells(
    board.cells[cell].row,
    board.cells[cell].col
  )
  let count = 0
  let curCell = 0
  for (curCell in surrounding) {
    if (surrounding[curCell].isMine) {
      count++
    } // if
  } // for
  return count
}
