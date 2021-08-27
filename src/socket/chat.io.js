const io = require('socket.io')({
  cors: {
    origin: 'http://localhost:3000',
  }
})

io.on("connection", (socket) => {
  console.log(`user connected. ${socket.id}`)

  socket.on('message', (text) => {
    console.log(`Message received: ${text}`)
    io.emit('message', text)
  })

  socket.on('disconnect', () => {
    console.log(`user disconnected. ${socket.id}`)
  })
})

module.exports = io
