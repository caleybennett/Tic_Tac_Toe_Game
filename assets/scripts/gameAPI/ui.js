
const store = require('../store')

const onSuccess = message => {
  $('#game-message')
    .removeClass('failure')
    .addClass('success')
    .html(message)
  $('form').trigger('reset')
  $('.start-game-success').show()
}

const onFailure = message => {
  $('#game-message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}

const onCreateGameSuccess = gameData => {
  onSuccess('You successfully created a new game! Now, play!')
  console.log(gameData)
  store.game = gameData.game
  $('.after-start-game').show()
  $('.restart').show()
  $('.createGame').hide()
}

const onCreateGameFailure = () => {
  onFailure('Oh nooooo, something went wrong! Please try again.')
}

const onUpdateGameSuccess = () => {
  onSuccess('Great move! Game updated!')
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
  console.log(response)
  let gameHtml = 0
  games.forEach(game => {
    gameHtml++
  })
  $('.get-games-display').html(gameHtml)
}

const getGamesFailure = error => {
  console.error(error)
}
module.exports = {
  onCreateGameFailure,
  onCreateGameSuccess,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
