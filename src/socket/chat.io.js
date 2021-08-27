const io = require('socket.io')()

io.on("connection", (socket) => {
  console.log('user connected.' + socket.id)

  socket.on('message', (text) => {
    console.log('Message received: ' + text)
    io.emit('message', text)
  })

  socket.on('disconnect', function () {
    console.log('user disconnected.')
  })
})

module.exports = io
