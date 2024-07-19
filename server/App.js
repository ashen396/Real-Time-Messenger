const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')
const cors = require('cors')()

var users = []
app.use(cors)

const socket = io(server, 
    { 
        cors: { 
            origin: '*' 
        } 
    }
)

socket.on("connect", (soc) => {
    soc.on("new_user", (data) => {
        users.push({ "username": data.username })
        console.log(data.username + " Connected")
    })

    soc.on("delete_user", (data) => {
        // let new_users = []
        // users.forEach((value, index, array) => {
        //     if(value !== data.username){
        //         new_users.push(value)
        //     }
        // })
        // users = 
        console.log("User Disconnected")
    })

    soc.on("message", (data) => {
        socket.emit('new_message', data)
    })
})

socket.on("disconnect", () => {
    socket.emit("disconnect_message", "Disconnected")
})

server.listen(4000, "localhost")