function Counter(props) {
  // const { count, handleIncrement } = props;
  const { count } = props;
  
  if(count === 0) {
    return (<h2>Loading shibes... 😎</h2>)
  }

  return (
    <>
      <h2>Cute shibes count: { count } 🦮</h2>
      {/*<button onClick={handleIncrement}>Increment!</button>*/}
    </>
  );
}

export default Counter;
