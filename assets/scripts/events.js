'use strict'

const gamelogic = require('./gamelogic')
// const playerinfo = require('./playerinfo')

let player = 'X'

const changePlayer = newPlayer => {
  if (newPlayer === 'X') {
    player = 'O'
  } else if (newPlayer === 'O') {
    player = 'X'
  }
}

const onClickedSquare = event => {
  event.preventDefault()
  if ($(event.target).html() === ' ') {
    $(event.target).html(player)
    $('#message').html(`player ${player} move`)
    const id = event.target.id
    changePlayer(player)
    moveToGameBoard(id, player)
    gamelogic.winGame(gamelogic.gameBoard)
    console.log(player)
  } else {
    $('#message').html(`You already clicked here`)
  }
}

const moveToGameBoard = (id, player) => {
  gamelogic.gameBoard.splice(id, 0, player)
}

const addHandlers = event => {
  $('.box').on('click', onClickedSquare)
}

module.exports = {
  addHandlers
}
