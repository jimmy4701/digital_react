import React        from 'react';
import Navbar       from './components/Navbar.js';
import Header       from './components/Header.js';
import Rotator      from './components/Rotator.js';


function App() {

  const widgets = [
    {title: "Mon site"},
    {title: "Apple c'est de la balle !", link_text: "Aller vers Apple"},
    {title: "Joyeux Noel"},
  ]

  return (
    <div>
      <Navbar />
      <Header />
      {widgets.map(current_element => <Rotator />)}
    </div>
  );
}

export default App;
