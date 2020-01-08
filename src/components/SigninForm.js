import React, {useState} from 'react'

function SigninForm(props){
    const [email, setEmail]         = useState()
    const [password, setPassword]   = useState()

    const submit = (e) => {
        e.preventDefault()
        if(email && password && password.length > 6){
            props.onSignin()
        }else{
            alert("Il vous manque des données")
        }
    }

    return(
        <form onSubmit={e => submit(e)}>
            <input required onChange={e => setEmail(e.target.value) } type="email" placeholder="Email"  />
            <input required onChange={e => setPassword(e.target.value) } type="password" placeholder="Password" />
            {(email && password) ?
                <button>ok</button>
            :
                <p>Merci de renseigner...</p>
            }
        </form>
    )
}

export default SigninForm