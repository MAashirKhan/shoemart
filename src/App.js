import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//Import Components
import Header from './Components/header'
import Section from './Components/section'

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Section />
      </Router>
    </div>
  );
}

export default App;
