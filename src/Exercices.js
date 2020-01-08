import React, {useState}    from 'react'
import UsersList            from './components/UsersList'
import TchatRoom            from './components/TchatRoom'

function LandingPage(props){
    const [current_user, setCurrentUser] = useState()

    const new_message = message => {
        current_user.messages.push(message)
        setCurrentUser(current_user)
    }

    return(
        <div className="main-container">
            <div id="left-part">
                <UsersList currentUser={current_user} onUserChange={user => setCurrentUser(user)} />
            </div>
            <div id="right-part">
                <TchatRoom currentUser={current_user} onMessage={message => new_message(message)} />
            </div>
        </div>
    )
}

export default LandingPage