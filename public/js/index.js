const socket = io("http://localhost:3000")

socket.on('message', (msg) => {
  let messageList = document.getElementById('message-list')
  let messageItem = document.createElement("p")
  messageItem.innerText = msg
  messageList.appendChild(messageItem)
})

function sendMessage() {
  const messageInput = document.getElementById('message-input')
  const message = messageInput.value
  if (message != '') {
    socket.emit('message', message)
    messageInput.value = ''
  }
}