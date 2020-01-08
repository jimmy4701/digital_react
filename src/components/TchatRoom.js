import React, {useState} from 'react'

function TchatRoom(props){

    const [message, setMessage] = useState('')

    const send_message = (e) => {
        e.preventDefault()
        props.onMessage(message)
        setMessage('')
    }

    return(
        <div className="tchat-room">
            <div>{props.currentUser && props.currentUser.username}</div>
            {props.currentUser && props.currentUser.messages.map(mess => <p>{mess}</p>)}
            <p>{message}</p>
            {props.currentUser &&
                <form onSubmit={e => send_message(e)}>
                    <input value={message} onChange={e => setMessage(e.target.value)} type="text" placeholder="Dites quelque chose"  />
                    <button>Envoyer</button>
                </form>
            }
        </div>
    )
}

export default TchatRoom