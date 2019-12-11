import React, {useState} from 'react'
import styled from 'styled-components'


function Header(props) {
    const [current_color, setCurrentColor] = useState(props.color || "red")

    const toggle_color = () => {
        setCurrentColor(current_color === props.color ? "blue" : props.color)
    }

    return(
        <MainContainer {...props} color={current_color} onClick={toggle_color}>
            <h1>Digital Campus Apple</h1>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    background-color: ${(props_mc) => props_mc.color };
    width: 100vw;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        margin: 0;
    }
`


export default Header