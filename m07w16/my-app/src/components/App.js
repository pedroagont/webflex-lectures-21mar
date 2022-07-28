import CardList from './CardList';
import './App.css';

const appData = [
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
  return (
    <>
      <h1>Hello from React! 👋⚛️</h1>
      <CardList listData={appData}/>
    </>
  );
}

export default App;
