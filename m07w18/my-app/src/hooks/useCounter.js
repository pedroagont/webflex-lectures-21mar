import { useState, useEffect } from 'react';

function useCounter(props) {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => setCount(count+1)
  
  useEffect(() => {
    document.title = `Counter at ${count}`
  }, [count])
  
  return { count, handleIncrement }
}

export default useCounter;
