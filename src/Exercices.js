import React, {useState} from 'react'
import UsersList from './components/UsersList'

function LandingPage(props){
    const [signed, setSigned] = useState(false)

    const sign_in = (email, password) => {
        setSigned(true)
    }

    console.log('MODIF PAGE')

    return(
        <div className="main-container">
            <div id="left-part">
                <UsersList />
            </div>
            <div id="right-part">
                <p>DISCUSSION</p>
            </div>
        </div>
    )
}

export default LandingPage