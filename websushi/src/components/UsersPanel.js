import { useState } from "react"
import '../styles/UsersPanel.css'

export default function UsersPanel() {
    const [userList, setUserList] = useState(['User1', 'User2', 'User3', 'User4', 'User5'])
    return (
        <>
            <div>
                <h1>Users</h1>
                <ul>
                    {
                        userList.map((value, index, array) =>
                            <li>{value}</li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}