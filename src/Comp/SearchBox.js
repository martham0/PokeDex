import './SearchBox.css';

function SearchBox(props) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      props.submit();
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    props.submit();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          placeholder="What pokemon would you like to learn about?"
          size="45"
          onChange={props.change}
          onKeyPress={handleKeyPress}
        ></input>
        <button onClick={props.submit}>Submit</button>
      </form>
    </div>
  );
}

export default SearchBox;
