document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{row:0,
  col:0,
  isMine: false,
  hidden: true
},
{row:0,
   col:1,
   isMine: true,
   hidden: true
 },
{row:0,
   col:2,
   isMine: false,
   hidden: true
 },
{row:1,
   col:0,
   isMine: false,
   hidden: true
 },
 {row:1,
   col:1,
   isMine: true,
   hidden: true
 },
 {row:1,
   col:2,
   isMine: true,
   hidden: true
 },
{row:2,
   col:0,
   isMine: false,
   hidden: true
 },
{row:2,
   col:1,
   isMine: false,
   hidden: true
 },
 {row:2,
   col:2,
   isMine: false,
   hidden: true
 }]

 }



function startGame () {
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
}
//if the cell is not a mine and is still not revealed then start again
if(board.cells[cell].hidden){
  if(!board.cells[cell].isMine){
    return
  }
}
  // if the cells all pass then above conditions display =
 lib.displayMessage('You win!')
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
  let curZone = undefined
  for (curZone in surrounding) {
    if (surrounding[curZone].isMine) {
      count++
    } // if
  } // for
  return count
}
