import { useState, useEffect } from 'react';
import axios from 'axios';

function useShibe(props) {
  const [result, setResult] = useState('');
  const { handleIncrement } = props;
  
  useEffect(() => {
    const changeImgInterval = setInterval(() => {
      const API_URL = 'https://shibe.online/api/shibes'
      axios.get(API_URL)
      .then(res => setResult(res.data[0]))
      .then(() => handleIncrement())
      .catch(err => console.log(err))
    }, 2000)
    
    const cleanUp = () => clearInterval(changeImgInterval)
    
    return cleanUp;
  }, [handleIncrement]);
  
  return { result }
}

export default useShibe;
