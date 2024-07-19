import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import configuration from '../Configuration.json'
import '../styles/ChatPanel.css'

const socket = io(configuration.url, { autoConnect: true })

async function ListenForMessages(setState) {
    socket.on('new_message', (data) => {
        let json_data = JSON.parse(data)
        let user = localStorage.getItem('user')
        if (json_data.username !== user) {
            msgs.push(JSON.parse(data))
            setState([...msgs])
        }
    })
}

function LogoutUser() {
    let username = localStorage.getItem("user")
    socket.emit('delete_user', { "username": username })
    localStorage.removeItem('user')
    window.location.href = '/'
}

function GetUser() {
    return localStorage.getItem("user")
}

let msgs = []
function SendMessage(setState) {
    let msg = document.getElementById('message').value
    if (String(msg).length > 0) {
        let data = {
            username: GetUser(),
            messagebody: msg
        }
        msgs.push(data)
        setState([...msgs])

        socket.emit('message', JSON.stringify(data))
        document.getElementById("message").value = null
    }
}

export default function ChatPanel() {
    const [username, setUsername] = useState("")
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user !== null)
            setUsername(user)

        ListenForMessages(setMessages)
    }, [])
    return (
        <>
            <div>
                <p>Hello {username}</p>
                <input className="btn btn-primary logout-btn" type="submit" value="Logout" onClick={() => LogoutUser()} />
                <div id="msgs-container">
                    <ul>
                        {messages.map((value, index, array) =>
                            <li key={index++} className={value.username === GetUser() ? "usr-msg row" : "row"}>
                                <p>{value.username === GetUser() ? "Me" : value.username}</p>
                                <p>{value.messagebody}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="msg-panel">
                    <input className="form-control msg-box" id='message' type="text" placeholder="Type a message..." autoComplete="false" />
                    <input className="btn btn-primary msg-btn" type="submit" value="Send Message" onClick={() => SendMessage(setMessages)} />
                </div>
            </div>
        </>
    )
}