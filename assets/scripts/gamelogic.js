'use strict'
// const htmlDoc = require('./index.html')
const events = require('./events')

const gameBoard = ['', '', '', '', '', '', '', '', '', '']

const winGame = (gameBoard) => {
  if (gameBoard[] !== ' ') {
    console.log('keep playing board empty')
  } else if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    $('#message').html(`Yay!!, ${events.player} won!`)
    console.log('player wins')
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
    $('#message').html(`Yay!!, ${events.player} won!`)
    console.log('player wins')
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    $('#message').html(`Yay!!, ${events.player} won!`)
    console.log('player wins')
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
    $('#message').html(`Yay!!, ${events.player} won!`)
    console.log('player wins')
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    $('#message').html(`Yay!!, ${events.player} won!`)
    console.log('player wins')
  } else if (gameBoard[1] === gameBoard[5] && gameBoard[8] === gameBoard[5]) {
    $('#message').html(`Yay!!, ${events.player} won!`)
    console.log('player wins')
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    $('#message').html(`Yay!!, ${events.player} won!`)
    console.log('player wins')
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    $('#message').html(`Yay!!, ${events.player} won!`)
    console.log('player wins')
  } else {
    console.log('keep playing')
  }
}

module.exports = {
  gameBoard,
  winGame
}
