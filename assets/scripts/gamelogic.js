'use strict'
// const htmlDoc = require('./index.html')
const events = require('./events')

const gameBoard = ['', '', '', '', '', '', '', '', '', '']

const winGame = (gameBoard) => {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    console.log('player wins')
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    console.log('player wins')
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    console.log('player wins')
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    console.log('player wins')
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    console.log('player wins')
  } else if (gameBoard[1] === 'X' && gameBoard[8] === 'X' && gameBoard[5] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    console.log('player wins')
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    $('#message').html(`Yay!!, player X won!`)
    console.log('player wins')
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    console.log('player wins')
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    console.log('player wins')
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    console.log('player wins')
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    console.log('player wins')
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    console.log('player wins')
  } else if (gameBoard[1] === 'O' && gameBoard[8] === 'O' && gameBoard[5] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    console.log('player wins')
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    $('#message').html(`Yay!!, player O won!`)
    console.log('player wins')
  } else {
    console.log('keep playing')
  }
}

module.exports = {
  gameBoard,
  winGame
}
