function Type(props) {
  return (
    <div className="pokemon__types">
      {props.types[0] && (
        <div className={`icon ${props.types[0].type.name}`}>
          <img
            src={`./icons/${props.types[0].type.name}.svg`}
            alt={`symbol of ${props.types[0].type.name} type`}
            title={props.types[0].type.name}
          ></img>
        </div>
      )}
      {props.types[1] && (
        <div className={`icon ${props.types[1].type.name}`}>
          <img
            src={`./icons/${props.types[1].type.name}.svg`}
            alt={`symbol of ${props.types[1].type.name} type`}
            title={props.types[1].type.name}
          ></img>
        </div>
      )}
    </div>
  );
}

export default Type;
