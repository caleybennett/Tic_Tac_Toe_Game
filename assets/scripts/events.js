'use strict'



const onClickedSquare = event => {
  event.preventDefault()

  if ($(event.target).html() === ' ') {
    $(event.target).html(player)
    $('#message').html('next players move')
  } else {
    $('#message').html('You already clicked here')
  }

const addHandlers = event => {
  $('.box').on('click', onClickedSquare)
}

module.exports = {
  addHandlers
}
