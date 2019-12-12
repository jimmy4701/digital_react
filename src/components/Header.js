import React from 'react'
import styled from 'styled-components'

function Header(props){

    return(
        <MainContainer>
            <img src={props.image_url || "https://www.apple.com/v/home/er/images/holiday-2019-takeover/holiday_logo__bea2so6p7m76_large.jpg"} alt=""/>
            <h1>{props.title || "Wrap up your gift list."}</h1>
            <a href="#">{props.link_text || "Shop last minutes favorites"} ></a>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2em 0;

    h1 {
        font-weight: bold;
        font-size: 4em;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        font-size: 1.6em;
        color: #06c;
    }
`

export default Header