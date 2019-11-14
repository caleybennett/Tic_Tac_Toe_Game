'use strict'

let player = 'X'

const changePlayer = newPlayer => {
  if (newPlayer === 'X') {
    player = 'O'
  } else if (newPlayer === 'O') {
    player = 'X'
  }
  console.log(player)
}

module.exports = {
  changePlayer,
  player
}
