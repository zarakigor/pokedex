function Sprite(props) {
  return (
    <div>
      <img
        className="pokemon__image"
        src={props.src}
        alt={`official artwork of ${props.name}`}
      ></img>
    </div>
  );
}
export default Sprite;
