import Card from './Card';

function CardList(props) {
  return props.listData.map(el => (
    <Card key={el.id} title={el.title} description={el.description} color={el.color} />
  ))
  
}

export default CardList;
