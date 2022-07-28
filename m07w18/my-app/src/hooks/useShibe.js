import { useState, useEffect } from 'react';
import axios from 'axios';

function useShibe(props) {
  const [result, setResult] = useState('');
  
  useEffect(() => {
    const changeImgInterval = setInterval(() => {
      const API_URL = 'https://shibe.online/api/shibes'
      axios.get(API_URL)
      .then(res => setResult(res.data[0]))
      .catch(err => console.log(err))
    }, 2000)
    
    const cleanUp = () => clearInterval(changeImgInterval)
    
    return cleanUp;
  }, []);
  
  return { result }
}

export default useShibe;
