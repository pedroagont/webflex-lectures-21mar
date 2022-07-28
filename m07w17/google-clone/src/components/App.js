import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import allResults from '../data/mock-db';
import './App.css'

const App = () => {
  const [results, setResults] = useState(allResults);

  const filterResults = (searchTerm) => {
    const filtered = allResults
      .filter(result => result.content.toLowerCase().includes(searchTerm.toLowerCase()));
    
    setResults(filtered);
  };
  
  return (
    <>
      <img width="30%" src="https://www.logolynx.com/images/logolynx/9e/9ecef5075014d956d39f281d34712998.png" alt="google logo" />
      <SearchBar onClick={ searchTerm => filterResults(searchTerm) }/>
      <SearchResults results={ results } />
    </>
  );
}

export default App;
