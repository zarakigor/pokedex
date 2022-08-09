function Evolution(props) {
  return (
    <div className="pokemon__evolution">
      <p> {props.evolution[0].species_name}</p>
    </div>
  );
}
export default Evolution;
