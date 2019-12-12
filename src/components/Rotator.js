import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


function Rotator(props){
    const [rotation, setRotation] = useState(0);

    useEffect(()=>{
        document.addEventListener('scroll', () => {
            setRotation(window.scrollY / 20)
        })
    }, [])

    return(
        <MainContainer>
            <img alt={props.alt || ""} src={props.image_url} />
        </MainContainer>
    )
}

const MainContainer = styled.div`
    display: flex;
    img {
        max-height: 20em;
    }
`

export default Rotator