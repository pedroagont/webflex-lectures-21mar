import CardList from './CardList';
import useAppData from '../hooks/useAppData';
import './App.css'

function App() {
  const { results } = useAppData();
  
  return (
    <>
      <img
        src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/DXHLGFJ4TFBTPHDV7B5NSKUEBE.jpg"
        alt="star wars characters"
        width="30%"
        style={{ borderRadius: '20px' }}
      />
      <h1>Star Wars characters 🌌</h1>
      <CardList results={results}/>
    </>
  );
}

export default App;
