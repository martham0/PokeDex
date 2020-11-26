function SearchBox(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="What pokemon would you like to learn about?"
        size="45"
        value={props.name}
        onChange={props.change}
      ></input>
      <button onClick={props.submit}>Submit</button>
    </div>
  );
}

export default SearchBox;
