import { useState } from 'react';
import axios from 'axios';
import { genFeedbackMessage } from '../helpers';


const Result = (props) => {
  const [highScores, setHighScores] = useState([]);

  const fetchHighScores = () => {
    axios
      .get('https://my-json-server.typicode.com/andydlindsay/moai-axe-tree/high-scores')
      .then(response => setHighScores(response.data))
      .catch(err => console.error(err));
  };

  return(
    <footer data-testid="result_footer">
      <h2>{ genFeedbackMessage(props.status) }</h2>
      <button onClick={fetchHighScores} data-testid="high-scores">High Scores!</button>
      { highScores.map(highScore => <li key={highScore.id}>{highScore.name}: {highScore.points}</li>) }
    </footer>
  );
}

export default Result;
