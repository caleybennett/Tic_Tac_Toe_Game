'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const gamelogic = require('../gamelogic.js')
// const formFields = require('../../lib/get-form-fields')

const onCreateGame = event => {
  event.preventDefault()

  gamelogic.newGame(event)

  api.create()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
//  gamelogic.newGame(event)
}

const onGetGames = event => {
  event.preventDefault()
  // console.log('on get games is working')
  // const form = event.target
  // const formData = formFields(form)
  api.getgame()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

// const value = $(event.target).val()
// const index = $(event.target).attr('ID')

// const getValue = event => {
//   return $(event.target).val()
//   //////console.log('get value works')
// }
//
// const getIndex = event => {
//   return $(event.target).attr('ID')
// }
//
// const onUpdateGame = event => {
//   // //////console.log('on update game works')
//   // index = gamelogic.gameBoard.each(getIndex)
//   // value = gamelogic.gameBoard.each(getValue)
//   //////console.log(gamelogic.id)
//   //////console.log(gamelogic.player)
//   // store the index and the value in variables
//   // store the ID in the store.js file
//   // const index = same index ID in the html
//   // const value = the html text written in the file
//   api.update(id, player)
//     .then(ui.onUpdateGameSuccess)
//     .catch(ui.onUpdateGameFailure)
// }

const addHandlers = event => {
  $('.newgame').on('click', onCreateGame)
  $('.restart').on('click', onCreateGame)
  $('.getgames').on('click', onGetGames)
  // $('.box').on('click', gamelogic.onUpdateGame)
}

module.exports = {
  addHandlers
}
