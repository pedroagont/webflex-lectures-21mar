import { useState } from 'react';

import Card from './Card';

function CardList(props) {
  // eslint-disable-next-line
  const [listData, setListData] = useState(props.listData || []);
  
  return listData.map(el => (
    <Card key={el.id} title={el.title} description={el.description} color={el.color} />
  ))
  
}

export default CardList;
