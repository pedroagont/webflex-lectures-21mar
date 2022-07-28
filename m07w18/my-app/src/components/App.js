import useCounter from '../hooks/useCounter';
import useShibe from '../hooks/useShibe';

import Counter from './Counter';
import RandomShibePic from './RandomShibePic';

import './App.css';

function App() {
  const { count, handleDecrement, handleIncrement } = useCounter();
  const { result } = useShibe();
  
  return (
    <>
      <h1>Hi everyone! 👋</h1>
      <Counter count={count} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
      <RandomShibePic result={result} />
    </>
  );
}

export default App;
