'use strict'
const config = require('../config')
const store = require('../store.js')
// const events = require('./events')
// const gamelogic = require('../gamelogic.js')

const create = event => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const update = (index, value) => {
  return $.ajax({
    url: config.apiUrl + 'games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        }
      }
    }

  })
}

const getgame = () => {
  return $.ajax({
    url: config.apiUrl + 'games/',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  create,
  update,
  getgame
}
