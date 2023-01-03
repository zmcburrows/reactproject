// @ts-check
import React from 'react';
import { Link } from "react-router-dom";



function App() {
  return (
    <div className='homeApp'> 
  <div className='homeInstructions'>Choose a Boredom Buster and go down the rabbit hole to your heart's content:</div>
  <Link to="randompage" className = 'availableApp'><img
          src="https://upload.wikimedia.org/wikipedia/commons/d/de/Wikipedia-logo_%28inverse%29.png"
          alt="Wikipedia Logo"
          width="300"
        /></Link>
    
    </div>
  );
}

export default App;
