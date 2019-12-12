import React, {useState}    from 'react'
import styled               from 'styled-components'

const IconLoader = (props) => {

    return(
        <LoaderContainer>
            <p>icon</p>
            {props.message && <h4>{props.message}</h4>}
        </LoaderContainer>
    )
}

const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > i {
        margin-bottom: 0;
    }
`

export default IconLoader