
import { useState } from 'react';
import CardList from './CardList';
import './App.css';

const initialAppData = [
  {
    id: 1,
    title: 'Ed',
    description: 'This is Ed!',
    color: 'royalblue',
  },
  {
    id: 2,
    title: 'Edd',
    description: 'This is Edd!',
    color: 'tomato',
  },
  {
    id: 3,
    title: 'Eddy',
    description: 'This is Eddy!',
    color: 'gold',
  }
]

function App() {
  // eslint-disable-next-line
  const [appData, setAppData] = useState(initialAppData)
  
  return (
    <>
      <h1>Hello from React! 👋⚛️</h1>
      <CardList listData={appData}/>
    </>
  );
}

export default App;
