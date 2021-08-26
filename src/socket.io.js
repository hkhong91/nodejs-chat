const io = require('socket.io')()

io.on("connection", (socket) => {
  console.log(socket.id)
})

module.exports = io
