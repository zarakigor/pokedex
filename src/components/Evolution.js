function Evolution(props) {
  //  props ? console.log(props) : console.log("yok");
  // conditional ı return un başına koy
  const evo = props.evolution;
  return (
    <div className="pokemon__evolution">
      {evo && <p> {evo[0].species_name}</p>}
    </div>
  );
}
export default Evolution;
