import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return(
        <MainContainer>
            <Item href="https://apple.com">
                <img src="https://www.apple.com/ac/globalnav/5/en_US/images/globalnav/apple/image_large.svg" />
            </Item>
            <Item href="https://apple.com">Mac</Item>
            <Item href="https://apple.com">iPad</Item>
            <Item href="https://apple.com">iPhone</Item>
            <Item href="https://apple.com">Watch</Item>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Item = styled.a`
    color: white;
    margin: 0 0.5em;
    text-decoration: none;
`

export default Navbar