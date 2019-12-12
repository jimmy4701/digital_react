import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


function Rotator(props){
    const [rotation, setRotation] = useState(props.rotation || 0);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setRotation(window.scrollY / 20)
        })
    }, [])

    return(
        <MainContainer rotation={rotation}>
            <img alt={props.alt || ""} src={props.image_url} />
        </MainContainer>
    )
}

const MainContainer = styled.div`

    display: flex;
    width: 30%;
    justify-content: center;

    img {
        max-height: 20em;
        transform: rotate(${props_mc => props_mc.rotation}deg);
    }
`

export default Rotator