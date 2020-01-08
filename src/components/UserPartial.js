import React from 'react'

function UserPartial(props){
    return(
        <div className="user-partial" {...props}>
            <div className="avatar-container">
                <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/FR/fr/999/EP2402-CUSA05624_00-AV00000000000110/1576760036000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"/>
            </div>
            <div className="info-container">
                <p>{props.user.username}</p>
                <p>{props.user.connected ? "Connecté" : "Non connecté"}</p>
            </div>
        </div>
    )
}

export default UserPartial