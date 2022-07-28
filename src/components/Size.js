function Size(props) {
  const { height, weight } = props.size;
  return (
    <div className="pokemon__size">
      <p>
        <span>Height:</span> {height / 10} m
      </p>

      <p>
        <span>Weight:</span> {weight / 10} kg
      </p>
    </div>
  );
}
export default Size;
