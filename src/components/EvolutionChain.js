import { Link } from "react-router-dom";
import { FetchSprite } from "../hooks/FetchSprite";
import EvolutionLine from "../components/EvolutionLine";

function EvolutionChain(props) {
  //console.log(props.evolution);
  const evo = props.evolution;
  if (evo) {
    const arr = evo.map((pokemon) => (
      <div key={pokemon.id}>
        <EvolutionLine info={pokemon} />
      </div>
    ));

    return <div className="pokemon__evolution--chain">{arr}</div>;
  }
}
export default EvolutionChain;

// <div className="arrow"></div>
