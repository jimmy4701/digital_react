import React, {useState} from 'react'
import SigninForm from './components/SigninForm'

function LandingPage(props){
    const [signed, setSigned] = useState(false)

    const sign_in = (email, password) => {
        setSigned(true)
    }

    console.log('MODIF PAGE')

    return(
        <div className="main-container">
            <div id="left-part">
                <p>MES AMIS</p>
            </div>
            <div id="right-part">
                <p>DISCUSSION</p>
            </div>
        </div>
    )
}

export default LandingPage