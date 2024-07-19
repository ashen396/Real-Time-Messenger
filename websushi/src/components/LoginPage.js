import { io } from 'socket.io-client'
import configuration from '../Configuration.json'
import '../styles/LoginPage.css'

const socket = io(configuration.url, { autoConnect: false })

function LoginUser() {
    socket.connect()
    socket.on("connect", () => {
        let username = document.getElementById("username").value
        socket.emit("new_user", { "username": username })
        if (socket.connected) {
            window.location.href = '/chat'
            localStorage.setItem("user", username)
            socket.disconnect()
        }
    })
}

export default function LoginPage() {
    return (
        <>
            <div>
                <p>Username</p>
                <input id='username' className='form-control' type="text" autoComplete='off' />
                <p>Password</p>
                <input id='password' className='form-control' type="password" />
                <input type="submit" className='btn btn-primary' onClick={() => LoginUser()} />
            </div>
        </>
    )
}