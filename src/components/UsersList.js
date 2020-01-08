import React, {useState} from 'react'
import UserPartial from './UserPartial'

function UsersList(props){
    const [users, setUsers] = useState([
        {username: "Toto"},
        {username: "Jimmy"},
        {username: "Alice"}
    ])
    return(
        <div>
            {users.map(user => <div>
                <UserPartial user={user} />
            </div>)}
        </div>
    )
}

export default UsersList

