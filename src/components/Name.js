function Name(props) {
  const myStyle = props.isPage
    ? { color: "red", fontSize: "2.25em", margin: "0.5em" }
    : {};
  return (
    <div>
      <h3 className="pokemon__name" style={myStyle}>
        {props.name}
      </h3>
    </div>
  );
}

export default Name;
