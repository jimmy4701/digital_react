import React, {useState} from 'react'
import UserPartial from './UserPartial'

function UsersList(props){
    const [users, setUsers] = useState([
        {messages: [], username: "Toto"},
        {messages: [], username: "Jimmy", connected: true},
        {messages: [], username: "Alice"}
    ])
    return(
        <div>
            {users.map(user => <div>
                <UserPartial onClick={() => props.onUserChange(user)} user={user} />
            </div>)}
        </div>
    )
}

export default UsersList

