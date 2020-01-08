import React from 'react'
import styled from 'styled-components'

function Bandeau(props){
    return(
        <MainContainer {...props}>
            <h1>{props.title || "iPhone"}</h1>
            <h2>{props.subtitle || "Achetez le dès maintenant"}</h2>
            <p>From $24.95/mo. or $599 with trade‑in.</p>
            <LinksContainer>
                <a>Learn more ></a>
                <a>Buy ></a>
            </LinksContainer>
        </MainContainer>
    )
}

const LinksContainer = styled.div`
    a {
        color: #2997ff;
        font-size: 1.5em;
        margin: 0 2em;
    }
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.inversed ? 'white' : 'black'};
    color: ${props => props.inversed ? 'black' : 'white'};
    padding-top: 3em;
    font-family: "Roboto";
    min-height: 40em;
    background-image: url(${props => props.image || "https://www.apple.com/v/home/er/images/heroes/iphone-11-pro/hero__dvsxv8smkkgi_largetall.jpg"});
    background-position: center;
    background-size: cover;

    h1 {
        margin-bottom: 0;
        font-size: 4em;
    }

    h2 {
        margin: 0;
    }

    p {
        color: grey;
    }
`

export default Bandeau
