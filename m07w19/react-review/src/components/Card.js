function Card(props) {
  const { name } = props;
  
  return (
    <article className="card">
      <h3>{ name }</h3>
    </article>
  );
}

export default Card;
