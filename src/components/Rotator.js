import React from 'react'
import styled from 'styled-components'


function Rotator(props){
    return(
        <MainContainer>
            <img alt="" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022219953" />
        </MainContainer>
    )
}

const MainContainer = styled.div`
    img {
        max-height: 20em;
    }
`

export default Rotator