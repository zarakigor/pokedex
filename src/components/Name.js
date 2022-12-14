function Name(props) {
  const myStyle = props.isSoloPage
    ? { color: "#ffffff", fontSize: "2.25em", margin: "0" }
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
