import { useState } from 'react';

function Card(props) {
  // const { title, description, color } = props;

  // const [cardData, setCardData] = useState({ title, description, color })
  
  /* eslint-disable */
  const [title, setTitle] = useState(props.title || '')
  const [description, setDescription] = useState(props.description || '')
  const [color, setColor] = useState(props.color || '')
  /* eslint-enable */

  return (
    <div className="card" style={ { backgroundColor: color } }>
      <h3>{ title }</h3>
      <p>{ description }</p>
    </div>
  );
}

export default Card;
