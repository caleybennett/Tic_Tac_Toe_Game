'use strict'
const events = require('./events')
const gameEvents = require('./gameAPI/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// authEvents.addHandlers()
// exampleEvents.addHandlers()

$(() => {
  events.addHandlers()
  gameEvents.addHandlers()
})
