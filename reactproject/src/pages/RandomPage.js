// @ts-check

import React from 'react';
// import { Route, Routes } from 'react-router';
import Article from '../components/Article';
import Results from '../components/Results';
import SearchForm from '../components/Search';

function App() {
  return (
    <div>
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/de/Wikipedia-logo_%28inverse%29.png"
          alt="Wikipedia Logo"
          width="300"
        />
      </div>
      <h1 className='wikipediaTitle'>WikipediA</h1>
      <div className='instructions'>Either click the button to generate a random topic:</div>
      <Article />
      <div className='instructions'>Or search for one of your own down below:</div>
      <SearchForm />
      <Results />
    </div>
  );
}

export default App;
