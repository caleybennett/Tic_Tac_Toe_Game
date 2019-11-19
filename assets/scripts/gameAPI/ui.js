
const store = require('../store')
// const gamelogic = require('../gamelogic')

// const fadeOut = () => {
//   $('#message-user').fadeOut()
// }

const onSuccess = message => {
  $('#message-user')
    .removeClass('failure')
    .addClass('success')
    .html(message)
  $('form').trigger('reset')
  $('.start-game-success').show()
//  setTimeout(fadeOut, 5000)
}

const onFailure = message => {
  $('#message-user')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
  // setTimeout(fadeOut, 5000)
}

const onCreateGameSuccess = gameData => {
  onSuccess('You successfully created a new game! Now, play!')
  store.game = gameData.game
  $('.after-start-game').show()
  $('.restart').show()
  $('.createGame').hide()
  $('.get-games-display').hide()
}

const onCreateGameFailure = () => {
  onFailure('Oh nooooo, something went wrong! Please try again.')
}

const onUpdateGameSuccess = () => {
  onSuccess(`Great move! Game updated!`)
  // $('.after-auth').hide()
  // $('.before-auth').show()
}

const onUpdateGameFailure = () => {
  onFailure('Something went wrong, try another move')
}

// const getBooksSuccess = response => {
//   const books = response.books
//   let bookHtml = ''
//
//   books.forEach(book => {
//     bookHtml += `
//     <h4>${book.title}</h4>
//     <h5>${book.author}</h5>
//     <p> ${book.id}</p>
//     `
//   })
//   $('#results').html(bookHtml)
// }

// {
//   "games": [
//     {
//       "id": 1,
//       "cells": ["o","x","o","x","o","x","o","x","o"],
//       "over": true,
//       "player_x": {
//         "id": 1,
//         "email": "and@and.com"
//       },
//       "player_o": null
//     }



const getGamesSuccess = response => {
  const games = response.games
  let gameHtml = 0
  games.forEach(game => {
    gameHtml++
  })
  $('.get-games-display').html(gameHtml)
  $('.get-games-display').show()
}

const getGamesFailure = () => {
  // console.error(error)
  onFailure('Oh nooooo, something went wrong! Please try again.')
}
module.exports = {
  onCreateGameFailure,
  onCreateGameSuccess,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
