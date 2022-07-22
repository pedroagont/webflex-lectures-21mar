function RandomShibePic(props) {
  const { result } = props;
  
  return result && (
    <div className="random-shibe-container">
      <img src={ result } alt="random shibe"/>
    </div>
  );
}

export default RandomShibePic;
