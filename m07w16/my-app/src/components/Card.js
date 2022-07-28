function Card(props) {
  const { title, description, color } = props;

  return (
    <div className="card" style={ { backgroundColor: color } }>
      <h3>{ title }</h3>
      <p>{ description }</p>
    </div>
  );
}

export default Card;
