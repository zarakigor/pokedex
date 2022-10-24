import { FetchSprite } from "../hooks/FetchSprite";
import EvolutionStage from "./EvolutionStage";

function EvolutionChain(props) {
  console.log(props.evolution);
  const evo = props.evolution;
  if (evo) {
    const arr = evo.map((pokemon) => (
      <div key={pokemon.id}>
        <EvolutionStage info={pokemon} />
      </div>
    ));

    return <div className="pokemon__evolution--chain">{arr}</div>;
  }
}
export default EvolutionChain;
