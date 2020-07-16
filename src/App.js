import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//Import Components
import Header from './Components/header'
import Section from './Components/section'
import Slider from './Components/Slider'
function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Slider />
          <Section />
      </Router>
    </div>
  );
}

export default App;
