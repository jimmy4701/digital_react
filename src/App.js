import React        from 'react';
import Navbar       from './components/Navbar.js';
import Header       from './components/Header.js';
import Rotator      from './components/Rotator.js';
import styled       from 'styled-components';

import IconLoader from './components/IconLoader'


function App() {

  const widgets = [
    {rotation: 30, image_url: "https://static.boutique.orange.fr/media-cms/mediatheque/636x900-iphone-7-noir---vue-1-137069.jpg"},
    {image_url: "https://images.frandroid.com/wp-content/uploads/2019/08/apple-iphone-11-frandroid-2019.png"},
    {rotation: 136, image_url: "https://images.frandroid.com/wp-content/uploads/2019/08/apple-iphone-11-frandroid-2019.png"},
    {image_url: "https://www.zdnet.fr/images-produits/edit/2019/09/iphone-11-pro-the-core-1-big.jpg"},
    {image_url: "https://images.frandroid.com/wp-content/uploads/2019/08/apple-iphone-11-frandroid-2019.png"},
    {image_url: "https://www.zdnet.fr/images-produits/edit/2019/09/iphone-11-pro-the-core-1-big.jpg"},
    {image_url: "https://static.boutique.orange.fr/media-cms/mediatheque/636x900-iphone-7-noir---vue-1-137069.jpg"},
    {image_url: "https://www.zdnet.fr/images-produits/edit/2019/09/iphone-11-pro-the-core-1-big.jpg"},
    {image_url: "https://images.frandroid.com/wp-content/uploads/2019/08/apple-iphone-11-frandroid-2019.png"},
  ]

  return (
    <div>
      <Navbar />
      <Header />
      <IconLoader message="WOUHOU !"/>
      <RotatorsContainer>
        {widgets.map(current_element => <Rotator {...current_element} />)}
      </RotatorsContainer>
    </div>
  );
}

const RotatorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export default App;
