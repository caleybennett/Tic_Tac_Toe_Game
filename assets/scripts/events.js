'use strict'

const gamelogic = require('./gamelogic')
// const playerinfo = require('./playerinfo')

let player = 'X'

const changePlayer = newPlayer => {
  if (newPlayer === 'X') {
    player = 'O'
    $('#message').html(`player O's move`)
  } else if (newPlayer === 'O') {
    player = 'X'
    $('#message').html(`player x's move`)
  }
}

const onClickedSquare = event => {
  event.preventDefault()
  console.log(player)
  if ($(event.target).html() === ' ') {
    $(event.target).html(player)
    // $('#message').html(`player ${player} move`)
    const id = event.target.id
    //  $('#message').html(`player ${player} move`)
    moveToGameBoard(id, player)
    changePlayer(player)
    console.log(gamelogic.gameBoard)
    gamelogic.winGame(gamelogic.gameBoard)
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
