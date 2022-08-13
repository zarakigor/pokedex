import { Link } from "react-router-dom";

function Evolution(props) {
  console.log(props.evolution);
  const evo = props.evolution;
  if (evo) {
    const arr = evo.map((pokemon) => (
      <div>
        <div className="arrow"></div>
        <p>{pokemon.species_name}</p>
      </div>
    ));
    props.evolution.map((name) => console.log(name.species_name));
    return (
      <div className="pokemon__evolution">
        {/* <p> {evo[0].species_name}</p>
        <div className="arrow"></div> */}
        {arr}
      </div>
    );
  }
}
export default Evolution;
