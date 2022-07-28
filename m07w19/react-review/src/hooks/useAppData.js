import { useState, useEffect } from 'react';
import axios from 'axios';

function useAppData() {
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    const API_URL = 'https://swapi.dev/api/people';
    axios.get(API_URL)
      .then(res => setResults(res.data.results))
      .catch(err => console.error(err));
  }, [])
  
  return { results }
}

export default useAppData;
