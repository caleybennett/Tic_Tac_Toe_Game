'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormField = require('../../lib/get-form-fields')
const gamelogic = require('./gamelogic')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormField(form)

  api.signUp(formData)
    .then(ui.onSignupSuccess)
    .catch(ui.onSignupFailure)
}
const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormField(form)

  api.signIn(formData)
    .then(ui.onSigninSuccess)
    .catch(ui.onSigninFailure)
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormField(form)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()

  // leaving out formData becuase we aren't submitting data...
  // const form = event.target

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
  gamelogic.newGame(event)
  $('#message-user').hide()
  $('.after-start-game').hide()
  $('.message').hide()
}

const addHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
