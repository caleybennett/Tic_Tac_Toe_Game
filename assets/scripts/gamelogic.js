'use strict'
// const htmlDoc = require('./index.html')
// const events = require('./events')
const api = require('./gameAPI/api.js')
const gameui = require('./gameAPI/ui.js')

let player = 'X'
let over = false

const changePlayer = newPlayer => {
  if (newPlayer === 'X') {
    player = 'O'
    $('.message').text("Player O's move")
  } else if (newPlayer === 'O') {
    player = 'X'
    $('.message').text("Player X's move")
  }
}
const gameOver = function (boolean) {
  if (boolean === true) {
    // console.log('game over')
    over = true
    $('.box').off('click', onClickedSquare)
  }
}
const drawGameOneValue = gameValue => {
  return gameValue !== ''
}
const drawGame = gameboard => {
  if (gameboard.every(drawGameOneValue) === true) {
    $('.message').html(`Yikes... It's a tie! please start a new game`)
    gameOver(true)
    // added off click handler here!!
    $('.box').off('click', onClickedSquare)
  }
}

const moveToGameBoard = (id, player) => {
  gameBoard.splice(id, 1, player)
}

// const alreadyClicked = event => {
//   if ($(event.target).text() === 'X' || $(event.target).text() === 'O') {
//     $('#message').html(`You already clicked here`)
//   } else {
//
//   }
// }

// this way works!! for only one thing it doesnt

const onClickedSquare = event => {
  event.preventDefault()
  const id = event.target.id
  if (gameBoard[id] !== '') {
    $('.message').html(`You already clicked here`)
  } else if ($(event.target).html() === ' ') {
    $(event.target).css('background', 'transparent').html(player)
    api.update(id, player)
      .then(gameui.onUpdateGameSuccess)
      .catch(gameui.onUpdateGameFailure)
    moveToGameBoard(id, player)
    changePlayer(player)
    drawGame(gameBoard)
    winGame(gameBoard)
  } else if ($(event.target).text() !== ' ') {
    $('#message').html(`You already clicked here`)
  }
}

// const onClickedSquare = event => {
//   event.preventDefault()
//   const id = event.target.id
//   if ($(event.target).html() === ' ') {
//     $(event.target).css('background', 'transparent').html(player)
//     api.update(id, player)
//       .then(gameui.onUpdateGameSuccess)
//       .catch(gameui.onUpdateGameFailure)
//     moveToGameBoard(id, player)
//     changePlayer(player)
//     drawGame(gameBoard)
//     winGame(gameBoard)
//   } else if ($(event.target).text() !== ' ') {
//     $('#message').html(`You already clicked here`)
//   }
// }

// const onUpdateGame = (id, player) => {
//   api.update(id, player)
//     .then(ui.onUpdateGameSuccess)
//     .catch(ui.onUpdateGameFailure)
// }

let gameBoard = ['', '', '', '', '', '', '', '', '']

const newGame = event => {
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.box').html(' ').css('background', 'white')
  $('.box').on('click', onClickedSquare)
  player = 'X'
  $('.message').text("Player X's move")
  over = false
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
    $('.message').html(`Yay!! player X won!`)
    return gameOver(true)
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    $('.message').html(`Yay!! player X won!`)
    return gameOver(true)
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    $('.message').html(`Yay!! player X won!`)
    return gameOver(true)
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    $('.message').html(`Yay!! player X won!`)
    return gameOver(true)
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    $('.message').html(`Yay!! player X won!`)
    return gameOver(true)
  } else if (gameBoard[2] === 'X' && gameBoard[8] === 'X' && gameBoard[5] === 'X') {
    $('.message').html(`Yay!! player X won!`)
    return gameOver(true)
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    $('.message').html(`Yay!! player X won!`)
    return gameOver(true)
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    $('.message').html(`Yay!! player X won!`)
    return gameOver(true)
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    $('.message').html(`Yay!! player O won!`)
    return gameOver(true)
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    $('.message').html(`Yay!! player O won!`)
    return gameOver(true)
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    $('.message').html(`Yay!! player O won!`)
    return gameOver(true)
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    $('.message').html(`Yay!!, player O won!`)
    return gameOver(true)
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    $('.message').html(`Yay!! player O won!`)
    return gameOver(true)
  } else if (gameBoard[2] === 'O' && gameBoard[8] === 'O' && gameBoard[5] === 'O') {
    $('.message').html(`Yay!! player O won!`)
    return gameOver(true)
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    $('.message').html(`Yay!! player O won!`)
    return gameOver(true)
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    $('.message').html(`Yay!! player O won!`)
    return gameOver(true)
  } else {
    return gameOver(false)
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
  newGame,
  player
}
