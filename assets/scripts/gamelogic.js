'use strict'
// const htmlDoc = require('./index.html')
// const events = require('./events')
const api = require('./gameAPI/api.js')
const gameui = require('./gameAPI/ui.js')

let player = 'X'

const changePlayer = newPlayer => {
  if (newPlayer === 'X') {
    player = 'O'
    $('#message').text("player O's move")
  } else if (newPlayer === 'O') {
    player = 'X'
    $('#message').text("player X's move")
  }
}
const gameOver = function (boolean) {
  if (boolean === true) {
    console.log('game over')
    $('.box').off('click', onClickedSquare)
  }
}
const drawGameOneValue = gameValue => {
  return gameValue !== ''
}
const drawGame = (gameboard) => {
  if (gameboard.every(drawGameOneValue)) {
    $('#message').html(`it's tie! please start a new game`)
  }
}

// const alreadyClicked = event => {
//   if ($(event.target).text() === 'X' || $(event.target).text() === 'O') {
//     $('#message').html(`You already clicked here`)
//   } else {
//
//   }
// }

const onClickedSquare = event => {
  event.preventDefault()
  const id = event.target.id
  if (gameBoard[id] !== '') {
    $('#message').html(`You already clicked here`)
    console.log(gameBoard + 'inside message')
  } else if ($(event.target).html() === ' ') {
    $(event.target).html(player)
    api.update(id, player)
      .then(gameui.onUpdateGameSuccess)
      .catch(gameui.onUpdateGameFailure)
    moveToGameBoard(id, player)
    changePlayer(player)
    winGame(gameBoard)
    drawGame(gameBoard)
    console.log(gameBoard + 'correct statement')
    //     alreadyClicked(gameBoard)
  }
  // } else if ($(event.target).text() !== ' ') {
  //   $('#message').html(`You already clicked here`)
  // }
  console.log(gameBoard)
}

const moveToGameBoard = (id, player) => {
  gameBoard.splice(id, 1, player)
}

// const onUpdateGame = (id, player) => {
//   api.update(id, player)
//     .then(ui.onUpdateGameSuccess)
//     .catch(ui.onUpdateGameFailure)
// }

let gameBoard = ['', '', '', '', '', '', '', '', '']

const newGame = event => {
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.box').html(' ')
  $('.box').on('click', onClickedSquare)
}

// const be able to iterate through every method in the array if itdoes not equal
// empty string

// const drawGameOneValue = gameValue => {
//   return gameValue !== ''
// }
//
// const drawGame = (gameboard) => {
//   if (gameboard.every(drawGameOneValue)) {
//     $('#message').html(`it's tie! please start a new game`)
//   }
// }

const winGame = (gameBoard) => {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    gameOver(true)
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    gameOver(true)
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    gameOver(true)
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    gameOver(true)
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    gameOver(true)
  } else if (gameBoard[2] === 'X' && gameBoard[8] === 'X' && gameBoard[5] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    gameOver(true)
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    gameOver(true)
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    gameOver(true)
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    gameOver(true)
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    gameOver(true)
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    gameOver(true)
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    gameOver(true)
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    gameOver(true)
  } else if (gameBoard[2] === 'O' && gameBoard[8] === 'O' && gameBoard[5] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    gameOver(true)
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    gameOver(true)
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    gameOver(true)
  } else {
    console.log('keep playing')
  }
}

// for (let i = 0; i < gameBoard.length; i++) {
//   if (gameBoard[i] === '') {
//     gameOver(false)
//     console.log('game not over')
//   } else if (gameBoard[i] === 'X' || gameBoard[i] === 'O') {
//     gameOver(true)
//     console.log('game over')
//   }
// }

// game is over when one player wins, or the board is full
// game over function: if game is over (true) another else statement saying game is over
// create a function game over
// game over is true when board is full-- for loop to check.

module.exports = {
  gameBoard,
  winGame,
  onClickedSquare,
  gameOver,
  newGame
}
