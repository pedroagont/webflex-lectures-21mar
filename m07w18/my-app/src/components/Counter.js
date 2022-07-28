function Counter(props) {
  const { count, handleDecrement, handleIncrement } = props;

  return (
    <div className="counter-container">
      <button onClick={handleDecrement}>Decrement 🔽</button>
      <h2>Count: { count } 🔄</h2>
      <button onClick={handleIncrement}>Increment 🔼</button>
    </div>
  );
}

export default Counter;
