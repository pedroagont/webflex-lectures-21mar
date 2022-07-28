import Card from './Card';

function CardList(props) {
  const { results } = props;
  
  return (
      <div className="cards-container">
        {results.map(el => <Card key={el.name} name={el.name} />)}
      </div>
  );
}

export default CardList;
